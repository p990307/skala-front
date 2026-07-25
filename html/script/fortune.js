document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('#fortune-btn');
    var result = document.querySelector('#fortune-result');
    if (!btn || !result) return;

    var pools = {
        high: [
            '대박! 오늘 로또 한 장 사보는 건 어때요? 💰',
            '모든 일이 술술 풀리는 완벽한 하루예요 🍀',
            '뜻밖의 행운이 문 앞까지 찾아와요 ✨',
            '횡재수가 기대됩니다! 좋은 소식이 곧 도착해요 🎉'
        ],
        good: [
            '노력한 만큼 딱 보상받는 날이에요 💪',
            '주변 사람들에게 좋은 기운을 나눠주게 돼요 😊',
            '작은 행운들이 하루 종일 이어져요 🌤️',
            '중요한 일에 도전하기 좋은 타이밍이에요 🔥'
        ],
        mid: [
            '평범하지만 알찬 하루가 될 거예요 ☕',
            '작은 성취감이 하루를 채워줘요 ✅',
            '무난하게 흘러가는 편안한 날이에요 🌿',
            '꾸준함이 빛을 발하는 하루예요 📚'
        ],
        low: [
            '서두르지 않으면 무탈하게 지나가요 🍃',
            '오늘은 페이스 조절이 관건이에요 🐢',
            '조금 느긋하게, 무리하지 않는 게 좋아요 🧘',
            '작은 실수는 웃어넘기는 여유가 필요해요 😅'
        ],
        rest: [
            '오늘은 푹 쉬는 게 최고의 운세예요 😴',
            '중요한 결정은 내일로 미뤄도 괜찮아요 🌙',
            '컨디션 관리가 우선인 하루! 무리하지 마세요 🍵',
            '나 자신을 다독여주는 하루로 만들어보세요 🤍'
        ]
    };

    function pickMessage(score) {
        var pool;
        if (score >= 90) pool = pools.high;
        else if (score >= 75) pool = pools.good;
        else if (score >= 60) pool = pools.mid;
        else if (score >= 40) pool = pools.low;
        else pool = pools.rest;

        return pool[Math.floor(Math.random() * pool.length)];
    }

    btn.addEventListener('click', function () {
        var score = Math.floor(Math.random() * 100) + 1;
        var message = pickMessage(score);

        result.innerHTML = '<p class="fortune-score">' + score + '점!</p><p class="fortune-message">' + message + '</p>';

        result.classList.remove('is-visible');
        void result.offsetWidth;
        result.classList.add('is-visible');
    });
});
