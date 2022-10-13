import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);


const swiper = new Swiper('.swiper', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    spaceBetween: 30
});