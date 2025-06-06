function toggleSearch() {
    const bar = document.getElementById('searchBar');
    bar.style.display = bar.style.display === 'block' ? 'none' : 'block' ;
}

function checkSearch(e) {
    if (e.key === 'Enter') {
        const keyword = document.getElementById('searchInput').value.trim().toLowerCase();
        if (keyword === 'sea moss' ) {
            window.location.herf='products.html' ;
        } else {
            alert('Only \"Sea Moss\" search is allowed.');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // display total form cartItems
    const totalDisplay = document.getElementById('checkout-total');
    const cartData = JSON.parse(localStorage.getItem('cartItems')) || [];
    let total = 0;

    cartData.forEach(item => {
        total += parseInt(item.price.slice(1)) * item.quantity;
    });
    totalDisplay.textContent = `$${total}`;

    // Handle form submission 
    const paymentForm = document.getElementById('payment-form');

    paymentForm.addEventListener('submit', function(e) {
        const deliveryAddress = document.getElementById('delivery-address').value.trim();

        if (deliveryAddress === '') {
            alert('Please enter your delivery address.');
            return;
        }

        window.location.href='confirmation.html';
    });
});
