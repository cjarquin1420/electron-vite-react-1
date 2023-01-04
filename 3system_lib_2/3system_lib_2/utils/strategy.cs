using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3system_lib_2.utils
{
    public class strategyReturn {
        public strategyReturn() {
            this.commands = new List<string>();
            this.backupDir = string.Empty;
        }
        public List<string> commands { get; set; }
        public string backupDir { get; set; }
    }
    public abstract class strategy
    {
        public strategyReturn _strategyReturn { get; set; }
        public abstract void execute();
    }
}
