'use strict';
angular.module('mainApp.AddressListView',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/address_list',{
        templateUrl:'views/address_list/view.html',
        controller:'listCtrl'
    });
}]).controller('listCtrl',function($scope){
    $scope.listData = [
        {
            name:'navy',
            phone:'18909091821',
            address:'广州市天河区体育中心',
            url:'javascript:;'
        },
        {
            name:'navy',
            phone:'18909091821',
            address:'广州市天河区体育中心',
            url:'javascript:;'
        },
        {
            name:'navy',
            phone:'18909091821',
            address:'广州市天河区体育中心',
            url:'javascript:;'
        },
        {
            name:'navy',
            phone:'18909091821',
            address:'广州市天河区体育中心',
            url:'javascript:;'
        }
    ];
});