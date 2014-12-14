'use strict';
angular.module('mainApp.makesuredeliveryView',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/makesuredelivery/:type',{
        templateUrl:'views/makesuredelivery/view.html',
        controller:'makesuredeliveryCtrl'
    });
}]).controller('makesuredeliveryCtrl',['$scope','$routeParams','$window',function($scope,$routeParams,$window){
    var type = $routeParams.type;
    $scope.sureBtnText = "确认收货";
    $scope.ajaxUrl = "";
    if(type == 1){
        //关联订单
        $scope.sureBtnText = "确认";
        $scope.ajaxUrl = "";
    }
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
        alert('订单号：'+JSON.stringify($scope.selectedOrder));
    }
}])