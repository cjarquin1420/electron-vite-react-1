using _3system_lib_2.utils;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3system_lib_2
{
    public static class fileutils
    {
        public static string NextDir(string dir)
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

        public static List<string> CopyDirectory(string srcDirectory, string dstDirectory)
        {
            var copyFileSrc = new List<string>();
            try
            {
                if (!Directory.Exists(dstDirectory))
                {
                    Directory.CreateDirectory(dstDirectory);
                }

                DirectoryInfo sdir = new DirectoryInfo(srcDirectory);
                foreach (FileInfo fi in sdir.GetFiles())
                {
                    var src = CCCopyFile(fi.FullName, dstDirectory + Path.DirectorySeparatorChar + fi.Name, true);
                    if (src != string.Empty) copyFileSrc.Add(src);
                }
                foreach (DirectoryInfo di in sdir.GetDirectories())
                {
                    CopyDirectory(di.FullName, dstDirectory + Path.DirectorySeparatorChar + di.Name);
                }

                return copyFileSrc;
            }
            catch (IOException iox)
            {
                throw (iox);
            }
        }

        public static string CCCopyFile(string src, string tag, bool overwriteflag)
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

                    File.Copy(src, tag, overwriteflag);
                    return src;
                }
                else
                    return string.Empty;
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }

        public static FileAttributes RemoveAttribute(FileAttributes attributes, FileAttributes attributesToRemove)
        {
            return attributes & ~attributesToRemove;
        }
    }
}
