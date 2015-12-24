'use strict';

/**
 * @ngdoc function
 * @name auctionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the auctionApp
 */
auctionApp
    .controller('MainCtrl', function($scope, $state, customerAuth, PropertiesModel, PropertyService) {
        $scope.message = customerAuth.getAuthMessage();
        $scope.isLoggedUser = customerAuth.getAuthToken() ? true : false;
        //http://api.nestoria.in/api?place_name=delhi&listing_type=buy&country=in&encoding=json&action=search_listings&pretty=1
        var getBasicPropertyListing = function() {
            $scope.properties = PropertiesModel.getAll();
            console.log($scope.properties);
        };
        var getSetViewType = function() {
            var viewType = localStorage.getItem('viewType');
            $scope.viewType = viewType ? viewType : 1;
        };
        $scope.changeView = function(viewType) {
            $scope.viewType = viewType;
            localStorage.setItem('viewType', viewType);
        };
        $scope.openPropertyDetail = function(property) {
            PropertiesModel.resetSelected();
            property.setSelected(true);
            $state.go("base.property");
        };
        $scope.editThisProperty = function(property) {
            PropertiesModel.resetSelected();
            property.setSelected(true);
            $state.go("base.propertyEditor");
        };
        $scope.deleteThisProperty = function(property) {
            PropertiesModel.resetSelected();
            property.setSelected(true);
            PropertiesModel.deleteThisProperty();
        };
        console.log(PropertiesModel.getAll().length);
        if (!PropertiesModel.getAll().length) //to be removed as we dont hav service as of now, edited data or new data gets removed as we get new property list
            PropertiesModel.map(PropertyService.getProperties("delhi", "buy", "in"));
        PropertiesModel.resetSelected();
        getBasicPropertyListing();
        getSetViewType();
    });
