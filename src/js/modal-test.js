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
    const refs = {
      body: document.querySelector('.page'),
      locationsModalBtn: document.querySelector("[data-modal-locations]"),
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtns: document.querySelectorAll("[data-modal-close]"),
      modal: document.querySelectorAll("[data-modal]"),
    };
  
    refs.body.addEventListener("click", (e)=> {
      
      const currentBtn = e.target;
      console.log(currentBtn);
      // let closeBtn;      
      const elID = currentBtn.dataset.btn;
      console.log(elID);
      if (elID === "close") {
        console.log('inside!');
        currentModal = document.getElementsByClassName("opened")[0];
        console.log(currentModal);
        toggleModal(currentModal);
      }
      else if (elID) {
          let currentModal =  document.getElementById(elID);
          toggleModal(currentModal);            
      }    
    });    
  
    function toggleModal(currentModal) {
      currentModal.classList.toggle("is-hidden");
      currentModal.classList.toggle("opened");
    }
  })();