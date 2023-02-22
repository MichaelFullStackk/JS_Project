let menu = document.getElementById('burger-menu')

function changeBurgerMenu(){
    menu.classList.toggle('open-menu')
}


const contactIcon = document.querySelector(".contact-icon a");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

contactIcon.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display = "block";
});

close.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    event.preventDefault();
    modal.style.display = "none";
  }
});