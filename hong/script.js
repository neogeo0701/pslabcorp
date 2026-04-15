// script.js — 홍지민 학생 리포트 (사회학/미디어 지망) 표준 템플릿용

document.addEventListener('DOMContentLoaded', () => {
    // ─── Chart.js — 내신 추이 (실제 데이터 2.19 - 2.56 - 1.90 - 2.38) ───
    const ctx = document.getElementById('gradeChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1-1', '1-2', '2-1', '2-2', '3-목표'],
            datasets: [{
                label: '내신 추이',
                data: [2.19, 2.56, 1.90, 2.38, 1.30], 
                borderColor: '#002F6C',
                backgroundColor: 'rgba(0, 47, 108, 0.08)',
                borderWidth: 3,
                pointBackgroundColor: ['#10B981', '#E11D48', '#002F6C', '#E11D48', '#E11D48'],
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
                    max: 4.0,
                    ticks: { stepSize: 0.5 },
                    grid: { color: '#F1F5F9' }
                },
                x: {
                    ticks: { font: { family: 'Pretendard', size: 11 } },
                    grid: { display: false }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });

    // ─── Scroll animation ───
    const sections = document.querySelectorAll('.report-section, .toc-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(sec => {
        sec.style.opacity = '0';
        sec.style.transform = 'translateY(20px)';
        sec.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(sec);
    });
});

