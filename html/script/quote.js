document.addEventListener('DOMContentLoaded', function () {
    var quotes = [
        { text: '시작이 반이다.', author: '아리스토텔레스' },
        { text: '포기하지 않는 한 실패는 없다.', author: '벤저민 프랭클린' },
        { text: '오늘 할 수 있는 일을 내일로 미루지 마라.', author: '벤저민 프랭클린' },
        { text: '천 리 길도 한 걸음부터.', author: '한국 속담' },
        { text: '실패는 성공의 어머니다.', author: '격언' },
        { text: '가장 큰 위험은 위험을 감수하지 않는 것이다.', author: '마크 저커버그' },
        { text: '행동이 곧 답이다.', author: '파블로 피카소' },
        { text: '멈추지만 않는다면, 얼마나 천천히 가는지는 중요하지 않다.', author: '공자' }
    ];

    var textEl = document.querySelector('#quote-text');
    var authorEl = document.querySelector('#quote-author');
    var prevBtn = document.querySelector('.quote-prev');
    var nextBtn = document.querySelector('.quote-next');
    if (!textEl) return;

    var current = Math.floor(Math.random() * quotes.length);

    function render() {
        textEl.style.opacity = 0;
        authorEl.style.opacity = 0;
        setTimeout(function () {
            textEl.textContent = '“' + quotes[current].text + '”';
            authorEl.textContent = '- ' + quotes[current].author;
            textEl.style.opacity = 1;
            authorEl.style.opacity = 1;
        }, 200);
    }

    nextBtn.addEventListener('click', function () {
        current = (current + 1) % quotes.length;
        render();
    });

    prevBtn.addEventListener('click', function () {
        current = (current - 1 + quotes.length) % quotes.length;
        render();
    });

    render();
});
