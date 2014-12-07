'use strict';
angular.module('mainApp.orderdetailView',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/orderdetail/:ordernum',{
        templateUrl:'views/orderdetail/view.html',
        controller:'orderdetailCtrl'
    });
}]).controller('orderdetailCtrl',function($scope,$routeParams,$window){
    $scope.orderdetail = {
        orderMark:"请用圆通快递，谢谢",
        orderGoods:[
            {
                productionName:"production1",
                orderNum:100
            },
            {
                productionName:"production2",
                orderNum:50
            }
        ],
        deliveryAddress:'广州市天河区',
        customer:'Navy'
    };
    $scope.historyBack = function(){
        $window.history.back();
    }
    // alert($routeParams.ordernum);
})