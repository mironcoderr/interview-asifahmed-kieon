
// NiceScroll plugin
$(function() {  
    $(".sidebar").niceScroll({cursorcolor:"#c2c2c2"});
});

// sidebar toggle
let sidebar = document.querySelector('.sidebar');
let sidebarOpen = document.querySelector('.header-side');
let sidebarClose = document.querySelector('.sidebar-close');

sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

sidebarOpen.addEventListener('click', () => {
    sidebar.classList.add('active');
});