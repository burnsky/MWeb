/**
 * Created by Jack on 6/7/2016.aaa
 */
define(['angular','angular-route','controllers'],function(angular){
    'use strict';
    var app=angular.module('myApp',['ngRoute','myApp.controller']);

    app.config(function ($controllerProvider, $provide, $compileProvider,$routeProvider) {
        //路由初始化
        $routeProvider
            .when('/',{
                templateUrl:'app/views/index.html',
                controller:'MyHomeController'
            })
            .when('/login',{
                templateUrl:'app/views/login.html',
                controller:'loginController'
            });
    });

    app.run(function(){
        console.log("app running...");
    });

    return angular.bootstrap(document,['myApp']);
});