// script.js

document.addEventListener('DOMContentLoaded', () => {
    // ─── Chart.js ───
    const ctx = document.getElementById('gradeChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1학년 1학기', '1학년 2학기', '2학년 1학기', '2학년 2학기'],
            datasets: [{
                label: '내신 등급',
                data: [2.30, 2.30, 3.00, 3.15],
                borderColor: '#002F6C',
                backgroundColor: 'rgba(0, 47, 108, 0.08)',
                borderWidth: 3,
                pointBackgroundColor: ['#002F6C','#002F6C','#E11D48','#002F6C'],
                pointBorderColor: '#fff',
                pointBorderWidth: 2.5,
                pointRadius: 7,
                fill: true,
                tension: 0.35
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    reverse: true,
                    min: 1.5,
                    max: 4.0,
                    ticks: {
                        stepSize: 0.5,
                        callback: v => v + '등급',
                        font: { family: 'Pretendard', size: 12 }
                    },
                    grid: { color: '#F1F5F9' }
                },
                x: {
                    ticks: { font: { family: 'Pretendard', size: 11 } },
                    grid: { display: false }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: ctx => `${ctx.parsed.y}등급`,
                        title: items => items[0].label
                    },
                    bodyFont: { family: 'Pretendard' },
                    titleFont: { family: 'Pretendard' }
                }
            }
        }
    });
});

