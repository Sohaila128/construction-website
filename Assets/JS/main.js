let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");
let searchForm = document.querySelector(".search-form");
let iconSearch = document.querySelector("#search-btn");
let formLogin = document.querySelector(".form-login");
let loginBtn = document.querySelector("#login-btn");
let contactInfo = document.querySelector(".contact-info")
let infoBtn = document.querySelector("#info-btn")
let exit = document.querySelector("#close-contact")

menuBtn.onclick= () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    formLogin.classList.remove('active');
    contactInfo.classList.remove('active');
}
iconSearch.onclick= () => {
    searchForm.classList.toggle('active');
    formLogin.classList.remove('active');
    contactInfo.classList.remove('active');
}
loginBtn.onclick=()=>{
    formLogin.classList.toggle('active');
    searchForm.classList.remove('active');
    contactInfo.classList.remove('active');
    
}
infoBtn.onclick=()=>{
    contactInfo.classList.toggle('active');
    searchForm.classList.remove('active');
}
exit.onclick=()=>{
    contactInfo.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    formLogin.classList.remove('active');
    contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 });


 
lightGallery(document.querySelector('.projects .box-container'));


 var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
       640: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       991: {
         slidesPerView: 3,
       },
    },
 });
 var swiper = new Swiper(".blog-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
       640: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       991: {
         slidesPerView: 3,
       },
    },
 });
 var swiper = new Swiper(".logo-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
       450: {
         slidesPerView: 2,
       },
       640: {
         slidesPerView: 3,
       },
       768: {
         slidesPerView: 4,
       },
       1000: {
         slidesPerView: 5,
       },
    },
 });






















