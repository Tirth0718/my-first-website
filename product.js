// Handle carousel,collapsible, and cart logic

let selectedSize = '';

// Highlight selected size 
function selectSize(button, size) {
    document.querySelectorAll('.size-btn').forEach(btn => { 
        button.classList.remove('selected');   
    });
    button.classList.add('selected');
    selectedSize = size;
}

// Add to Cart Function

function addToCart(productName) {
    if(!selectedSize) {
        alert('Please select a size before adding to cart');
        return;
    }
    const cartItem ={
        product: productName,
        size: selectedSize
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
    'assets/image2.png.webp', 
    'assets/image3.jpg.webp',
    'assets/image4.png.webp',
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