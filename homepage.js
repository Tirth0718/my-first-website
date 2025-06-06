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