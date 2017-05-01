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
    var vm = this;
    vm.bal;
    vm.apr;
    vm.term;

    vm.calculateMortgage = function() {
      /*
      My poor attempt at finding a function for an on form submission filter for a missing input.

      if (WHAT GOES HERE) {
        vm.outputText = ("Please enter your information into every field.")
      } else {*/
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
        vm.outputText = ("Your monthly payments will be $" + monthlyPayment)
      // }
    }
  }
})();
