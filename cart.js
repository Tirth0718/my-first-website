let cartData = JSON.parse(localStorage.getItem('cartItems')) || [];

const cartContainer = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total-price');

function renderCart() {
    cartContainer.innerHTML = '';
    let total = 0;

    cartData.forEach((item, index) => {
        const itemTotal = parseInt(item.price.slice(1)) * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.product}" /> 
          <div class="item-details">
            <h2>${item.product}</h2>
            <p>${item.size}</p>
            <p>${item.price}</p>
          </div>
          <div class="item-controls">
            <button class="wishlist-btn" onclick="moveToWishlist(${index})">
                <img src="assets/wishlist.svg" alt="wishlist" />
            </button>
            <button class="remove-btn" onclick="removeItem(${index})">
                <img src="assets/cancel.svg" alt="cancel" />
            </button>
            <div class="qty-box">
                <button onclick="changeQty(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQty(${index}, 1)">+</button>
            </div>
          </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    totalDisplay. textContent = `$${total}`;
    localStorage.setItem('cartItems', JSON.stringify(cartData));
}

function removeItem(index) {
    cartData.splice(index, 1);
    renderCart();
}

function changeQty(index, delta) {
    cartData[index].quantity += delta;
    if (cartData[index].quantity < 1) cartData[index].quantity = 1;
    renderCart();
}

function moveToWishlist(index) {
    const wishlistItem = cartData[index];
    alert(`${wishlistItem.product} moved to wishlist. `); //Placeholder implement 
    removeItem(index);
}

renderCart();


function toggleSearch() {
    const bar = document.getElementById('searchBar');
    bar.style.display = bar.style.display === 'block' ? 'none' : 'block' ;
}

function checkSearch(e) {
    if (e.key === 'Enter') {
        const query = document.getElementById('searchInput').value.trim().toLowerCase();
        if (query === 'sea moss' ) {
            window.location.href='products.html' ;
        } else {
            alert('Only \"Sea Moss\" search is allowed.');
        }
    }
}   