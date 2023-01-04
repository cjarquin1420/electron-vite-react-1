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
            var strategyContext = new context(new backup());
            strategyContext.execute();
            var commandsString = JsonConvert.SerializeObject(strategyContext.get()._strategyReturn);
            Console.WriteLine(commandsString);
        }
    }
}
