"use strict";
const shoppingCart = {
    template: `
    <h1>LIST</h1>
    <ul>
        <li ng-repeat="item in $ctrl.items">{{item.product}} {{item.price}} {{item.quantity}}</li>
    </ul>
    `,
    controller: ["CartService", function(CartService){
        const vm = this;
            CartService.getItems().then((response) => {
                console.log(response);
                vm.items = response.data;
                console.log(vm.items);
            });
    }]
};



angular
    .module("App")
    .component("shoppingCart", shoppingCart);
