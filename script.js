// ========== CART SYSTEM ==========
let cartCount = localStorage.getItem("cart") || 0;
document.addEventListener("DOMContentLoaded", () => {
    const cartDisplay = document.getElementById("cart-count");
    if(cartDisplay) cartDisplay.innerText = cartCount;
});

function addCart(item) {
    cartCount++;
    localStorage.setItem("cart", cartCount);
    const cartDisplay = document.getElementById("cart-count");
    if(cartDisplay) cartDisplay.innerText = cartCount;
    alert(item + " added to cart!");
}

// ========== DARK/LIGHT MODE TOGGLE ==========
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// ========== LIGHTBOX GALLERY ==========
function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    if(lightbox && lightboxImg){
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    }
}
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if(lightbox) lightbox.style.display = "none";
}

// ========== CONTACT FORM VALIDATION ==========
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("form-msg");

    if(name === "" || email === "" || message === "") {
        alert("Please complete all fields!");
        return false;
    }

    if(formMsg) formMsg.innerText = "Message Sent Successfully!";
    return false; // prevent actual submission
}

// ========== HERO TYPING EFFECT ==========
const heroText = "Welcome to My Web Portfolio";
let i = 0;

function typeEffect() {
    const el = document.getElementById("typing");
    if(el && i < heroText.length){
        el.innerHTML += heroText.charAt(i);
        i++;
        setTimeout(typeEffect, 60);
    }
}
window.onload = typeEffect;

// ========== SMOOTH SCROLL (Optional) ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ========== ADDITIONAL FUNCTIONALITY (Optional Enhancements) ==========
// Example: Animated counters for stats
function animateCounter(elId, target) {
    let el = document.getElementById(elId);
    if(!el) return;
    let count = 0;
    let interval = setInterval(()=>{
        count++;
        el.innerText = count;
        if(count >= target) clearInterval(interval);
    }, 50);
}