// ─── Popup Data ───
const popupData = {
    mentor1: {
        title: '김호민 멘토 — 서울대 경제학부 26학번',
        desc: `<strong>핵심 메시지</strong><br>
            "현재의 미디어 활동은 일반고의 전형적인 수준입니다. 입학사정관을 설득하려면 막연한 활동 기재보다 명확한 '수학적/통계적 근거'가 필수적입니다. 3-1학기 수학 등급 방어에 모든 것을 거십시오."`
    },
    mentor2: {
        title: '유준환 멘토 — 고려대 경영학부 26학번',
        desc: `<strong>핵심 메시지</strong><br>
            "마케팅 관련 키워드가 등장하기 시작했으나, 아직 얕은 인터넷 조사 수준에 불과합니다. 특히 활동이 모두 '탐구함' 등 피상적인 서술어에 갇혀 완전히 묻혔습니다. 수치 도출조차 없는 뻔한 기록은 가차 없이 버려야 합니다."`
    },
    mentor3: {
        title: '고대현 멘토 — 경희대 이과대학 26학번',
        desc: `<strong>핵심 메시지</strong><br>
            "퀄리티도 양도 턱없이 부족합니다. 무엇보다 계속해서 꺾이는 내신 하락세와 수학 3등급 성적표는 서류 100% 전형에서도 최악의 단점입니다. 진로 핑계로 'AI 윤리' 같은 흔한 주제 쓰지 말고 데이터와 수학 성적 챙기는 데 전념하세요."`
    },
    action1: {
        title: '최우선 — 핵심 교과 내신 방어',
        desc: `<strong>왜 필수인가?</strong><br>
            2학년 3.15로 떨어진 전체 내신, 특히 수학 3등급과 모의고사 수학 3등급은 최상위권 상향 원서를 쓰는 데에 치명적인 약점입니다.<br><br>
            <strong>실행 방법</strong><br>
            1. 국어·영어 과목 2등급대 수성을 위한 모의고사/기출 훈련 집중<br>
            2. 수학 모의고사 3등급 안착 및 내신 방어에 일평균 학습 시간 과반수 투입<br>
            3. 비교과(자율/진로) 활동 시간을 전년 대비 50%로 줄여 절대적인 내신 확보`
    },
    action2: {
        title: '탐구 1 — 결론 중심 객관적 서술로 전환',
        desc: `<strong>기조 전환 배경</strong><br>
            '설명함', '참여함'으로 도배된 세특은 학생의 뛰어난 탐구력을 입학사정관에게 전달해주지 못합니다.<br><br>
            <strong>적용 방법</strong><br>
            1. 보고서 결론부에 "데이터(수치) 분석 결과 ~~한 한계점과 ~~한 인사이트를 제시함"과 같이 객관적 사실을 기재<br>
            2. 단순 교육이나 행사 나열을 모두 지우고, 임원으로서 실제 행동과 결과를 도출한 한 두개의 굵직한 기록만 선정`
    },
    action3: {
        title: '탐구 2 — 알고리즘 소비 패턴 수학적 분석',
        desc: `<strong>연계 과목: 수학 계열</strong><br><br>
            <strong>탐구 방법</strong><br>
            1. 2학년 수학 I·II의 숏폼 미디어 콘텐츠 소비 분석이 가졌던 수리적 한계(단순 나열)를 극복<br>
            2. 지수 및 로그 함수 등 명확한 수학적 모델링을 통해 소셜 미디어 플랫폼의 시청 시간 증가 곡선을 예측<br>
            3. 데이터와 그래프를 기반으로 소비자의 선택을 분석하는 '수학적 마케터' 포지셔닝 완성`
    },
    action4: {
        title: '탐구 3 — 광고 클릭률 정밀 데이터 검정',
        desc: `<strong>연계 과목: 확률과 통계</strong><br><br>
            <strong>탐구 방법</strong><br>
            1. 디지털 마케팅의 A/B 테스트 결과를 확률 및 통계의 가설 검정 단원과 결합<br>
            2. 단순한 아이디어 수준을 넘어 실제 전환율이나 클릭률 데이터를 다루는 깊이 있는 분석지 제시<br>
            3. 문과 일반고 수준을 상회하는 데이터 리터러시 역량을 입증`
    },
    action5: {
        title: '탐구 4 — 소셜 미디어와 뉴스 편향성',
        desc: `<strong>탐구 배경</strong><br>
            1학년 진로활동 '대중매체 선동성 비판 탐구'의 3학년 심화 확장판.<br><br>
            <strong>탐구 방법</strong><br>
            1. 최신 소셜 미디어 추천 알고리즘이 유발하는 필터 버블(Filter Bubble)과 에코 체임버 현상 분석<br>
            2. 미디어 리터러시에 대한 사회학적/경영학적 해결 방안 모색<br>
            3. 언론 매체나 홍보광고 학과에 딱 맞는 사회과학적 소양 어필`
    },
    action6: {
        title: '클라이맥스 — 글로벌 커뮤니케이션 전략 비교',
        desc: `<strong>연계 영역: 영어 / 진로 / 심화국어</strong><br><br>
            <strong>탐구 방법</strong><br>
            1. 2학년 최우수 기록이었던 '글로벌 광고 카피 창작'의 서사를 문화 간 커뮤니케이션 이론으로 진화<br>
            2. 찰스 테일러 등 학습했던 인문학/철학 개념을 재등장시키며 마케팅 전략의 깊이를 더함<br>
            3. 지윤 학생의 가장 큰 강점인 '글로벌 마케팅'과 '어학'의 융합 시너지를 극대화하는 3학년 최종 보고서`
    }
};
window.openPopup = function(id) {
    const data = popupData[id];
    if (!data) return;

    document.getElementById('modalBody').innerHTML = `
        <h3 class="popup-title">${data.title}</h3>
        <p class="popup-desc">${data.desc}</p>
    `;
    document.getElementById('popupModal').classList.add('active');
};

window.closePopup = function(e, force = false) {
    if (force || e.target.id === 'popupModal') {
        document.getElementById('popupModal').classList.remove('active');
    }
};

// ─── Scroll animation (IntersectionObserver) ───
const sections = document.querySelectorAll('.report-section, .toc-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s cubic-bezier(0.16,1,0.3,1) both';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

sections.forEach(sec => {
    sec.style.opacity = '0';
    observer.observe(sec);
});
