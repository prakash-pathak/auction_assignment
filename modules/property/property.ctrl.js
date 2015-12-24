'use strict';

/**
 * @ngdoc function
 * @name auctionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the auctionApp
 */
auctionApp
    .controller('PropertyCtrl', function($scope, $state, PropertiesModel, $document) {


        if ($state.current.name == "base.propertySearch") {
            $scope.singleView = true;
            $scope.properties = PropertiesModel.getAllSelected();
        } else {
            $scope.p = PropertiesModel.getSelected();
            $scope.images = [{
                thumb: $scope.p.getThumbUrl(),
                img: $scope.p.getImgUrl()
            }, {
                thumb: "http://demo.jankuri.com/ngGallery/images/thumbs/1.jpg",
                img: "http://demo.jankuri.com/ngGallery/images/1.jpg"
            }, {
                thumb: "http://demo.jankuri.com/ngGallery/images/thumbs/2.jpg",
                img: "http://demo.jankuri.com/ngGallery/images/2.jpg"
            }, {
                thumb: "http://demo.jankuri.com/ngGallery/images/thumbs/3.jpg",
                img: "http://demo.jankuri.com/ngGallery/images/3.jpg"
            }];
        }

        //console.log($scope.p);

        //if (!$scope.p)
            //$state.go("base.home");

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
    });
