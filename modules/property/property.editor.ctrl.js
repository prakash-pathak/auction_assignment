'use strict';

/**
 * @ngdoc function
 * @name auctionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the auctionApp
 */
auctionApp
    .controller('PropertyEditorCtrl', function($scope, $state, customerAuth, PropertyModel, PropertiesModel) {
        $scope.user = customerAuth.getAuthToken();
        if (!$scope.user) {
            customerAuth.setAuthMessage("You need to login to edit/update any property.");
            $state.go("base.home");
        }
        $scope.p = PropertiesModel.getSelected(true);
        if (!$scope.p)
            $scope.p = new PropertyModel("ft2", $scope.user);
        $scope.submitProperty = function() {
            console.log($scope.p);
            //update in service ignoring this part as of now
            PropertiesModel.createOrUpdate($scope.p);
            $state.go("base.home");
        };
    });
