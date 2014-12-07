'use strict';
angular.module('mainApp.customerView',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/customer',{
        templateUrl:'views/customer/view.html',
        controller:'customerCtrl'
    });
}]).controller('customerCtrl',function($scope){
    $scope.name = "customer";
})