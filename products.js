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

function toggleFilters() {
    const filters = document.querySelector('.filters');
    filters.classList.toggle('open');
}

let selectedSize = '' ;

function selectSize(button, size) {
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
    selectedSize = size;
}

function buyNow(productName, event) {
    if (!selectedSize) {
        alert('Please select a size before going ahead');
    }

    const productPrice = selectedSize === '500ml' ? '$99' : '$49';

    // Get image from the product card
    const productCard = event.target.closest('.product-card');
    const productImage = productCard.querySelector('img').src;

    const newItem = {
        product: productName,
        size: selectedSize,
        price: productPrice,
        quantity: 1,
        image: productImage
    };

    const existing = JSON.parse(localStorage.getItem('cartItems')) || [];
    existing.push(newItem);
    localStorage.setItem('cartItems', JSON.stringify(existing));

    window.location.href='cart.html';
}
