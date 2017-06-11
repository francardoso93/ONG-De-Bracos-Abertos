angular.module("videoapp").config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        // .when("/home", {
        //     templateUrl: "view/home.html",
        // })
        .when("/", {
            templateUrl: "view/home.html",
        })
        //    .when("/highlights", {
        //        templateUrl: "view/highlightedVideos.html",
        //    })
        .when("/searchResults", {
            templateUrl: "view/searchResultsVideos.html",
        })
        .when("/patientRegister", {
            templateUrl: "view/patientRegister.html",
        })
        .when("/donorRegister", {
            templateUrl: "view/donorRegister.html",
        })
        .when("/thankYou", {
            templateUrl: "view/thankYou.html",
        })
        .otherwise({ redirectTo: '/home' });
});
