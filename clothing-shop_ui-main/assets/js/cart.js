// Get cart from local storage (if available)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display cart items
function displayCartItems() {
  const cartList = document.querySelector('.cart__list');
  cart.forEach((product) => {
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <img src="${product.image}" alt="product image">
      <h2>${product.title}</h2>
      <span>${product.price}</span>
      <button class="remove-from-cart">Remove from  Cart</button>

    `;
    cartList.appendChild(cartItem);
  });
 
}

displayCartItems();

