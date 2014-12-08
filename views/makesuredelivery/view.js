'use strict';
angular.module('mainApp.makesuredeliveryView',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/makesuredelivery',{
        templateUrl:'views/makesuredelivery/view.html',
        controller:'makesuredeliveryCtrl'
    });
}]).controller('makesuredeliveryCtrl',function($scope,$routeParams,$window){
    $scope.orderLists = [
        {
            'deliveryBoy':'送货员A',
            'orderNum':'123456',
        },
        {
            'deliveryBoy':'送货员B',
            'orderNum':'654321'
        }
    ];
    $scope.selectedOrder = [];
    $scope.$watch('orderLists|filter:{checked:true}',function(selectedOrderLists){
        $scope.selectedOrder = selectedOrderLists.map(function(selectedOrder){
            return selectedOrder.orderNum
        })
    },true);
    $scope.sureBtnHandler = function(){
        alert('确认收货的订单号：'+JSON.stringify($scope.selectedOrder));
    }
})