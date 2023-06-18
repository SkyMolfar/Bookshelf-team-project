// кнопка, откр мод окно
const btn = document.querySelector('.authorisation-btn');

// мод окно
const modal = document.querySelector('.modal-login-form');

// крестик для закр мод окна
const closeBtn = document.querySelector('.modal-login-form-close-btn');

// клик откр мод окно
btn.onclick = function() {
  modal.style.display = "block";
};

// При клике на крестик закр мод окно
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// При клике вне мод окна закр его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
