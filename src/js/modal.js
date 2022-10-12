(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-test]"),
    closeModalBtn: document.querySelector("[data-modal-best]"),
    modal: document.querySelector("[data-modal-window]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();