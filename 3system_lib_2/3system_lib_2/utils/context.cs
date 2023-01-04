using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3system_lib_2.utils
{
    public class context
    {
        strategy _strategy;

        public context(strategy _strategy) {
            this._strategy = _strategy;
        }

        public strategy get() => _strategy;

        public void execute() {
            _strategy.execute();
        }
    }
}
