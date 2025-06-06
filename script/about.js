document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelector('.gallery-slides');
  const slideItems = document.querySelectorAll('.gallery-slide');
  const prevBtn = document.querySelector('.gallery-prev');
  const nextBtn = document.querySelector('.gallery-next');
  const dots = document.querySelectorAll('.dot');
  
  let currentIndex = 0;
  const totalSlides = slideItems.length;

  // Update slide position
  function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  // Next slide
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  });

  // Previous slide
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
  });

  // Dot navigation
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.getAttribute('data-index'));
      updateSlide();
    });
  });

  // Auto-rotate slides (optional)
  let slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  }, 5000);

  // Pause on hover
  const gallery = document.querySelector('.gallery-container');
  gallery.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });

  gallery.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide();
    }, 5000);
  });
});

