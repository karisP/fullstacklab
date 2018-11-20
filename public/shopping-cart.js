"use strict";
const shoppingCart = {
    templateUrl: "shopping-cart.html",
    controller: ["CartService", function (CartService) {
        const vm = this;
        CartService.getItems().then((response) => {
            console.log(response);
            vm.listOfItems = response.data;
            console.log(vm.listOfItems);
        });


        // vm.addItems = (newItem) => {
        //     CartService.postItems(newItem).then((result) => {
        //         vm.listOfItems = response.data;
        //     });
        // };

        // vm.deleteItem = (id) => {
        //     CartService.deleteItems(id).then((result) => {
        //         vm.listOfItems = response.data;
        //     });
        // };
        
        // vm.updateItems = (editedItem) => {
        //     CartService.updateItems(editedItem).then((result) => {
        //         vm.listOfItems = response.data;
        //     });
        // };

    }]
};



angular
    .module("App")
    .component("shoppingCart", shoppingCart);
