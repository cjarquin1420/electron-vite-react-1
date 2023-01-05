using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3system_lib_2.utils
{
    internal class install : strategy
    {
        string CurrentDate = DateTime.Now.ToString("yyyyMMdd", System.Globalization.DateTimeFormatInfo.InvariantInfo);
        string Path3System = "C:\\3System\\";
        string PathCurrent = Directory.GetCurrentDirectory();
        string Path3SystemBackup
        {
            get
            {
                Microsoft.Win32.RegistryKey key = Microsoft.Win32.Registry.CurrentUser.CreateSubKey("Software\\3S-Phoenix\\DBOS\\Backup\\");
                return key.GetValue("Path3SystemBackup", "\0").ToString();
            }
            set
            {
                Microsoft.Win32.RegistryKey key = Microsoft.Win32.Registry.CurrentUser.CreateSubKey("Software\\3S-Phoenix\\DBOS\\Backup\\");
                key.SetValue("Path3SystemBackup", value);
            }
        }

        public install()
        {
            this._strategyReturn = new strategyReturn();
        }

        public override void execute()
        {
            try
            {
                if (Path3SystemBackup == "\0" || !Path3SystemBackup.Contains(CurrentDate))
                {
                    this._strategyReturn.commands.Add("尚未備份");
                    return;
                }

                this._strategyReturn.commands.Add("========================================");
                this._strategyReturn.commands.Add("安裝 DBos 到 C:\\3System 目錄");
                File.SetAttributes(Path3System, File.GetAttributes(Path3System) & ~FileAttributes.ReadOnly);
                var srcList = fileutils.CopyDirectory(PathCurrent + "\\ReleaseFiles\\", Path3System);
                srcList.ForEach((item) => this._strategyReturn.commands.Add(item));
                this._strategyReturn.commands.Add("安裝 DBos 到 C:\\Windows\\System 目錄");
                var src = fileutils.CCCopyFile(PathCurrent + "\\ReleaseFiles\\DBOS.tlb", "C:\\Windows\\System\\DBOS.tlb", true);
                if (src != string.Empty) this._strategyReturn.commands.Add(src);
                this._strategyReturn.commands.Add("註冊" + Path3System + "DBOS.dll");
                Process a = Process.Start("regsvr32", Path3System + "DBOS.dll /s ");
                this._strategyReturn.commands.Add("安裝 DBos 完成.");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
