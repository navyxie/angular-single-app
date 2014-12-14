'use strict';
angular.module('mainApp.registrationInfomationView',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/registration_infomation',{
        templateUrl:'views/registration_infomation/view.html',
        controller:'registrationInfomationCtrl'
    });
}]).controller('registrationInfomationCtrl',function($scope){
    $scope.submit = function(){
        alert('姓名:'+$scope.infoName + '电话:'+$scope.infoPhone + '公司:' +$scope.infoCompany)
    };
})