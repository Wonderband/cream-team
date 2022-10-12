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