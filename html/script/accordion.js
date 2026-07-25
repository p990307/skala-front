document.addEventListener('DOMContentLoaded', function () {
    var toggles = document.querySelectorAll('.accordion-toggle');
    toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            var accordion = toggle.closest('.accordion');
            var isOpen = accordion.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    });
});
