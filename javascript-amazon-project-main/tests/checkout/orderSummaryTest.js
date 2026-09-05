import { renderOrderSummary } from '../../scripts/checkout/orderSummary.js';
import { loadFromStorage, cart } from "../../data/cart.js";
import { loadProducts } from '../../data/products.js';

const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";

describe('test suite: renderOrderSummary', () => { 
    beforeAll((done) =>
    {
        loadProducts(() =>
        {
            done();
        });
    
    });
    beforeEach(() =>
    {
        document.querySelector('.js-test-container').innerHTML = `
            <div class="js-order-summary"></div>
            <div class="js-payment-summary"></div>
        `;

        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([
                {
                    productID: productId1,
                    quantity: 2,
                    deliveryOptionId: "1"
                },
                {
                    productID: productId2,
                    quantity: 1,
                    deliveryOptionId: "2"
                }
            ]);
        });

        loadFromStorage();
        renderOrderSummary();

    });

    it('displays the cart', () => {
        // test 1
         expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(2);

        document.querySelector('.js-test-container').innerHTML = '';
    });

    it('removes a product', () => {
    
        document.querySelector(`.js-delete-link-${productId1}`).click();

        expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(1);

        expect(
            document.querySelector(`.js-cart-item-container-${productId1}`)
        ).toBeNull();

        expect(
            document.querySelector(`.js-cart-item-container-${productId2}`)
        ).not.toBeNull();

        expect(cart.length).toEqual(1);
        expect(cart[0].productID).toEqual(productId2);

        document.querySelector('.js-test-container').innerHTML = '';
    });
});