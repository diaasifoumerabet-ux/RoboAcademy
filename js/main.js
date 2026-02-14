document.addEventListener('DOMContentLoaded', function () {
    // قائمة الجوال
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.onclick = function() {
            navMenu.classList.toggle('open');
            navMenu.style.display = navMenu.classList.contains('open') ? 'flex' : '';
        }
    }

    // ميزة جمالية: ظل متحرك للheader عند التمرير
    window.addEventListener('scroll',function(){
        var headerElem = document.querySelector('header');
        if(window.scrollY > 20){
            headerElem.style.boxShadow = "0 4px 26px #23395d65";
        }else{
            headerElem.style.boxShadow = "0 2px 10px #23395d33";
        }
    });

    // تحريك العناصر بحركة خفيفة عندما تظهر على الشاشة
    let animatedEls = document.querySelectorAll('.feature, .service-box');
    animatedEls.forEach(el=>{
        el.addEventListener('mouseenter', function(){
            el.style.transform = "scale(1.05) rotate(-2deg)";
        });
        el.addEventListener('mouseleave', function(){
            el.style.transform = "";
        });
    });
});
