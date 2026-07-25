document.addEventListener('DOMContentLoaded', function () {
    var track = document.querySelector('.news-carousel-track');
    var prevBtn = document.querySelector('.carousel-prev');
    var nextBtn = document.querySelector('.carousel-next');
    var dots = document.querySelectorAll('.news-carousel-dots .dot');
    if (!track) return;

    var slideCount = track.children.length;
    var current = 0;
    var timer = null;

    function update() {
        track.style.transform = 'translateX(' + (-current * 100) + '%)';
        dots.forEach(function (dot, i) {
            dot.classList.toggle('is-active', i === current);
        });
    }

    function goNext() {
        current = (current + 1) % slideCount;
        update();
    }

    function goPrev() {
        current = (current - 1 + slideCount) % slideCount;
        update();
    }

    function startAutoplay() {
        timer = setInterval(goNext, 3500);
    }

    function resetAutoplay() {
        clearInterval(timer);
        startAutoplay();
    }

    nextBtn.addEventListener('click', function () {
        goNext();
        resetAutoplay();
    });

    prevBtn.addEventListener('click', function () {
        goPrev();
        resetAutoplay();
    });

    dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () {
            current = i;
            update();
            resetAutoplay();
        });
    });

    update();
    startAutoplay();
});
