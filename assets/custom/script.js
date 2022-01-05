// JAVASCRIPT DOM FUNCTION
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

// CALLING DOM FUNCTION IF YOU DON'T NEED ALPINE JS, JUST WRITE NATIVE JS CODE HERE TO GET FULLY DOM LOADED
ready(function () {


    const carouselServices = new Siema({
        selector: '.carousel-services',
        duration: 200,
        easing: 'ease-out',
        perPage: {
            640: 1,
            768: 2,
            1024: 3,
        },
        startIndex: 0,
        draggable: true,
        //   multipleDrag: true,
        //   threshold: 20,
        //   loop: false,
        //   rtl: false,
        //   onInit: () => {},
        //   onChange: () => {},
    });

    const prevServices = document.querySelector('.prev-services');
    const nextServices = document.querySelector('.next-services');
    prevServices.addEventListener('click', () => carouselServices.prev());
    nextServices.addEventListener('click', () => carouselServices.next());

  //////////////

    const carouselTestimonials = new Siema({
        selector: '.carousel-testimonials',
        duration: 200,
        easing: 'ease-out',
        perPage: {
            640: 1,
            768: 1,
            1024: 2,
        },
        startIndex: 0,
        draggable: true,
        //   multipleDrag: true,
        //   threshold: 20,
        //   loop: false,
        //   rtl: false,
        //   onInit: () => {},
        //   onChange: () => {},
    });
    const prevTestimonials = document.querySelector('.prev-testimonials');
    const nextTestimonials = document.querySelector('.next-testimonials');
    prevTestimonials.addEventListener('click', () => carouselTestimonials.prev());
    nextTestimonials.addEventListener('click', () => carouselTestimonials.next());




});