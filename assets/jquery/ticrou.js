$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    arrows: true,
    nav: true,
    items: 4,
    autoplay: true,
    loop: true,
    autoplayHoverPause: true,
    navigation: true,
    responsive : {
   
        0 : {
            items: 1,
        },
        
        475 : {
            items: 1,
        },
        575 : {
            items: 2,
        },
        
        767 : {
            items: 3,
        },
        991 : {
            items: 4,
        }
    }
})

$('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop: true,
    // margin: 10,
    nav: false,
    items: 1,
    lazyLoad: true,
    autoplay: true,
    dots:false,
    nav: true,
    responsive: {
        0: {
            items: 1,
            stagePadding: 60
        },
        600: {
            items: 1,
            stagePadding: 100
        },
        1000: {
            items: 1,
            stagePadding: 200
        },
        1200: {
            items: 1,
            stagePadding: 250
        },
        1400: {
            items: 1,
            stagePadding: 300
        },
        1600: {
            items: 1,
            stagePadding: 350
        },
        1800: {
            items: 1,
            stagePadding: 400
        }
    }
})
$('#testimonialC').owlCarousel({
    loop: true,
    arrows: true,
    nav: true,
    items: 1,
    autoplay: true,
    loop: true,
})
document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("main-heading");
    const text = element.innerHTML;
    element.innerHTML = "";
    let index = text.length - 1;
    let removing = true;
    function animateText() {
        if (removing) {
            if (index > 0) {
                element.innerHTML = text.substring(0, index);
                index--;
            } else {
                removing = false;
                index = 0;
            }
        } else {
            if (index < text.length) {
                element.innerHTML = text.substring(0, index + 1);
                index++;
            } else {
                removing = true;
                index = text.length - 1;
            }
        }

        setTimeout(animateText, 200); 
    }

    animateText();
});
const slides = document.querySelectorAll('.slide');
let activeSlide = 0;
let prevActive = 0;
changeSlides();
let int = setInterval(changeSlides, 5000);
function changeSlides() {
slides[prevActive].classList.remove('active');	slides[activeSlide].classList.add('active');
	
	
	prevActive = activeSlide++;
	
	if(activeSlide >= slides.length) {
		activeSlide = 0;
	}
	
	console.log(prevActive, activeSlide);
}
