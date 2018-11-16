"use strict";
const shoppingCart = {
    template: `
    <ul>
        <li ng-repeat="item in $ctrl.items">{{item.product}}</li>
    </ul>
    `,
    controller: ["CartService", function(CartService){
        const vm = this;
        vm.getItems = () => {
            CartService.getItems().then((response) => {
                console.log(response);
                vm.items = response.data;
                console.log(items);
            });
        }
    }]
};



angular
    .module("App")
    .component("shoppingCart", shoppingCart);