// ─── Popup Data ───
const popupData = {
    mentor1: {
        title: '김호민 멘토 — 서울대 경제학부 26학번',
        desc: `<strong>전문 분야:</strong> 사회과학 데이터 분석 · 비판적 독해 기반 탐구 설계<br><br><strong>핵심 조언</strong><br>"지민 학생의 리포트는 단순한 나열이 아닌, 현상을 꿰뚫어 보는 '비판적 시각'이 핵심입니다. 중앙대나 한양대 사회학과 등에서 높게 평가하는 '학문적 집요함'을 보여주기 위해, 3학년 세특에서는 본인이 세운 가설을 정교한 논리로 증명하는 과정을 반드시 포함하세요."`
    },
    mentor2: {
        title: '유준환 멘토 — 고려대 경영학부 26학번',
        desc: `<strong>전문 분야:</strong> 경영/경제 융합 브랜딩 · 내신 역전 서사 및 입학사정관 심리 분석<br><br><strong>핵심 조언</strong><br>"가장 큰 반전 카드는 수학입니다. 2학년 때의 반등을 3학년 1학기까지 이어가며, 수학적 역량을 사회적 이슈 해결(ESG, 탄소중립)에 투입하는 융합적 인재상을 보여주세요. '따뜻한 가슴을 가진 데이터 전문가'가 우리가 추구하는 최종 브랜딩입니다."`
    },
    mentor3: {
        title: '고대현 멘토 — 경희대 이과대학 26학번',
        desc: `<strong>전문 분야:</strong> 정량 스탯 분석 및 농어촌 전형 특화 전략<br><br><strong>핵심 조언</strong><br>"저도 고등학교 시절 수학의 약점 때문에 깊이 고민한 적이 있습니다. 하지만 지민 학생은 이미 그 약점을 강점으로 뒤집는 <strong>에너지</strong>를 보여주었습니다. 흔들림 없이 3학년 내신을 방어해 나간다면 상위권 대학의 입시 결과 또한 충분히 뒤집을 수 있습니다."`
    },
    action1: {
        title: '탐구 1 — ESG와 ESV의 차이 분석 및 기업의 사회적 책임 실증 탐구',
        desc: `<strong>연계 과목:</strong> 사회문화 / 정치와 법 / 경제<br><br><strong>탐구 핵심 로직</strong><br>단순 홍보용 ESG(Environmental, Social, Governance)와 본질적 사회 가치 창출인 ESV(Economic Social Value)의 차이점을 분석합니다.<br><br><strong>실행 가이드</strong><br>1. 사례 분석: IT 대기업의 환경 보호 캠페인(ESG)과 중소 소상공인 상생 플랫폼 운영(ESV) 사례를 비교 분석.<br>2. 사회적 약자 관점: 디지털 취약 계층의 플랫폼 접근성 강화가 기업의 장기적 기업 가치에 미치는 영향을 논리적으로 서술.<br>3. 세특 기재 팁: "단순한 기업 윤리 비판을 넘어, 사회적 가치 창출의 지속 가능성을 데이터로 검증하려 함" 문구 노출.`
    },
    action2: {
        title: '탐구 2 — 기후 위기와 탄소 중립: 환경 정의 실현을 위한 정책 설계',
        desc: `<strong>연계 과목:</strong> 사회·문화 / 정치와 법 / 영어<br><br><strong>탐구 핵심 로직</strong><br>탄소 중립 정책이 저소득층이나 취약 지역에 미치는 '역진적 불평등' 문제를 법과 제도적 사회 정의 관점에서 전문적으로 탐구합니다.<br><br><strong>실행 가이드</strong><br>1. 이론 적용: '환경 정의(Environmental Justice)' 개념을 활용하여 에너지 바우처 제도의 실효성 및 법적 보완점 검토.<br>2. 영문 자료 활용: UN 환경 보고서나 해외 정책 사례를 원어로 분석하여 글로벌 역량 동시에 증명.<br>3. 결론: 탄소 중립을 위한 규제가 사회적 약자에게 부담이 되지 않도록 하는 '포용적 정책'의 필요성 논증.`
    },
    action3: {
        title: '탐구 3 — 수학 Ⅱ 수리 모델링: 사회 현상의 정량적 분석과 소외 극복',
        desc: `<strong>연계 과목:</strong> 수학 Ⅱ / 확률과 통계<br><br><strong>탐구 핵심 로직</strong><br>사회적 소외 계층의 정보 접근 격차 변화율을 미분과 적분 개념을 사용하여 수치화합니다.<br><br><strong>실행 가이드</strong><br>1. 수리 모델링: 정보화 기기 보급 속도(f(t))와 실제 정보 활용 능력(g(t)) 사이의 변화율(미분값) 차이를 분석.<br>2. 인사이트: 격차가 벌어지는 임계점을 찾아내고, 이를 완화하기 위한 정책 투입 시점 제안.<br>3. 전략: 인문계 학생이 수학 Ⅱ의 미분 개념을 전공 분야에 완벽히 적용함으로써 '수학 2등급 이상의 잠재력'을 시각적으로 증명.`
    },
    action4: {
        title: '탐구 4 — 비판적 문해력을 통한 인본주의 저널리즘과 언론 윤리 탐구',
        desc: `<strong>연계 과목:</strong> 국어 / 독서 / 언어와 매체<br><br><strong>탐구 핵심 로직</strong><br>미디어가 사회적 약자를 프레이밍(Framing)하는 방식을 비판적으로 분석하고, 대안적 저널리즘의 형태를 제안합니다.<br><br><strong>실행 가이드</strong><br>1. 텍스트 분석: 동일한 사회적 이슈가 보수/진보 매체에서 어떤 어휘 선택 차이를 보이는지 미시적으로 분석.<br>2. 고전 연계: 『자유론』(존 스튜어트 밀)의 관점에서 소수의 의견이 보호받아야 하는 당위성을 현대 언론 환경에 적용.<br>3. 활동: '사회적 약자를 위한 소수 독자 권익 위원회' 설치의 필요성을 논설문 형태로 작성.`
    },
    action5: {
        title: '독서 — 사회학적 상상력 심화 및 고전 기반 에세이 집필',
        desc: `<strong>추천 도서:</strong> 『사회학적 상상력』(라이트 밀스), 『정의란 무엇인가』(마이클 샌델)<br><br><strong>실행 가이드</strong><br>1. 독후 활동: 개인의 고민이 어떻게 거시적 사회 구조(구조적 실업, 양극화 등)와 연결되는지 도서의 내용을 빌려 분석.<br>2. 심화: 샌델의 공동체주의와 밀스의 비판적 시각을 융합하여 '현대 한국 사회의 공정성'에 대한 비평문 작성.<br>3. 기록: 자율활동 또는 진로활동에 "도서 분석을 통해 사회 문제의 근본 원인을 구조적으로 파악하는 통찰력을 가짐" 기록.`
    },
    action6: {
        title: '전략 — 한양대 학종 대비 수능 최저 사수 및 수학 반전',
        desc: `<strong>전략적 목표:</strong> 한양대 수능 최저(3합 7) 필수 확보 및 수학 2등급 안착<br><br><strong>실행 가이드</strong><br>1. 한양대 최저 대비: 2026학년도 한양대 학종(추천형)에 신설된 '3개 영역 등급 합 7' 조건은 가장 강력한 필터링 장치입니다. 국어, 탐구를 고정 1등급으로 만들고 영어를 2등급으로 맞추는 실전 모의고사 루틴을 즉시 확립하세요.<br>2. 학습 패턴: 취약 단원(함수, 극한 연속)의 오답을 세밀화하고, 남들보다 압도적으로 강한 문해력을 활용해 수능 국어/사탐의 감점을 없애는 데 총력을 기울이십시오.<br>3. 수학의 서사화: 수학 내신 2등급 사수는 단순한 학력 증명이 아니라, '지독하게 약점을 극복한 회복 탄력성'이라는 것을 입학사정관에게 보여주는 핵심 키입니다.`
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
    if (force || (e && e.target.id === 'popupModal')) {
        document.getElementById('popupModal').classList.remove('active');
    }
}
