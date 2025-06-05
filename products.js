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
