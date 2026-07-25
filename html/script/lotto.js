document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('#lotto-btn');
    var result = document.querySelector('#lotto-result');
    if (!btn || !result) return;

    function drawNumbers() {
        var pool = [];
        for (var i = 1; i <= 45; i++) pool.push(i);

        var picked = [];
        for (var j = 0; j < 6; j++) {
            var index = Math.floor(Math.random() * pool.length);
            picked.push(pool.splice(index, 1)[0]);
        }
        picked.sort(function (a, b) { return a - b; });
        return picked;
    }

    function ballClass(n) {
        if (n <= 10) return 'lotto-ball c1';
        if (n <= 20) return 'lotto-ball c2';
        if (n <= 30) return 'lotto-ball c3';
        if (n <= 40) return 'lotto-ball c4';
        return 'lotto-ball c5';
    }

    btn.addEventListener('click', function () {
        var numbers = drawNumbers();

        result.innerHTML = numbers
            .map(function (n) {
                return '<span class="' + ballClass(n) + '">' + n + '</span>';
            })
            .join('');

        result.classList.remove('is-visible');
        void result.offsetWidth;
        result.classList.add('is-visible');
    });
});
