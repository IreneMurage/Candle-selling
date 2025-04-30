let cart = [];

function addToCart(event) {
    // Getting the clicked product details
    const productElement = event.target.closest('.scented');
    const productName = productElement.querySelector('img').alt;
    const price = parseFloat(productElement.querySelector('label').textContent.replace('$', ''));
    const quantity = parseInt(productElement.querySelector('input[type="number"]').value);

    // Checking if product is already in the cart
    let productInCart = cart.find(item => item.name === productName);

    if (productInCart) {
        productInCart.quantity += quantity;
    } else {
        // Add new product to cart
        cart.push({
            name: productName,
            price: price,
            quantity: quantity
        });
    }

    updateCart(); // Show update
}

function updateCart() {
    console.log("Cart contents:", cart); // Show cart in console
    alert("Product added to cart!");    // Show alert
}

// Run after page loads
document.addEventListener("DOMContentLoaded", function () {
    // Adding click event to all buttons
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("click", addToCart);
    });
});
