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

// Handle carousel,collapsible, and cart logic

let selectedSize = '';

// Highlight selected size 
function selectSize(button, size) {
    document.querySelectorAll('.size-btn').forEach(btn => { 
        button.classList.remove('selected');   
    });
    button.classList.add('selected');
    selectedSize = size;

    //Update price display based on size 
    const priceDisplay = document.querySelector('.price');
    if (size === '250ml') {
        priceDisplay.textContent = '$49';
        } else if (size === '500ml') {
            priceDisplay.textContent = '$99';
    }
}


// Add to Cart Function

function addToCart(productName) {
    if(!selectedSize) {
        alert('Please select a size before adding to cart');
        return;
    }

    const productPrice = selectSize === '500ml' ? '$99' : '$49' ;
    const cartItem ={
        product: productName,
        size: selectedSize,
        price: productPrice
    };
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
    window.location.href = 'cart.html';
}

// Collapsible Boxes
const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach(btn => {
    btn.addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block' ;
    });
});

// Image Carousel 
const image = [
    'assets/assets/image1.png.webp',
    'assets/image6.png.webp', 
    'assets/image7.jpg.webp',
    'assets/image8.png.webp',
    'assets/image9.png.webp',
    'assets/image5.png.webp'
];
let currentImageIndex = 0;

function changeImage(src) {
    document.getElementById('mainImage').src = src;
    currentImageIndex = image.indexOf(src);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + ImageTrackList.length) % ImageTrackList.length;
    document.getElementById('mainImage').src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('mainImage').src = images[currentImageIndex];
}