window.onload = function () {
    let slides = document.getElementsByClassName("mySlides");
    let slideIndex = 1;
    let getSlide = document.getElementsByClassName('getSlide');
    showSlides(slideIndex);

    for (i = 0; i < getSlide.length; i++) {
        getSlide[i].onclick = function () {
            if (this.classList.contains('prev')) {
                showSlides(slideIndex += -1);
            } else {
                showSlides(slideIndex += 1);
            }
        }
    }

    function showSlides(n) {
        let i;
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "flex";
    }
}