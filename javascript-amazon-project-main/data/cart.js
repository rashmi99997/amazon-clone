export let cart = [
    {
        productID : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity : 2,
    },
    {
        productID: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity:1,
    }
];

export function addToCart(productId)
    {
      let matchingItem;

            cart.forEach((cartItem) =>
            {
                if(productId === cartItem.productID)
                {
                    matchingItem = cartItem;
                }
            })
            if (matchingItem)
            {
                matchingItem.quantity += 1;
            }
            else
            {
                cart.push({
                productID:productId,
                quantity:1
            })
            }

    }

     export function removeFromCart(productId)
    {
        const newCart = [];
        cart.forEach((cardItem) =>
        { 
            if (cardItem.productID!=productId)
            {
                newCart.push(cardItem);
            }

        })
        cart = newCart;
    }