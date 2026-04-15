// script.js — 조이현 학생 리포트 프리미엄 개편 버전

document.addEventListener('DOMContentLoaded', () => {
    // ─── Chart.js — 내신 추이 ───
    const ctx = document.getElementById('gradeChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1학년 1학기', '1학년 2학기', '2학년 1학기', '2학년 2학기', '3학년 목표'],
            datasets: [{
                label: '내신 등급',
                data: [4.3, 3.4, 3.0, 3.0, 2.7],
                borderColor: '#002F6C',
                backgroundColor: 'rgba(0, 47, 108, 0.08)',
                borderWidth: 3,
                pointBackgroundColor: ['#64748B', '#002F6C', '#002F6C', '#002F6C', '#E11D48'],
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
                    min: 2.5,
                    max: 4.5,
                    ticks: {
                        stepSize: 0.5,
                        callback: v => v.toFixed(1) + '등급',
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
            "행정학은 단순히 법을 집행하는 학문이 아니라, 한정된 자원을 어떻게 효율적이고 공정하게 배분할 것인지 고민하는 학문입니다. 이현 학생의 국어 역량과 공공 데이터를 결합하여 '논리적 완결성'을 가진 생기부를 만들어 봅시다."`
    },
    mentor2: {
        title: '유준환 멘토 — 고려대학교 경영학부 26학번',
        desc: `<strong>핵심 메시지</strong><br>
            "평균 3.4등급이라는 숫자는 중요하지 않습니다. 4.3에서 3.0까지 뚫고 올라온 그 '기세'가 입학사정관에게는 가장 매력적인 요소입니다. 조이현 학생만의 독보적인 <strong>'인싸 모범생'</strong> 서사를 완성하여 합격을 <strong>제안합니다.</strong>"`
    },
    mentor3: {
        title: '고대현 멘토 — 경희대학교 이과대학 26학번',
        desc: `<strong>핵심 메시지</strong><br>
            "저 또한 고3 시절 미적분 <strong>5등급</strong>을 받고 세상이 무너지는 경험을 했습니다. 하지만 포기하지 않고 세특의 '질적 증명'으로 역전했습니다. 비주요 과목(기술가정 등)도 5등급은 결격 사유가 될 수 있으니 끝까지 챙겨야 합니다."`
    },
    action1: {
        title: '탐구 1 — 세종시 문화행정 거버넌스 실효성 데이터 분석 보고서',
        desc: `<strong>연계 과목:</strong> 정치와 법 / 사회문화<br><br>
            <strong>탐구 방법</strong><br>
            1. 세종시 주민참여예산 운영 현황 데이터 수집<br>
            2. 예산 집행 과정에서의 시민 참여 비중과 실제 만족도 상관관계 분석<br>
            3. '행정 효율성' 증대를 위한 플랫폼 기반 거버넌스 모델 제안<br><br>
            <strong>세특 포인트:</strong> "현장 중심의 문제 발굴과 데이터 기반 대안 제시 역량 강조"`
    },
    action2: {
        title: '탐구 2 — 능력주의를 넘어선 공공 행정의 공정성 탐구',
        desc: `<strong>연계 과목:</strong> 윤리와 사상 / 고전과 윤리<br><br>
            <strong>탐구 방법</strong><br>
            1. 마이클 샌델 『공정하다는 착각』 비판적 읽기<br>
            2. 복지 행정 수혜자 선정 기준(능력 vs 필요)의 철학적 논쟁 분석<br>
            3. '실질적 정의'를 실현하기 위한 행정가에게 필요한 윤리적 덕목 고찰<br><br>
            <strong>세특 포인트:</strong> "인문학적 통찰을 행정 철학으로 연결하는 확장성 어필"`
    },
    action3: {
        title: '탐구 3 — 교통 행정 데이터 기반 수요 응답형 정책 시뮬레이션',
        desc: `<strong>연계 과목:</strong> 확률과 통계 / 공통수학<br><br>
            <strong>탐구 방법 (세부 내용 및 태도 강조)</strong><br>
            1. <strong>세부 내용:</strong> 산본 지역 버스 배차 간격의 통계적 오차와 교통 행정의 효율성 분석<br>
            2. <strong>학습 태도:</strong> 수리적 데이터를 정책에 반영하려는 주도적 탐구 태도와 교사의 긍정적 평가 유도<br>
            3. 수요 응답형 버스(DRT) 도입 시의 경제적/사회적 효과 시뮬레이션 결과 <strong>주장함</strong><br><br>
            <strong>세특 포인트:</strong> "수학적 약점을 정책 분석 역량으로 승화하며, 교사의 긍정적 평가를 최우선으로 배치"`
    },
    action4: {
        title: '탐구 4 — 디지털 정당 인프라와 직접 민주주의의 결합 모델 연구',
        desc: `<strong>연계 과목:</strong> 정보 / 사회문제 탐구<br><br>
            <strong>탐구 방법 (Context Over Listing)</strong><br>
            1. <strong>탈나열식:</strong> 단순 사례 나열이 아닌 '기술-정치-행정'의 유기적 상관관계를 분석<br>
            2. 블록체인 기술을 통한 행정 비용 절감 및 투명성 제고 방안 <strong>제안함</strong><br>
            3. 디지털 리터러시 격차 해소를 위한 공공 서비스 전달 체계 설계안 <strong>포부를 밝힘</strong><br><br>
            <strong>세특 포인트:</strong> "미디어 탐구 역량을 디지털 거버넌스라는 행정적 전문성으로 확장"`
    },
    action5: {
        title: '탐구 5 — 고령화 사회를 대비한 지역 맞춤형 복지 전달 체계',
        desc: `<strong>연계 과목:</strong> 통합사회 / 생명과학(보건)<br><br>
            <strong>탐구 방법</strong><br>
            1. 군포시 노인 인구 밀집 지역과 복지 시설 접근성 매핑<br>
            2. 독거 노인 고독사 예방을 위한 지역 사회 연계 행정 서비스 모델 기획<br>
            3. 예산 제약 조건 하에서의 최적의 복지 서비스 전달 경로 탐색<br><br>
            <strong>세특 포인트:</strong> "지역 사회에 대한 애정과 실천적 정책 설계 역량 증명"`
    },
    action6: {
        title: '탐구 6 — 행정 데이터 오픈 소스화를 통한 공공 정책 투명성 확보 방안',
        desc: `<strong>연계 과목:</strong> 경제 / 화법과 작문<br><br>
            <strong>탐구 방법</strong><br>
            1. 정보의 비대칭성이 공공 서비스 시장에 미치는 영향 분석<br>
            2. 정부 투명성 지수와 공공 정책 신뢰도의 상관관계 고찰<br>
            3. 시민이 직접 참여하는 '오픈 데이터 행정' 시나리오 작성<br><br>
            <strong>세특 포인트:</strong> "경제학적 메커니즘을 행정 투명성과 연결하는 융합적 사고"`
    }
};

function openPopup(id) {
    const data = popupData[id];
    if (!data) return;

    document.getElementById('modalBody').innerHTML = `
        <h3 class="popup-title">${data.title}</h3>
        <p class="popup-desc">${data.desc}</p>
    `;
    document.getElementById('popupModal').classList.add('active');
}

function closePopup(e, force = false) {
    if (force || e.target.id === 'popupModal') {
        document.getElementById('popupModal').classList.remove('active');
    }
}

// ─── Scroll animation ───
const sections = document.querySelectorAll('.report-section, .toc-section, .calendar-month-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s cubic-bezier(0.16,1,0.3,1) both';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sections.forEach(sec => {
    sec.style.opacity = '0';
    observer.observe(sec);
});
