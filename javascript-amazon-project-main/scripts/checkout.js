import { renderOrderSummary } from "./checkout/orderSummary.js"; 
import { renderPaymentSummary } from "./checkout/paymentSummary.js"; 
//import '../data/cart-class.js';  
//import '../data/backend-practice.js'   
import { loadProducts } from "../data/products.js"; 
import {loadCart} from '../data/cart.js'; 
 
Promise.all([ 
    new Promise((resolve) => 
    { 
        loadProducts(() => 
        { 
            resolve(); 
        })
    }), // comma was missing here

    new Promise((resolve) => 
    { 
        loadCart(() => 
        { 
            resolve(); 
        }); 
    }) 
 
]).then((values) => {
    console.log(values)
    renderOrderSummary();
    renderPaymentSummary();
}); 


/* 
new Promise((resolve) => 
{ 
    loadProducts(() => 
    { 
        resolve(); 
    }) 
}).then(() => 
{ 
    renderOrderSummary(); 
    renderPaymentSummary(); 
}); 
*/ 
     
 
/* 
loadProducts(() => 
{ 
    loadCart(() => 
    { 
        renderOrderSummary(); 
        renderPaymentSummary(); 
    }) 
     
}); 
*/