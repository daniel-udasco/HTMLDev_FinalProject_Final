// Cookie Modal
const cookieModal = document.getElementById('cookie-modal');
const acceptBtn = document.getElementById('accept-cookie');
const rejectBtn = document.getElementById('reject-cookie');

  acceptBtn.addEventListener('click', () => {
  cookieModal.classList.add('hide');
  });

  rejectBtn.addEventListener('click', () => {
  cookieModal.classList.add('hide');
  });


// Newsletter Subscription Modal
document.addEventListener("DOMContentLoaded", () => {
const subscribeBtn = document.querySelector(".subscribe-btn");
const closeBtn = document.getElementById("close-newsletter");
const modal = document.getElementById("newsletter-modal");
const thankYouMsg = document.querySelector(".thank-you-msg");
const emailInput = document.querySelector(".newsletter-input");

  // Subscribe button
  subscribeBtn.addEventListener("click", () => {
  subscribeBtn.style.display = "none";
  emailInput.style.display = "none";
  thankYouMsg.style.display = "block";
  });

  // Close button
  closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  });

  // Show the modal after 7 seconds
  setTimeout(() => {
  modal.style.display = "block";
  }, 7000);
});

// Side nav-bar
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
  
//Slider Functionality
class FadeSlider {
  constructor() {
    this.slides = document.querySelectorAll('.slide');
    this.dots = document.querySelectorAll('.nav-dot');
    this.prevArrow = document.querySelector('.prev-arrow');
    this.nextArrow = document.querySelector('.next-arrow');
    this.currentIndex = 0;
    this.interval = null;
    this.delay = 4000;
    
    this.init();
  }
  
  init() {
    this.showSlide(0);
    this.startAutoSlide();
    
    // Dot navigation
    this.dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const target = parseInt(e.target.dataset.target) - 1;
        this.showSlide(target);
        this.resetInterval();
      });
    });
    
    // Arrow navigation
    this.prevArrow.addEventListener('click', () => {
      this.showSlide((this.currentIndex - 1 + this.slides.length) % this.slides.length);
      this.resetInterval();
    });
    
    this.nextArrow.addEventListener('click', () => {
      this.showSlide((this.currentIndex + 1) % this.slides.length);
      this.resetInterval();
    });
    
    // Pause on hover
    const container = document.querySelector('.slider-container');
    container.addEventListener('mouseenter', () => this.pause());
    container.addEventListener('mouseleave', () => this.startAutoSlide());
  }
  
  showSlide(index) {
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.slides[index].classList.add('active');
    
    this.dots.forEach(dot => dot.classList.remove('active'));
    this.dots[index].classList.add('active');
    
    this.currentIndex = index;
  }
  
  startAutoSlide() {
    this.interval = setInterval(() => {
      this.showSlide((this.currentIndex + 1) % this.slides.length);
    }, this.delay);
  }
  
  pause() {
    clearInterval(this.interval);
  }
  
  resetInterval() {
    this.pause();
    this.startAutoSlide();
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new FadeSlider();
});