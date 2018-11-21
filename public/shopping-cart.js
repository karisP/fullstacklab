"use strict";
const shoppingCart = {
    templateUrl: "shopping-cart.html",
    controller: ["CartService", function (CartService) {
        const vm = this;

        CartService.getItems().then((result) => {
            vm.listOfItems = result.data;
            console.log(vm.listOfItems);
        });


        vm.addItems = (newItem) => {
            CartService.postItems(newItem).then((result) => {
                vm.listOfItems = result.data;
            });
        };

        vm.deleteItem = (id) => {
            CartService.deleteItems(id).then((result) => {
                vm.listOfItems = result.data;
            });
        };
        
        vm.updateItems = (editedItem) => {
            CartService.updateItems(editedItem).then((result) => {
                vm.listOfItems = result.data;
            });
        };

    }]
};



angular
    .module("App")
    .component("shoppingCart", shoppingCart);
