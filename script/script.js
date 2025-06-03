const cookieModal = document.getElementById('cookie-modal');
const acceptBtn = document.getElementById('accept-cookie');
const rejectBtn = document.getElementById('reject-cookie');

acceptBtn.addEventListener('click', () => {
  cookieModal.classList.add('hide');
});

rejectBtn.addEventListener('click', () => {
  cookieModal.classList.add('hide');
});