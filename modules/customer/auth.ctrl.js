'use strict';

/**
 * @ngdoc function
 * @name auctionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the auctionApp
 */
auctionApp
    .controller('AuthCtrl', function($scope, $state, customerAuth, CustomerAuthService) {
        $scope.customer = {};
        $scope.message = null;
        $scope.loginUser = function() {
            console.log($scope.customer.email);
            var userAuthentication = CustomerAuthService.loginUser($scope.customer.email, $scope.customer.pwd);
            if (userAuthentication.isSuccess) {
                localStorage.setItem('email', userAuthentication.email);
                customerAuth.setAuthToken(userAuthentication.email);
                customerAuth.setAuthMessage("Allo! You logged in successfully as " + $scope.customer.email + ".");
                $scope.message = "You logged in successfully. ";
                $state.go("base.home");
            } else {
                $scope.message = "Sorry, wrong credentials!!! "
            }

        };
        var isUserLoggedIn = function() {
            var retrievedObject = localStorage.getItem('email');
            if (retrievedObject) {
                $state.go("base.home");
            }
        };
        console.log($scope.$parent.test);
        isUserLoggedIn();
    });
