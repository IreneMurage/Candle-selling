let cart = [];

function addToCart(event) {
    const productElement = event.target.closest('.scented');
    const productName = productElement.querySelector('img').alt;
    const price = parseFloat(productElement.querySelector('label').textContent.replace('$', ''));
    const quantity = parseInt(productElement.querySelector('input[type="number"]').value);


    let productInCart = cart.find(item => item.name === productName);

    if (productInCart) {
        productInCart.quantity += quantity;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: quantity
        });
    }

    updateCart();
}

function updateCart() {
    console.log("Cart contents:", cart)
    alert("Product added to cart!");
}


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("click", addToCart);
    });
});


