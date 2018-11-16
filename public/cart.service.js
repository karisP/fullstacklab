"use strict";
function CartService($http){
    const self = this;
    self.getItems = () => {
        return $http({
            method: "GET",
            url: "/routes"
        });
    }
}

angular
    .module("App")
    .service("CartService", CartService);