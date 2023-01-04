using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace _3system_lib_2.utils
{
    public class backup: strategy
    {
        string CurrentDate = DateTime.Now.ToString("yyyyMMdd", System.Globalization.DateTimeFormatInfo.InvariantInfo);
        string Path3System = "C:\\3System\\";
        List<string> commands = new List<string>();
        string Path3SystemBackup
        {
            get {
                Microsoft.Win32.RegistryKey key = Microsoft.Win32.Registry.CurrentUser.CreateSubKey("Software\\3S-Phoenix\\DBOS\\Backup\\");
                return key.GetValue("Path3SystemBackup", "\0").ToString();
            }
            set {
                Microsoft.Win32.RegistryKey key = Microsoft.Win32.Registry.CurrentUser.CreateSubKey("Software\\3S-Phoenix\\DBOS\\Backup\\");
                key.SetValue("Path3SystemBackup", value);
            }
        }

        public backup() {
            this._strategyReturn = new strategyReturn();
        }


        private void BackupRegTo3System()
        {
            ProcessStartInfo procStartIfo = new ProcessStartInfo();
            if (Environment.Is64BitOperatingSystem)
            {
                procStartIfo.FileName = "C:\\Windows\\SysWOW64\\cmd.exe";
                procStartIfo.Arguments = "/c C:\\Windows\\sysnative\\cmd.exe /c reg.exe EXPORT HKEY_LOCAL_MACHINE\\Software\\3s " + Path3System + CurrentDate + ".reg /y";
            }
            else
            {
                procStartIfo.FileName = "reg.exe";
                procStartIfo.Arguments = "EXPORT HKEY_LOCAL_MACHINE\\Software\\3S " + Path3System + CurrentDate + ".reg /y";
            }
            procStartIfo.UseShellExecute = false;
            procStartIfo.CreateNoWindow = false;
            procStartIfo.RedirectStandardOutput = true;

            try
            {
                _strategyReturn.commands.Add("備份註冊表 HKEY_LOCAL_MACHINE\\Software\\3S 到 " + Path3System + CurrentDate + ".reg");
                var process = new Process();
                process.StartInfo = procStartIfo;
                process.Start();
                process.WaitForExit();
            }
            catch (Exception ex)
            {
                throw(ex);
            }
        }

        private bool Backup3System()
        {

            if (Path3SystemBackup.Contains(CurrentDate))
                Path3SystemBackup = NextDir(Path3SystemBackup);
            else
                Path3SystemBackup = "c:\\backup\\3System_" + CurrentDate + "\\";

            _strategyReturn.commands.Add("備份 " + Path3System + " 目錄到 " + Path3SystemBackup);

            //記錄 3System 備份路徑
            if (Directory.Exists(Path3System))
            {
                CopyDirectory(Path3System, Path3SystemBackup);
            }

            _strategyReturn.backupDir = Path3SystemBackup;
            return true;
        }

        #region fileutils
        private string NextDir(string dir)
        {
            string result = dir;
            if (Directory.Exists(dir))
            {
                string[] subs = dir.Split('_');
                if (subs.Length == 3)
                {
                    int num = Convert.ToInt16(subs[2].Trim('\\')) + 1;
                    string tmpdir = subs[0] + "_" + subs[1] + "_" + num.ToString("00") + "\\";
                    if (Directory.Exists(tmpdir))
                    {
                        NextDir(tmpdir);
                    }
                    result = tmpdir;
                }
                else if (subs.Length == 2)
                {
                    result = result.TrimEnd('\\') + "_01\\";
                }
            }

            return result;
        }

        private void CopyDirectory(string srcDirectory, string dstDirectory)
        {
            try
            {
                if (!Directory.Exists(dstDirectory))
                {
                    Directory.CreateDirectory(dstDirectory);
                }

                DirectoryInfo sdir = new DirectoryInfo(srcDirectory);
                foreach (FileInfo fi in sdir.GetFiles())
                {
                    CCCopyFile(fi.FullName, dstDirectory + Path.DirectorySeparatorChar + fi.Name, true);
                }
                foreach (DirectoryInfo di in sdir.GetDirectories())
                {
                    CopyDirectory(di.FullName, dstDirectory + Path.DirectorySeparatorChar + di.Name);
                }
            }
            catch (IOException iox)
            {
                throw (iox);
            }
        }

        private bool CCCopyFile(string src, string tag, bool overwriteflag)
        {
            try
            {
                src = src.Replace("\\\\", "\\");
                tag = tag.Replace("\\\\", "\\");
                if (File.Exists(src))
                {
                    if (File.Exists(tag))
                    {
                        FileAttributes attributes = File.GetAttributes(tag);
                        if ((attributes & FileAttributes.ReadOnly) == FileAttributes.ReadOnly)
                        {
                            // Make the file RW
                            attributes = RemoveAttribute(attributes, FileAttributes.ReadOnly);
                            File.SetAttributes(tag, attributes);
                        }
                    }

                    _strategyReturn.commands.Add(src);
                    File.Copy(src, tag, overwriteflag);
                    return true;
                }
                else
                    return false;
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }

        private static FileAttributes RemoveAttribute(FileAttributes attributes, FileAttributes attributesToRemove)
        {
            return attributes & ~attributesToRemove;
        }
        #endregion

        public override void execute()
        {
            BackupRegTo3System();
            Backup3System();
            _strategyReturn.commands.Add("備份完成.");
        }
    }
}
