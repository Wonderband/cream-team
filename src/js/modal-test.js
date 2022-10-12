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

  (() => {
    const refs = {
      body: document.querySelector('.page'),
      locationsModalBtn: document.querySelector("[data-modal-locations]"),
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtns: document.querySelectorAll("[data-modal-close]"),
      modal: document.querySelectorAll("[data-modal]"),
    };
  
    refs.body.addEventListener("click", (e)=> {
      const currentBtn = e.target;
      let closeBtn;
      const elID = currentBtn.dataset.btn;
      const currentModal =  document.getElementById(elID);
  
      toggleModal(currentModal)
  
      if(e.currentTarget.dataset.action === "close") {
         closeBtn = e.currentTarget
      }
    })
  
  
    // refs.openModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal(currentModal) {
      currentModal.classList.toggle("is-hidden");
    }
  })();