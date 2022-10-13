(() => {
    document.addEventListener('click', e => {
        let currentModal = null;
        const clickOn = e.target.dataset.btn;

        if (clickOn === 'close') {
            currentModal = document.getElementsByClassName('opened')[0];
            toggleModalAllWindows(currentModal);
        } else if (clickOn) {
            currentModal = document.getElementById(clickOn);
            toggleModalAllWindows(currentModal);
        }
    });

    function toggleModalAllWindows(currentModal) {
        currentModal.classList.toggle('is-hidden');
        currentModal.classList.toggle('opened');
    }
})();
