/**
 * Created by Administrator on 2017/1/29.
 */
angular.module("mapp")
    .config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state("home",{
                url: "/home",
                templateUrl: "views/home.html",
                controller: "home"
            })
            .state("SignIn",{
                url: "/SignIn",
                templateUrl: "views/Signin.html"
            })
            .state("register",{
                url: "/register",
                templateUrl: "views/register.html"
            })
        $urlRouterProvider
            .otherwise("home")
    }])
