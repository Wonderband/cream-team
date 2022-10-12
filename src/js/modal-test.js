// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-modal-test]"),
//       closeModalBtn: document.querySelector("[data-modal-best]"),
//       modal: document.querySelector("[data-modal-window]"),
//     };
  
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
  
//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//     }
//   })();

  (() => { 
    document.addEventListener("click", (e)=> {      
      let currentModal = null;
      const clickOn = e.target.dataset.btn;
      
      if (clickOn === "close") {        
        currentModal = document.getElementsByClassName("opened")[0];        
        toggleModal(currentModal);
      }
      else if (clickOn) {
          currentModal = document.getElementById(clickOn);
          toggleModal(currentModal);            
      }    
    });    
  
    function toggleModal(currentModal) {
      currentModal.classList.toggle("is-hidden");
      currentModal.classList.toggle("opened");
    }
  })();