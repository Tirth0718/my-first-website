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

document.addEventListener('DOMContentLoaded', function() {
    const orderItemsContainer = document.getElementById('order-items');
    const orderTotalDisplay = document.getElementById('order-total') ;

    const cartData = JSON.parse(localStorage.getItem('cartItems')) || [];

    let total = 0;

    cartData.forEach(item => {
        const itemTotal= parseInt(item.price.slice(1)) * item.quantity;
        total += itemTotal;

        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';

        orderItem.innerHTML = `
        <img src="${item.image}" alt="${item.product}" /> 
          <div class="order-item-details">
            <h3>${item.product}</h3>
            <p>${item.size}</p>
            <p>$${item.price.slice(1)}</p>
          </div>
          <div class="qty-box">
            <button disabled>-</button>
            <span>${item.quantity}</span>
            <button disabled>+</button>
          </div>
        `;

        orderItemsContainer.appendChild(orderItem);

    });

    orderTotalDisplay.textContent = `$${total}`;

});