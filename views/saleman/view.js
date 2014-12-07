'use strict';
angular.module('mainApp.salemanView',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/saleman',{
        templateUrl:'views/saleman/view.html',
        controller:'salemanCtrl'
    });
}]).controller('salemanCtrl',function($scope){
    $scope.searchHandler = function(){
        alert($scope.searchText);
    };
    $scope.makeOrderBtn = function(){
        alert($scope.orderMark+$scope.orderNum+$scope.productionName+$scope.deliveryAddress+$scope.customer+$scope.deliveryDate);
    }
})