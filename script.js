const typingElement = document.getElementById('typing');
const phrases = ["Welcome to My Portfolio", "Interactive Web Projects", "Capstone-Ready Designs"];
let i = 0, j = 0;
let currentPhrase = '';
let isDeleting = false;

function type() {
  if (!typingElement) return;
  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase = phrases[i].substring(0, j);
    typingElement.textContent = currentPhrase;
    j++;
    setTimeout(type, 120);
  } else if (isDeleting && j >= 0) {
    currentPhrase = phrases[i].substring(0, j);
    typingElement.textContent = currentPhrase;
    j--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}
type();

// -----------------------------
// Dark/Light Theme Toggle
// -----------------------------
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// -----------------------------
// Add to Cart (store.html)
// -----------------------------
let cart = [];
function addCart(itemName) {
  cart.push(itemName);
  const cartCount = document.getElementById('cart-count');
  if(cartCount) cartCount.textContent = cart.length;

  // Sticky Cart Preview
  const cartPreview = document.getElementById('cart-preview');
  const cartItems = document.getElementById('cart-items');
  if(cartPreview && cartItems) {
    cartItems.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      cartItems.appendChild(li);
    });
    cartPreview.style.display = 'block';
    setTimeout(() => { cartPreview.style.display = 'none'; }, 3000);
  }

  alert(`${itemName} added to cart!`);
}

// -----------------------------
// Gallery Lightbox (gallery.html)
// -----------------------------
function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if(lightbox && lightboxImg) {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  }
}
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if(lightbox) lightbox.style.display = 'none';
}

// -----------------------------
// Contact Form Validation
// -----------------------------
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if(contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.classList.add('was-validated');
      return;
    }
    if(successMessage) successMessage.style.display = 'block';
    contactForm.reset();
    contactForm.classList.remove('was-validated');
  });
}

// -----------------------------
// Smooth Scroll for internal links
// -----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// -----------------------------
// Bootstrap Tooltips
// -----------------------------
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(el => new bootstrap.Tooltip(el));

// -----------------------------
// Back-to-Top Button
// -----------------------------
const backToTop = document.getElementById('backToTop');
window.onscroll = () => {
  if(window.scrollY > 300) backToTop?.style.display = 'block';
  else backToTop?.style.display = 'none';
};
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// -----------------------------
// Fade-in Animations
// -----------------------------
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
