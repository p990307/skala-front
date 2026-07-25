document.addEventListener('DOMContentLoaded', function () {
    var quizBox = document.querySelector('#mbti-quiz');
    var questionEl = document.querySelector('#mbti-question');
    var optionsEl = document.querySelector('#mbti-options');
    var resultEl = document.querySelector('#mbti-result');
    if (!quizBox) return;

    var questions = [
        {
            text: '모임에서 나는?',
            a: { label: '먼저 다가가서 말 건다', axis: 'E' },
            b: { label: '누가 다가와주길 기다린다', axis: 'I' }
        },
        {
            text: '계획을 짤 때 나는?',
            a: { label: '구체적인 사실과 경험 중심', axis: 'S' },
            b: { label: '가능성과 아이디어 중심', axis: 'N' }
        },
        {
            text: '결정을 내릴 때 나는?',
            a: { label: '논리와 기준을 먼저 본다', axis: 'T' },
            b: { label: '사람과 감정을 먼저 본다', axis: 'F' }
        },
        {
            text: '일정 앞에서 나는?',
            a: { label: '미리 계획하고 착착 진행', axis: 'J' },
            b: { label: '상황 봐가며 유연하게', axis: 'P' }
        }
    ];

    var descriptions = {
        ISTJ: '신중하고 책임감 있는 관리자 스타일이에요.',
        ISFJ: '따뜻하고 헌신적인 수호자 스타일이에요.',
        INFJ: '통찰력 있는 신비주의자 스타일이에요.',
        INTJ: '전략적인 설계자 스타일이에요.',
        ISTP: '침착한 만능 재주꾼 스타일이에요.',
        ISFP: '조용하고 감성적인 예술가 스타일이에요.',
        INFP: '이상을 좇는 낭만가 스타일이에요.',
        INTP: '호기심 많은 논리학자 스타일이에요.',
        ESTP: '행동파 모험가 스타일이에요.',
        ESFP: '분위기 메이커 연예인 스타일이에요.',
        ENFP: '에너지 넘치는 활동가 스타일이에요.',
        ENTP: '재치 있는 변론가 스타일이에요.',
        ESTJ: '체계적인 경영자 스타일이에요.',
        ESFJ: '사교적인 사교계 인사 스타일이에요.',
        ENFJ: '사람을 이끄는 선도자 스타일이에요.',
        ENTJ: '카리스마 있는 통솔자 스타일이에요.'
    };

    var current = 0;
    var scores = {};

    function resetScores() {
        scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    }
    resetScores();

    function renderQuestion() {
        var q = questions[current];
        questionEl.textContent = (current + 1) + '. ' + q.text;
        optionsEl.innerHTML = '';

        [q.a, q.b].forEach(function (opt) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'mbti-option';
            btn.textContent = opt.label;
            btn.addEventListener('click', function () {
                scores[opt.axis] = (scores[opt.axis] || 0) + 1;
                current++;
                if (current < questions.length) {
                    renderQuestion();
                } else {
                    showResult();
                }
            });
            optionsEl.appendChild(btn);
        });
    }

    function showResult() {
        var type =
            (scores.E >= scores.I ? 'E' : 'I') +
            (scores.S >= scores.N ? 'S' : 'N') +
            (scores.T >= scores.F ? 'T' : 'F') +
            (scores.J >= scores.P ? 'J' : 'P');

        quizBox.hidden = true;
        resultEl.hidden = false;
        resultEl.innerHTML =
            '<p class="mbti-type">' + type + '</p>' +
            '<p class="mbti-desc">' + descriptions[type] + '</p>' +
            '<button type="button" class="btn-reset" id="mbti-retry">다시 하기</button>';

        document.querySelector('#mbti-retry').addEventListener('click', function () {
            current = 0;
            resetScores();
            resultEl.innerHTML = '';
            resultEl.hidden = true;
            quizBox.hidden = false;
            renderQuestion();
        });
    }

    renderQuestion();
});
