'use strict';
angular.module('mainApp.orderqueryView',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/orderquery',{
        templateUrl:'views/orderquery/view.html',
        controller:'orderqueryCtrl'
    });
}]).controller('orderqueryCtrl',function($scope){
    $scope.orderLists = [
        {
            orderNum:"123456",
            orderMark:"请用圆通快递，谢谢",
            orderStateText:'未发货',
            orderState:0
        },
        {
            orderNum:"123456",
            orderMark:"请用圆通快递，谢谢",
            orderStateText:'已发货',
            orderState:1
        },
        {
            orderNum:"123456",
            orderMark:"请用圆通快递，谢谢",
            orderStateText:'已收货',
            orderState:2
        }
    ];
    $scope.goodsPostions = [
        {
            msg:'广州市天河区',
            time:'2014/12/08 14:00:40'
        },
        {
            msg:'广州市番禺区',
            time:'2014/12/08 13:00:40'
        },
        {
            msg:'广州市越秀区',
            time:'2014/12/08 12:00:40'
        }
    ]
    $scope.handlerClick = function(orderState){
        if(orderState == 1){
            $scope.showGoodsPosition = true;
        }
    }
})