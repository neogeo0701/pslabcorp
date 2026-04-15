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
                data: [1.86, 2.25, 3.00, 2.88],
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
        title: '전동훈 멘토 — 한양대 공과대학 26학번',
        desc: `<strong>합격 대학</strong><br>
            한양대 공과대학 · 성균관대 공과대학<br><br>
            <strong>전문 영역</strong><br>
            공학 계열 생기부 정량/정성 평가 · 전략 로드맵<br><br>
            <strong>핵심 메시지</strong><br>
            "이공계 학종의 본질은 수학과 과학 성적입니다. 진로나 창체에 1500자 쏟는 것보다, 수학 교과 내신 1등급을 올리는 것이 중앙대 진학에 더 유리합니다. 국어/영어를 놔주더라도 탐구에 집중하세요."`
    },
    mentor2: {
        title: '배제욱 멘토 — 한양대 자연과학대학 화학과',
        desc: `<strong>공통점</strong><br>
            로봇공학 지망에서 화학과로 진로를 튼 본인의 경험 바탕<br><br>
            <strong>전문 영역</strong><br>
            화학·생명공학 심화 탐구 기획 및 실험 고도화<br><br>
            <strong>핵심 메시지</strong><br>
            "진로 변경은 자연스럽고 진정성 있는 동기만 있다면 오히려 강점이 됩니다. GPT가 추천해 준 듯한 어려운 주제 말고, 일상의 현상과 2학년 실험을 화학의 눈(분자/결합)으로 다시 풀어내는 1개의 딥다이브 탐구가 필요합니다."`
    },
    mentor3: {
        title: '고대현 멘토 — 경희대 이과대학 26학번',
        desc: `<strong>합격 대학</strong><br>
            경희대 이과대학 · 아주대 공과대학 합격<br><br>
            <strong>전문 영역</strong><br>
            내신 방어 및 생기부 군더더기 압축 전략<br><br>
            <strong>핵심 메시지</strong><br>
            "지금 생기부는 이미 1등급 수준입니다. 여기서 더 채운다고 해서 합격률이 올라가지 않습니다. 오히려 최저를 못 맞출 위기에 처해 있습니다. 선택과 집중을 해야 할 때입니다."`
    },
    action1: {
        title: '최우선 — 수·과탐 내신 사수 및 실전 모의고사 루틴',
        desc: `<strong>왜 필수인가?</strong><br>
            2학년 1학기 화학 5등급과 2학년 하락세 등 수학/과학 교과의 성적이 리스크입니다. 모의고사 성적이 국4/수4/영2/탐4로, 높은 수능 최저를 요구하는 대학은 불가능에 가깝습니다.<br><br>
            <strong>실행 방법</strong><br>
            1. 3학년 1학기 중간/기말고사는 수학, 과탐 등급 방어에 모든 역량 집결<br>
            2. 비교과 활동(자율, 동아리) 비중을 2학년 대비 20%로 감축<br>
            3. 매주 토요일 탐구 과목 및 국어 모의고사 실전 응시 루틴화<br><br>
            <strong>목표</strong><br>
            수능 미달 시 안전망이 수시 학종으로 제한됨을 명심하고, 내신 1.5등급 목표 설정.`
    },
    action2: {
        title: '탐구 1 — 생분해 플라스틱 화학 결합/분자 딥다이브',
        desc: `<strong>연계 과목:</strong> 화학 II / 화학 탐구<br><br>
            <strong>탐구 배경</strong><br>
            2학년 자율활동의 오징어뼈 생분해 플라스틱 제작 실험은 압도적인 실행력을 보였습니다. 다만, '환경공학 이야기'에 머물렀을 뿐 '화학적 깊이'는 부재했습니다.<br><br>
            <strong>탐구 방법</strong><br>
            1. 키토산, 카라기난 등 첨가물이 플라스틱의 폴리머 사슬 결합에 미치는 공유결합적 차이 해석<br>
            2. 강도 차이와 분해율을 분자 구조 관점에서 화학식으로 설명<br>
            3. 문장 예시: "~~한 화학 구조의 변화가 인장 강도를 높이는 원리를 ~~이론을 통해 입증함."<br><br>
            <strong>세특 활용법</strong><br>
            단순히 이것저것 만든 학생이 아니라, 물질의 원리를 화학적으로 꿰뚫고 있는 전문가임을 서류/면접에서 입증.`
    },
    action3: {
        title: '탐구 2 — 완충용액 성질 활용 폐수 처리 시스템 연구',
        desc: `<strong>연계 과목:</strong> 화학 II / 환경과목 / 물·화·생 융합<br><br>
            <strong>탐구 배경</strong><br>
            1학년 항균 실험, 2학년 칡 액비 등 그간 쌓아온 생명/환경 배경을 '화학'과 직결시키는 탐구입니다. 환경공학의 핵심인 '수질 처리'를 다룹니다.<br><br>
            <strong>탐구 방법</strong><br>
            1. 산-염기 완충용액의 기본 원리를 화학적으로 식별하고 정리<br>
            2. 특정 pH 변화가 토양과 해양(폐수) 생태계에 미치는 영향을 예측<br>
            3. 이를 방지하기 위한 최적의 완충 용액 농도와 비용 모델링 제안<br><br>
            <strong>세특 활용법</strong><br>
            화학-환경 융합 심화. 이를 화학 세특에 길게 1500자 분량으로 밀도있게 서술하여 화학 내신의 아쉬움을 극복.`
    },
    action4: {
        title: '탐구 3 — 환경지표 스마트 모니터링 기획',
        desc: `<strong>연계 과목:</strong> 정보 / 공학일반<br><br>
            <strong>탐구 배경</strong><br>
            이클립스 개발을 통해 보여준 IT 역량을 환경공학과 직결시킵니다.<br><br>
            <strong>탐구 방법</strong><br>
            1. 2학년에 했던 산불 복원 액비 실험의 효과를 실시간으로 모니터링하는 시나리오 구축<br>
            2. 아두이노/라즈베리파이 센서를 이용한 간단한 데이터 흐름도 기획<br><br>
            <strong>세특 활용법</strong><br>
            코딩 역량이 있는 스마트 환경공학도임을 어필.`
    },
    action5: {
        title: '탐구 4 — 유체역학 기반 해양 쓰레기 포집 모델 검증',
        desc: `<strong>연계 과목:</strong> 물리학 II / 미적분<br><br>
            <strong>탐구 배경</strong><br>
            2학년 몽셀에서 설계한 죽방렴 포집 시스템을 수리적으로 입증합니다.<br><br>
            <strong>탐구 방법</strong><br>
            1. 조류 흐름에 따른 유체역학적 저항력과 수압 공식을 조사<br>
            2. 기존 설계가 어느 정도의 물살을 버틸 수 있는지 미적분 활용해 계산<br><br>
            <strong>세특 활용법</strong><br>
            실행에 그치지 않고, 그 실행의 안전성과 오류를 수학·물리적 공식으로 피드백하는 엔지니어의 면모 부각.`
    },
    action6: {
        title: '독서 — 환경공학 연계 독서 2권 및 세특 확장',
        desc: `<strong>연계 영역:</strong> 독서 기록 / 주요 교과 세특<br><br>
            <strong>독서 배경</strong><br>
            실험과 실천 위주의 생기부에 '학술적 깊이'와 '이론적 탐구심'을 보완하기 가장 좋은 도구가 바로 전공 독서입니다.<br><br>
            <strong>실행 가이드</strong><br>
            1. '침묵의 봄' 심화 분석, '기후위기와 인권' 등 환경공학 이슈를 다룬 도서 2권 정독<br>
            2. 책의 내용을 단순히 요약하는 것이 아니라, 화학/생명과학 수업에서 배운 내용과 연결하여 비판적 독서록 작성<br>
            3. 단골 선생님께 제출하여 과세특에 '지적 호기심을 독서로 확장하는 역량' 기재 유도<br><br>
            <strong>세특 활용법</strong><br>
            이론-실험-독서로 이어지는 자기주도적 학습의 완결성을 증명.`
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
