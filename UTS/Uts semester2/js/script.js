
// Tambahkan fungsi untuk menandai halaman yang sedang aktif di navigasi
document.addEventListener("DOMContentLoaded", function() {
    var currentLocation = window.location.href;
    var navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function(navLink) {
        if (navLink.href === currentLocation) {
            navLink.classList.add("active");
        }
    });
});
