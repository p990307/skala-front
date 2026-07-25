// 메인 페이지 다이나믹 인터랙션 모음
document.addEventListener('DOMContentLoaded', function () {

    // 1. 스크롤 리빌: .reveal 요소가 화면에 들어오면 서서히 나타남
    var revealTargets = document.querySelectorAll('.reveal');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    revealTargets.forEach(function (el) {
        observer.observe(el);
    });

    // 2. 히어로 장식 요소 마우스 패럴랙스
    var hero = document.querySelector('.hero');
    var decorItems = document.querySelectorAll('.hero-decor span');
    if (hero && decorItems.length) {
        hero.addEventListener('mousemove', function (e) {
            var rect = hero.getBoundingClientRect();
            var x = (e.clientX - rect.left) / rect.width - 0.5;
            var y = (e.clientY - rect.top) / rect.height - 0.5;
            decorItems.forEach(function (item, i) {
                var strength = (i + 1) * 12;
                item.style.transform = 'translate(' + (x * strength) + 'px, ' + (y * strength) + 'px)';
            });
        });
        hero.addEventListener('mouseleave', function () {
            decorItems.forEach(function (item) {
                item.style.transform = 'translate(0, 0)';
            });
        });
    }

    // 3. 버튼 클릭 리플 효과
    var rippleButtons = document.querySelectorAll('.btn-submit, .btn-reset');
    rippleButtons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            var rect = btn.getBoundingClientRect();
            var ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            btn.appendChild(ripple);
            ripple.addEventListener('animationend', function () {
                ripple.remove();
            });
        });
    });
});
