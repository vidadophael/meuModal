"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
//*all btnsModal
const btnsOpenModal = document.querySelectorAll(".show-modal");

//function open modal's
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//function for close modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  //click in btn showing
  btnsOpenModal[i].addEventListener("click", openModal);

//click in btn closer
btnCloseModal.addEventListener("click", closeModal);
//click outside
overlay.addEventListener("click", closeModal);

//close modal with key 'esc'
document.addEventListener("keydown", function (eventKey) {
  //console.log( eventKey.key, typeof eventKey.key);+
  if (eventKey.key === "Escape" && !modal.classList.contains(".hidden")) {
      //*called function here!
      closeModal();

  }
});
