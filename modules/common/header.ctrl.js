'use strict';

/**
 * @ngdoc function
 * @name auctionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the auctionApp
 */
auctionApp
    .controller('HeaderCtrl', function($scope, $state, customerAuth, $window, PropertiesModel) {
        var isUserLoggedIn = function() {
            var retrievedObject = localStorage.getItem('email');
            console.log(retrievedObject);
            if (retrievedObject) {
                customerAuth.setAuthToken(retrievedObject);
                customerAuth.setAuthMessage("Allo! Welcome back " + retrievedObject + ".");
                return true;
            } else {
                customerAuth.setAuthMessage("Please login to view customized properties.");
                return false;
            }
        };
        $scope.isActiveMenu = function(curState) {
            return curState == $state.current.name;
        };
        $scope.logoutMe = function() {
            localStorage.removeItem("email");
            $window.location.reload();
        };
        $scope.searchProperty = function() {
            console.log($scope.searchText);
            if ($scope.searchText) {
                PropertiesModel.searchProperty($scope.searchText.toLowerCase());
                $state.go("base.propertySearch");
            }
        };
        var initApp = function() {
            $scope.searchText = "buil";
            $scope.isUserLoggedIn = isUserLoggedIn();
        };
        initApp();
        console.log($scope.$parent);
        console.log($scope.$parent.test);
    });
