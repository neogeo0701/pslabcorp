// script.js

document.addEventListener('DOMContentLoaded', () => {
    // ─── Chart.js ───
    const ctx = document.getElementById('gradeChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1학년 1학기', '1학년 2학기'],
            datasets: [{
                label: '내신 등급',
                data: [1.42, 1.69],
                borderColor: '#002F6C',
                backgroundColor: 'rgba(0, 47, 108, 0.08)',
                borderWidth: 3,
                pointBackgroundColor: ['#002F6C','#E11D48'],
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
                    min: 1.0,
                    max: 2.5,
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
        title: '전동훈 멘토 — 한양대 공과대학',
        desc: `<strong>전문 분야</strong><br>
            학종 서류 검증 및 입학사정관 시점 평가<br><br>
            <strong>조언</strong><br>
            "1학년 톡사이언스반 실험 설계는 일반고에서 볼 수 있는 최고 수준입니다! 매우 칭찬합니다. 하지만, 2022 개정 5등급제는 B를 받으면 과거의 3~4등급으로 체감되는 무서운 체제입니다. 비교과 탐구를 당장 모두 줄이더라도 '대수', '화학' 같은 핵심 교과 내신 1등급을 사수해야만 압도적인 SKY 입성이 가능합니다."`
    },
    mentor2: {
        title: '고대현 멘토 — 경희대 이과대학',
        desc: `<strong>전문 분야</strong><br>
            데이터/인문·과학 융합 및 세특 파편화 방지 기획<br><br>
            <strong>조언</strong><br>
            "'세상은 온통 화학이야'라는 책을 읽고 국어 시간에 비판적 분석을 한 점, 이과인데도 문과적 소양이 뛰어나다는 점이 엄청난 메리트입니다! 앞으로 2학년 대수/미적분/화학 진로 활동은 자잘한 기사 여러 개를 적지 말고 '파편화'를 없앤, 한 가지 실험을 완전히 끝장내는 논문급 프로젝트가 되어야 합니다."`
    },
    action1: {
        title: '최우선 과제 — 핵심 교과 성취도 B 방어 숙명',
        desc: `<strong>왜 중요한가?</strong><br>
            5등급제 환경에서 상위 10개 대학은 이공계 지원자의 '수학·과학 ALL A (1등급)'를 기본 필터링 조건으로 사용합니다. 1-2학기 공통수학의 B 성취도는 치명적인 레드 시그널입니다.<br><br>
            <strong>실행 방안</strong><br>
            이제 잡다한 비교과 활동과 여러 탐구를 반 이상으로 줄이세요. 남은 생명줄 같은 시간은 무조건 '대수', '미적분Ⅰ', '화학' 등 교과의 킬러 문항과 기출문제 풀이에 걸어야 합니다. 평점 1.3 초반을 사수하세요.`
    },
    action2: {
        title: '세특 방침 — 활동의 파편화 전면 금지',
        desc: `<strong>생기부 작성 마인드셋</strong><br>
            1학년 진로활동 말미처럼 그래핀, 고분자 등 'A도 보았고, B도 흥미가 생겼다' 식의 나열형 기재는 입학사정관에게 아무런 인상을 주지 못합니다.<br><br>
            <strong>실행 방안</strong><br>
            남은 학년엔 1개의 과목당 오직 단 1개의 심화 실험, 코딩만 아주 구체적이고 디테일한 수학 물리적 수식을 빌려 길게 풀어쓰세요. '선택과 집중'만이 대학원생급 인재를 증명합니다.`
    },
    action3: {
        title: '탐구 1 — 항산화 아이오딘 적정의 반응 고도화',
        desc: `<strong>연계 과목:</strong> 화학 / 과학탐구실험 / 동아리<br><br>
            <strong>탐구 배경</strong><br>
            최고의 찬사를 받은 1학년 톡사이언스반 실험을 일회성 호기심으로 폐기하는 것은 있을 수 없는 낭비입니다.<br><br>
            <strong>실행 방안</strong><br>
            2학년 '화학' 시간에 배우는 화학 반응식 고도화, 촉매제, 반응열 등의 변인을 추가해 항산화 작용이 특정 환경에서 어떻게 가속/지연 되는지 정밀 추적하고, 통계화하여 나만의 브랜드 실험으로 끝장을 보십시오.`
    },
    action4: {
        title: '탐구 2 — 기업 데이터 시각화의 수학적 예측',
        desc: `<strong>연계 과목:</strong> 정보 / 대수 / 확률과 통계<br><br>
            <strong>탐구 배경</strong><br>
            파이썬을 활용한 화학물질 데이터 시각화라는 강력한 소프트웨어 무기를 2학년 수학 시간으로 가져옵니다.<br><br>
            <strong>실행 방안</strong><br>
            기업이나 국가의 연도별 화학 배출 데이터를 끌어온 뒤, 수학 교과의 '지수 지수/로그 함수' 또는 '통계적 추정'을 이용해 미래 배출량을 예측해 내는 수학/IT 융합 생기부의 정석을 만들어내십시오.`
    },
    action5: {
        title: '탐구 3 — 예체능에서 발견하는 첨단 화학',
        desc: `<strong>연계 과목:</strong> 음악 / 미술 / 체육<br><br>
            <strong>탐구 배경</strong><br>
            남들이 소홀히 여기는 예체능 세특마저 진로와 연결하면, 단 한 줄의 틈색조차 없는 미친 밀도의 생기부가 탄생합니다.<br><br>
            <strong>실행 방안</strong><br>
            체육 시간: 이온 음료와 근육 회복 과정의 화학적 삼투압 및 분자 구조 비교<br>미술 시간: 친환경 유화 안료의 건조 산화 반응에 대한 화학적 보고서 제출`
    }
};

// ─── 팝업 제어 ───
function openPopup(id) {
    const data = popupData[id];
    if(!data) return;
    const body = document.getElementById('modalBody');
    body.innerHTML = `<h3>${data.title}</h3><p>${data.desc}</p>`;
    document.getElementById('popupModal').classList.add('active');
}

function closePopup(e, force=false) {
    if(force || e.target.id === 'popupModal') {
        document.getElementById('popupModal').classList.remove('active');
    }
}
