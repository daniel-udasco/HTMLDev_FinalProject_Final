// Cookie Consent Modal
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