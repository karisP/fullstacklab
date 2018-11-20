"use strict";
function CartService($http){
    const self = this;
    self.getItems = () => {
        return $http({
            method: "GET",
            url: "/cart-items"
        });
    };
    self.postItems = (newItem) => {
        return $http({
            url: "/cart-items",
            method: "POST",
            data: newItem
        });
    };
    self.deleteItems = (id) => {
        return $http({
            url:`/cart-items/${id}`,
            method: "DELETE"
        });
    };
    self.updateItems = (editedItem) => {
        return $http({
            url:`/cart-items/${editItem.id}`,
            method: "PUT",
            data: editedItem
        });
    };
}

angular
    .module("App")
    .service("CartService", CartService);