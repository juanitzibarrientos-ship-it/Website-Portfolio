/* ==========================================
DOCUMENT READY
========================================== */

$(document).ready(function(){

initializeTypingEffect();
initializeScrollProgress();
initializeFadeIn();
initializeSkillBars();
initializeBackToTop();
initializeSmoothScroll();
initializeDarkMode();
initializeTooltips();
initializeGalleryLightbox();
initializeCartSystem();
initializeContactForm();

});


/* ==========================================
TYPING HERO EFFECT
========================================== */

function initializeTypingEffect(){

const words = [
"Juanito",
"Web Developer",
"Frontend Designer",
"E-Commerce Builder"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

currentWord = words[i];

if(isDeleting){
j--;
}else{
j++;
}

$("#typing-text").text(currentWord.substring(0,j));

if(!isDeleting && j === currentWord.length){
isDeleting = true;
setTimeout(type,1200);
return;
}

if(isDeleting && j === 0){
isDeleting = false;
i++;

if(i === words.length){
i = 0;
}
}

setTimeout(type,120);
}

type();

}


/* ==========================================
SCROLL PROGRESS BAR
========================================== */

function initializeScrollProgress(){

$(window).scroll(function(){

let scrollTop = $(window).scrollTop();
let docHeight = $(document).height() - $(window).height();
let scrollPercent = (scrollTop / docHeight) * 100;

$("#scroll-progress").css("width", scrollPercent + "%");

});

}


/* ==========================================
FADE IN ON SCROLL
========================================== */

function initializeFadeIn(){

$(window).scroll(function(){

$(".fade-in").each(function(){

let elementTop = $(this).offset().top;
let windowBottom = $(window).scrollTop() + 600;

if(elementTop < windowBottom){
$(this).addClass("show");
}

});

});

}


/* ==========================================
SKILL BAR ANIMATION
========================================== */

function initializeSkillBars(){

$(window).scroll(function(){

$(".progress-bar").each(function(){

let elementTop = $(this).offset().top;
let windowBottom = $(window).scrollTop() + 600;

if(elementTop < windowBottom){

let width = $(this).data("width");
$(this).css("width", width);

}

});

});

}


/* ==========================================
BACK TO TOP BUTTON
========================================== */

function initializeBackToTop(){

$(window).scroll(function(){

if($(this).scrollTop() > 300){
$("#backToTop").fadeIn();
}else{
$("#backToTop").fadeOut();
}

});

$("#backToTop").click(function(){

$("html, body").animate({
scrollTop:0
},700);

});

}


/* ==========================================
SMOOTH SCROLL NAVIGATION
========================================== */

function initializeSmoothScroll(){

$('a[href^="#"]').on("click",function(e){

let target = $(this.getAttribute('href'));

if(target.length){

e.preventDefault();

$("html,body").stop().animate({
scrollTop: target.offset().top - 70
},700);

}

});

}


/* ==========================================
DARK MODE SYSTEM
========================================== */

function initializeDarkMode(){

let savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
$("body").addClass("dark");
}

$("#modeToggle").click(function(){

$("body").toggleClass("dark");

if($("body").hasClass("dark")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

});

}


/* ==========================================
BOOTSTRAP TOOLTIPS
========================================== */

function initializeTooltips(){

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

}


/* ==========================================
GALLERY LIGHTBOX
========================================== */

function initializeGalleryLightbox(){

$(".gallery-img").click(function(){

let src = $(this).attr("src");

$("#lightbox img").attr("src",src);

$("#lightbox").fadeIn();

});

$("#lightbox").click(function(){

$(this).fadeOut();

});

}


/* ==========================================
CART SYSTEM
========================================== */

let cart = [];

function initializeCartSystem(){

$(".add-to-cart").click(function(){

let productName = $(this).data("name");
let productPrice = parseFloat($(this).data("price"));

addItemToCart(productName,productPrice);

renderCart();

});

}


function addItemToCart(name,price){

cart.push({
name:name,
price:price
});

}


function renderCart(){

let cartList = $("#cart-items");
cartList.empty();

let total = 0;

cart.forEach(function(item,index){

total += item.price;

cartList.append(`
<li>
${item.name} - $${item.price.toFixed(2)}
<button class="remove-item btn btn-sm btn-danger ms-2" data-index="${index}">
x
</button>
</li>
`);

});

$("#cart-total").text(total.toFixed(2));

$(".remove-item").click(function(){

let index = $(this).data("index");

cart.splice(index,1);

renderCart();

});

}


/* ==========================================
CONTACT FORM VALIDATION
========================================== */

function initializeContactForm(){

$("#contactForm").submit(function(e){

e.preventDefault();

let name = $("#name").val().trim();
let email = $("#email").val().trim();
let message = $("#message").val().trim();

if(name === "" || email === "" || message === ""){

alert("Please fill in all fields.");

return;

}

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Please enter a valid email.");

return;

}

$("#successMessage").fadeIn();

this.reset();

});

}
faders.forEach(fader => appearOnScroll.observe(fader));
