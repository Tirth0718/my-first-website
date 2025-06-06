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

