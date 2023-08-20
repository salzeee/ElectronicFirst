const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const navList = document.querySelector('.nav-list');

let isSearchOpen = false;

searchButton.addEventListener('click', () => {
    if (!isSearchOpen) {
        searchInput.style.width = '320px'; // Adjust the width as needed
        searchInput.style.padding = '5px 10px'; // Adjust padding as needed
        navList.style.display = 'none';
    } else {
        searchInput.style.width = '0';
        searchInput.style.padding = '5px 0';
        navList.style.display = 'flex';
    }

    isSearchOpen = !isSearchOpen;
});
