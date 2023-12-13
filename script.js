//change navbar color
$(document).ready(function(){
    let navbar = $(".navbar");

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();

        if(scroll > 150){
            navbar.css({
                "background": "#222",
                "box-shadow": "rgba(0,0,0,0.1) 0px 4px 12px",
                "opacity": "1"
            });
        } else {
            navbar.css({
                "background": "rgba(34, 34, 34, 0)",
                "box-shadow": "none",
                "opacity": "0.8"
            });
        }
    });
});
//smoorth scolling
let navbarHeight = $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    let targetHref = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(targetHref).offset().top - navbarHeight
    },1000)
    e.preventDefault();
});

const mobile =document.querySelector(".menu-toggle")
const mobileLink = document.querySelector(".navbar-menu")

mobile.addEventListener("click",function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <= 768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active");
    }
})



// Swiper for coursels
let swiper = new Swiper(".mySwiper", {
    loop: true,

     autoplay: {
        delay: 2500, 
        disableOnInteraction: false, 
    },

    slidesPerView: 1,

    spaceBetween: 10,

    pagination: {
        el: ".swiper-pagination", 
        clickable: true, 
    },

    lazy: {
        loadPrevNext: true, 
        loadPrevNextAmount: 3, 
        loadOnTransitionStart: true, 
    },

    breakpoints: {
         640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

