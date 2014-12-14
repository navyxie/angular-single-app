'use strict';
angular.module('mainApp',[
    'ngRoute',
    'mainApp.AddressListView',
    'mainApp.registrationInfomationView',
    'mainApp.salemanView',
    'mainApp.orderqueryView',
    'mainApp.orderdetailView',
    'mainApp.makesuredeliveryView'
])
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:"views/index/view.html"
    });
    $routeProvider.when('/receiver_man_entrance',{
        templateUrl:"views/index/receiver_man_entrance.html"
    });
    $routeProvider.when('/delivery_man_entrance',{
        templateUrl:"views/index/delivery_man_entrance.html"
    });
    $routeProvider.when('/sales_man_entrance',{
        templateUrl:"views/index/sales_man_entrance.html"
    });
    $routeProvider.otherwise({redirectTo: '/'});
}]);