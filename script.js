let selectedSize = '';

function selectSize(button, size) {
    // Remove highlight from all buttons
    document.querySelectorAll('.size-btn').forEach(btn => {
      btn.classList.remove('selected');  
    });

    // Highlight selected button
    button.classList.add('selected');

    // Save selected size
    selectedSize = size;

} 

function buyNow(productName) {
    if (!selectedSize) {
        alert('Please select a size before buying');
    }

    // Save product and size to localStorage
    localStorage.setItem('cartItem', JSON.stringify({
        product: productName,
        size: selectedSize
    }));

    //Redirect to cart page 
    window.location.href = 'cart.html';
}
