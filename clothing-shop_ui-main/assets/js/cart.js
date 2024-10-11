// Get cart from local storage (if available)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display cart items
function displayCartItems() {
    const cartList = document.querySelector('.cart__list');
    cartList.innerHTML = ''; // Clear the cart list before updating it
    cart.forEach((product, index) => {
      const cartItem = document.createElement('li');
      cartItem.innerHTML = `
        <img src="${product.image}" alt="product image">
        <h2>${product.title}</h2>
        <span>${product.price}</span>
        <button class="remove-from-cart">Remove from Cart</button>
      `;
      cartItem.dataset.productIndex = index; // Add a data attribute to store the product index
      cartList.appendChild(cartItem);
    });
  
    // Add event listener to remove from cart buttons
    const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
    removeFromCartButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const index = parseInt(e.target.parentNode.dataset.productIndex);
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
      });
    });
  }

  displayCartItems();
