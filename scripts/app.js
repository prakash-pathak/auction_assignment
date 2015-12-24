'use strict';

/**
 * @ngdoc overview
 * @name auctionApp
 * @description
 * # auctionApp
 *
 * Main module of the application.
 */
var auctionApp = angular
    .module('auctionApp', ['ui.router', 'jkuri.gallery']);

auctionApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('base', {
            url: '',
            views: {
                'header': {
                    controller: 'HeaderCtrl',
                    templateUrl: 'modules/common/header.view.html'
                },
                'main': {
                    template: '<ui-view/>'
                },
                'footer': {
                    templateUrl: 'modules/common/footer.view.html'
                }
            }
        })
        // HOME STATES AND NESTED VIEWS ========================================
        .state('base.home', {
            url: '/',
            controller: 'MainCtrl',
            templateUrl: 'modules/homepage/home.view.html'
        })
        // Property View ========================================
        .state('base.property', {
            url: '/property-view',
            controller: 'PropertyCtrl',
            templateUrl: 'modules/property/property.view.html'
        })
        // Property Search ========================================
        .state('base.propertySearch', {
            url: '/property-search',
            controller: 'PropertyCtrl',
            templateUrl: 'modules/property/property.list.view.html'
        })
        // Create Property View ========================================
        .state('base.propertyEditor', {
            url: '/property-editor',
            controller: 'PropertyEditorCtrl',
            templateUrl: 'modules/property/property.editor.view.html'
        })
        // Create Property View ========================================
        .state('base.propertyAdd', {
            url: '/property-add',
            controller: 'PropertyEditorCtrl',
            templateUrl: 'modules/property/property.editor.view.html'
        })
        // HOME STATES AND NESTED VIEWS ========================================
        .state('base.login', {
            url: '/login',
            controller: 'AuthCtrl',
            templateUrl: 'modules/customer/auth.view.html'
        })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
        // we'll get to this in a bit       
    });

});
