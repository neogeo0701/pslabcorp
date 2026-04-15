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
                data: [2.32, 2.32, 3.00, 3.19],
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
        title: '유준환 멘토 — 고려대 경영학부',
        desc: `<strong>전문 분야</strong><br>
            글로벌 경영/마케팅 세특 심화 전문 · 학종 스토리텔링 설계<br><br>
            <strong>핵심 메시지</strong><br>
            "모호하게 '언론'이나 '미디어'를 노리기보다는 본인의 어학적 재능을 마케팅, 글로벌 커뮤니케이션으로 풀어내는 것이 훨씬 승산이 높습니다. 영어 카피 창작 같은 강점을 극대화하세요."`
    },
    mentor2: {
        title: '고대현 멘토 — 경희대 이과대학 26학번',
        desc: `<strong>전문 분야</strong><br>
            전략적 수능 최저/내신 방어선 구축 · 현실적 입결 분석<br><br>
            <strong>핵심 메시지</strong><br>
            "1학년 때부터 이어진 내신 하락세(2.3 → 3.1)는 학종에서 최악의 평가를 받습니다. 비교과를 당장 줄이고, 수능과 내신 두 마리 토끼를 다 잡을 수 없으니 영어/사탐에 올인해 입결을 지켜야 합니다."`
    },
    action1: {
        title: 'PLAN 1 — 결론 중심 객관적 서술 개편',
        desc: `<strong>연계 과목:</strong> 전 과목 세특<br><br>
            <strong>실행 방법</strong><br>
            1. 기존 세특의 '조사함', '설명함' 위주 나열식 서술 배제<br>
            2. 도출해 낸 데이터와 마케팅/미디어적 인사이트 중심으로 재서술<br>
            3. "~~데이터를 분석한 결과 ~~라는 결론을 도출하여 ~~전략을 제안함" 포맷 활용`
    },
    action2: {
        title: 'PLAN 2 — 수학적 모델링 심화: 숏폼 알고리즘과 지수/로그',
        desc: `<strong>연계 과목:</strong> 수학 I / 수학 II<br><br>
            <strong>실행 방법</strong><br>
            1. 숏폼 플랫폼의 도파민 분비 주기와 알고리즘 노출 빈도를 지수함수로 모델링<br>
            2. 로그를 활용하여 시청자 이탈률 감소 지점을 수학적으로 증명<br>
            3. 문과 학생이 정량적 분석 도구를 자유롭게 다루는 모습을 어필하여 차별화`
    },
    action3: {
        title: 'PLAN 3 — 광고 클릭률 데이터(CTR) 정밀 통계 검정',
        desc: `<strong>연계 과목:</strong> 확률과 통계 / 정보<br><br>
            <strong>실행 방법</strong><br>
            1. 일반적인 A/B 테스트 결과를 표본집단과 모집단 개념을 활용해 통계적으로 검정<br>
            2. p-value 등 기초 통계 지식을 마케팅 효과 분석 세특에 자연스럽게 녹여냄<br>
            3. 마케터 지망생에게 필수적인 '데이터 리터러시' 실무 역량 입증`
    },
    action4: {
        title: 'PLAN 4 — 글로벌 커뮤니케이션 실무 전략 분석',
        desc: `<strong>연계 과목:</strong> 영어 교과 / 진로·자율 활동<br><br>
            <strong>실행 방법</strong><br>
            1. 본인의 강점인 영문 카피 창작 실력을 살려 모의 K-브랜드 글로벌 마케팅 기획안 작성<br>
            2. 각 문화권별 언어적 차이를 반영한 타겟팅 카피라이팅 시연<br>
            3. 어학 역량과 미디어 산업 이해도를 융합해 '글로벌 디지털 커뮤니케이터' 포지셔닝`
    },
    action5: {
        title: 'PLAN 5 — 치명적 단점 극복: 영어 및 탐구 교과 올인',
        desc: `<strong>연계 영역:</strong> 3학년 1학기 내신 및 모의고사<br><br>
            <strong>실행 방법</strong><br>
            1. 약점인 수학/국어 등급을 무리하게 단기간에 올리기보다는 방어 가능한 영어와 암기 위주 사탐에 시간 투자<br>
            2. 수능 최저가 없는 서류/면접형 학종을 노리되 최후의 보루로 활용할 2합 최저(탐구 1+영어 중심) 전략<br>
            3. 모든 비교과 활동 참여율을 2학년 대비 대폭 축소하고 순공 시간 확보`
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
