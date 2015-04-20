/**
 * Created by SUCCESS\phungdinh on 4/20/15.
 */

function placeAnOrder(orderNumber){
    console.log("Customer order: " + orderNumber);
    
    cookAndDeliverFood(function () {
        console.log("Deliverd food order " + orderNumber);
    })
}

// Simulate a 5 second operation
function cookAndDeliverFood(callback){
    setTimeout(callback, 5000);
}

// Simulate multiple request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);