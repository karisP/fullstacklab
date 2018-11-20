"use strict";
const shoppingCart = {
    template: `
    <h1> Shopping List Helper</h1>
    <ul>
        <li ng-repeat="item in $ctrl.listOfItems">{{item.product}} {{item.price}} {{item.quantity}}</li>
    </ul>
    `,
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
