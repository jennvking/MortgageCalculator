(function() {
  'use strict';

  angular
    .module('app', []);
})();

(function() {
  'use strict';

  angular
    .module('app')
    .controller('MortgageController', MortgageController);

  MortgageController.$inject = [];

  /* @ngInject */
  function MortgageController() {
    //define variables according to inputs
    var vm = this;
    vm.bal;
    vm.apr;
    vm.term;

    //create function to calculate mortgage
    vm.calculateMortgage = function() {
        // monthly interest rate
        let monthlyInterestRate = (vm.apr / 100) / vm.loanperiods;
        // number of payments
        let numberOfPayments = vm.term * vm.loanperiods;
        // compounded interest rate
        let compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
        // interest quotient
        let interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
        // final calculation
        let monthlyPayment = Math.round(vm.bal * interestQuotient).toFixed(0);
        //pull monthly payment variable and assign to text output variable, then bind to output p in html
        vm.outputText = ("Your monthly payments will be $" + monthlyPayment)
      // }
    }
  }
})();

/* I will be coming back to edit the behavior of this application so that
  if a field is not entered, no text will appear at the bottom of the webpage,
  and an alert will appear to enter appropriate information into all
  fields.
  */
