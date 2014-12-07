'use strict';
angular.module('mainApp',[
    'ngRoute',
    'mainApp.AddressListView',
    'mainApp.customerView',
    'mainApp.salemanView',
    'mainApp.orderqueryView',
    'mainApp.orderdetailView',
    'mainApp.makesuredeliveryView'
])
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:"views/index/view.html"
    })
    $routeProvider.otherwise({redirectTo: '/'});
}]);