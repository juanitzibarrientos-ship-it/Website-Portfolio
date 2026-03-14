let cart = 0

function addCart(){

cart++

document.getElementById("cart-count").innerText = cart

}



// Dark Mode Toggle

function toggleTheme(){

document.body.classList.toggle("dark-mode")

}



// Simple JavaScript Message

function showMessage(){

alert("Welcome! This demonstrates JavaScript interaction.")

}



// jQuery Toggle Animation

$(document).ready(function(){

$("#toggle").click(function(){

$("#secret").slideToggle()

})

})



// Lightbox Gallery

function openLightbox(img){

let lightbox = document.getElementById("lightbox")

let lightboxImg = document.getElementById("lightbox-img")

lightbox.style.display = "flex"

lightboxImg.src = img.src

}



function closeLightbox(){

document.getElementById("lightbox").style.display = "none"

}



// Typing Animation

let text = "Welcome to My Web Development Portfolio"

let i = 0



function typeEffect(){

let element = document.getElementById("typing")

if(element && i < text.length){

element.innerHTML += text.charAt(i)

i++

setTimeout(typeEffect, 60)

}

}



window.onload = typeEffect



// Scroll Reveal Animation

function reveal(){

let reveals = document.querySelectorAll(".reveal")



for(let j=0; j<reveals.length; j++){

let windowHeight = window.innerHeight

let elementTop = reveals[j].getBoundingClientRect().top

let elementVisible = 100



if(elementTop < windowHeight - elementVisible){

reveals[j].classList.add("active")

}

}

}



window.addEventListener("scroll", reveal)



// Navbar Scroll Effect

window.addEventListener("scroll", function(){

let nav = document.getElementById("navbar")



if(nav){

if(window.scrollY > 50){

nav.classList.add("nav-scrolled")

}

else{

nav.classList.remove("nav-scrolled")

}

}

})



// Contact Form Validation

function validateForm(){

let name = document.getElementById("name").value

let email = document.getElementById("email").value

let message = document.getElementById("message").value



if(name === "" || email === "" || message === ""){

alert("Please complete all fields.")

return false

}



document.getElementById("form-msg").innerText = "Message sent successfully!"

return false

}