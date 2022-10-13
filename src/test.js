(() => {
    const refs = {
        openModalBtns: document.querySelectorAll('[data-action]'),
        closeModalBtns: document.querySelectorAll('[data-close-modal]'),
        modals: document.querySelectorAll('[id*="-modal"]'),
    };

    refs.openModalBtns.forEach(openBtn =>
        openBtn.addEventListener('click', event => {
            let $this = event.currentTarget;
            let modalId = $this.getAttribute('data-action');
            let currentModal = document.getElementById(modalId);
            let modalContent = currentModal.querySelector('[data-modal-content]');

            modalContent.addEventListener('click', e => e.stopPropagation());

            toggleModal(currentModal);
        })
    );

    refs.closeModalBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', e => {
            let currentModal = e.currentTarget.closest('.backdrop');

            toggleModal(currentModal);
        });
    });

    refs.modals.forEach(modal => {
        modal.addEventListener('click', e => {
            let currentModal = e.currentTarget;
            toggleModal(currentModal);
        });
    });

    function toggleModal(modal) {
        modal.classList.toggle('is-hidden');
    }
})();