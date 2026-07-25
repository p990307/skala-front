document.addEventListener('DOMContentLoaded', function () {
    /*
     * 사진 추가하는 법:
     * 1. 새 사진을 media 폴더에 jpg로 넣는다 (HEIC라면 먼저 jpg로 변환).
     * 2. 아래 albums 안에서 해당 나라의 photos 배열에 'media/파일명.jpg'를 추가한다.
     * 3. 새 나라를 추가하려면 albums에 항목을 추가하고,
     *    myTrip.html의 .country-grid 안에 버튼(data-album="키")을 하나 더 넣는다.
     */
    var albums = {
        jeju: {
            label: '제주도',
            photos: ['media/제주도.jpg', 'media/제주1.jpeg.jpeg', 'media/제주2.jpeg.jpeg']
        },
        mongolia: {
            label: '몽골',
            photos: ['media/몽골.jpg', 'media/석양.jpg', 'media/몽골1.jpeg.jpeg', 'media/몽골2.jpeg.jpeg']
        },
        europe: {
            label: '유럽',
            photos: [
                'media/에펠탑.JPG', 'media/영국.jpg', 'media/스위스.jpg',
                'media/유럽1.jpeg.jpeg', 'media/유럽2.jpeg.jpeg', 'media/유럽3.jpeg.jpeg', 'media/유럽4.jpeg.jpeg'
            ]
        },
        japan: {
            label: '일본',
            photos: [
                'media/후쿠오카.jpg',
                'media/일본1.jpeg.jpeg', 'media/일본2.jpeg.jpeg', 'media/일본3.jpeg.jpeg', 'media/일본4.jpeg.jpeg', 'media/일본5.jpeg.jpeg'
            ]
        }
    };

    var lightbox = document.querySelector('#lightbox');
    var track = document.querySelector('#lightbox-track');
    var caption = document.querySelector('#lightbox-caption');
    var closeBtn = document.querySelector('#lightbox-close');
    var prevBtn = document.querySelector('#lightbox-prev');
    var nextBtn = document.querySelector('#lightbox-next');
    var backdrop = document.querySelector('#lightbox-backdrop');
    if (!lightbox) return;

    var currentAlbum = null;
    var currentIndex = 0;

    function updatePosition() {
        track.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
        caption.textContent = currentAlbum.label + ' (' + (currentIndex + 1) + ' / ' + currentAlbum.photos.length + ')';
        var multi = currentAlbum.photos.length > 1;
        prevBtn.style.visibility = multi ? 'visible' : 'hidden';
        nextBtn.style.visibility = multi ? 'visible' : 'hidden';
    }

    function openAlbum(key) {
        currentAlbum = albums[key];
        if (!currentAlbum) return;
        currentIndex = 0;

        track.innerHTML = '';
        currentAlbum.photos.forEach(function (src) {
            var img = document.createElement('img');
            img.src = src;
            img.alt = currentAlbum.label;
            track.appendChild(img);
        });

        updatePosition();
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.hidden = true;
        document.body.style.overflow = '';
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + currentAlbum.photos.length) % currentAlbum.photos.length;
        updatePosition();
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % currentAlbum.photos.length;
        updatePosition();
    }

    document.querySelectorAll('.country-circle').forEach(function (btn) {
        btn.addEventListener('click', function () {
            openAlbum(btn.dataset.album);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    backdrop.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    document.addEventListener('keydown', function (e) {
        if (lightbox.hidden) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });
});
