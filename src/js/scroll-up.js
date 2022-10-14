// window.onload = () =>
//     window.onscroll = function (e) {
//         let winY = window.scrollY;
//         if (winY > 300) {
//             progressBar():

//             scrollbarAnimation():

//             winY = null
//         }
//     }

const scrollBtn = document.querySelector('.isShowBtn');

window.onscroll = () => {
    if (window.scrollY > 90) {
        document.querySelector('.isShowBtn').classList.remove('isShowBtn--hide');
    } else if (window.scrollY < 90) {
        scrollBtn.classList.add('isShowBtn--hide');
    }

    scrollBtn.onclick = () => {
        window.scrollTo(0, 0);
    };
};
