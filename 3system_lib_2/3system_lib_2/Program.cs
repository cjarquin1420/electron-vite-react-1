using _3system_lib_2.utils;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3system_lib_2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var processToRun = (process)(args.Length > 0 ? Convert.ToInt32(args[0]) : -1);
            context strategyContext = null;
            if (processToRun == process.BACKUP) {
                strategyContext = new context(new backup());
            }

            if (strategyContext != null)
            {
                strategyContext.execute();
                var commandsString = JsonConvert.SerializeObject(strategyContext.get()._strategyReturn);
                Console.WriteLine(commandsString);
            }
            else
            {
                Console.Error.WriteLine("the proccess sent is not valid");
            }
        }
    }
}
