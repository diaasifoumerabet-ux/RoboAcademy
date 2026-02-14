// تفعيل زر القائمة للهواتف
document.addEventListener('DOMContentLoaded', function () {
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.onclick = function() {
            navMenu.classList.toggle('open');
        }
    }
});
