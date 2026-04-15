const popupData = {
    // ──────── MENTOR PROFILES (전동훈 - 배제욱 - 고대현) ────────
    'mentor1': {
        title: '전동훈 멘토 — 한양대 공과대학 26학번',
        desc: `<strong>주요 합격 실적</strong><br>
            한양대 기계공학부 · 성균관대 공학계열 동시 합격<br><br>
            <strong>전문 영역</strong><br>
            이공계 세특 스토리 기획 · 수학/물리 세특 심화<br><br>
            <strong>컨설팅 철학</strong><br>
            "압도적인 데이터 핸들링 능력이 합격의 열쇠입니다. 단순한 실험을 넘어 공학적으로 분석하는 서사를 만들어야 합니다."`
    },
    'mentor2': {
        title: '배제욱 멘토 — 한양대 자연과학대학 26학번',
        desc: `<strong>합격 대학</strong><br>
            한양대 자연과학대학 26학번<br><br>
            <strong>전문 영역</strong><br>
            자연과학 계열 진로 설계 · 탐구 주제 고도화 · 최신 과학 기술 연계<br><br>
            <strong>컨설팅 철학</strong><br>
            "동기부여가 확실한 탐구만이 입학사정관을 설득합니다. 뻔한 주제를 피하고 본인만의 고민이 담긴 연구를 제안합니다."`
    },
    'mentor3': {
        title: '고대현 멘토 — 경희대 이과대학 26학번',
        desc: `<strong>주요 성과</strong><br>
            일반고 내신 2.9 → 경희대 학종 면접형 합격<br><br>
            <strong>전문 영역</strong><br>
            부족한 내신을 덮는 '필살 세특' 기획 · 스펙 역전 전문<br><br>
            <strong>컨설팅 철학</strong><br>
            "평범한 활동도 서술의 깊이에 따라 명품이 됩니다. 한 문장의 밀도 차이가 당락을 가릅니다."`
    },

    // ──────── ACTION PLANS ────────
    'action1': {
        title: '탐구 1 — 화학공학 공정 설계와 엑셀 시뮬레이션 탐구',
        desc: `<strong>연계 과목:</strong> 미적분 (수학적 모델링 역량 과시)<br><br>
            <strong>탐구 배경</strong><br>
            화학반응속도론 수식을 활용해 엑셀 시뮬레이션 그래프를 도출하고, 공정 변수에 따른 속도 변화를 수학적으로 분석합니다. 미적분 역량을 이공계열 전공과 가장 잘 연결할 수 있는 주제입니다.<br><br>
            <strong>탐구 방법</strong><br>
            1. '반응물의 농도 변화에 따른 반응 속도' 미분방정식 모델링<br>
            2. GPT 등 AI 활용하여 엑셀 시뮬레이션 수식 구현<br>
            3. 온도·촉매 등 변수에 따른 그래프 도출 및 분석 (보고서 작성)<br><br>
            <strong>세특 활용법</strong><br>
            "데이터 시뮬레이션을 통해 최적 조건을 도출함"이라는 문구가 포함되도록 미적분 세특에 기재. 한양대 이상 상위권 경쟁에서 강력한 차별화가 됩니다.`
    },
    'action2': {
        title: '탐구 2 — 분광학적 정량 분석 실험 정밀도 향상 연구',
        desc: `<strong>연계 과목:</strong> 물리학Ⅱ 또는 화학Ⅱ<br><br>
            <strong>탐구 배경</strong><br>
            2학년 화학 세특의 최고 강점인 '비타민C 실험'을 심화합니다. 단순 실험 성공을 넘어, 당시 발생했던 오차 원인(흡광도 측정 한계 등)을 기기 분석 관점에서 재평가하고 원리를 규명합니다.<br><br>
            <strong>탐구 방법</strong><br>
            1. 2학년 분광학 실험 데이터 재조명<br>
            2. Beer-Lambert 법칙의 물리적 유도 과정 확인<br>
            3. 분석 기기 원리 및 오차 보정 기법 심층 리포트 작성<br><br>
            <strong>세특 활용법</strong><br>
            단순 성공 경험 나열이 아닌 '실패 분석과 원리 규명'의 공학자적 태도를 강조. 물리·화학 교과 세특에 심화 연계 기록으로 활용합니다.`
    },
    'action3': {
        title: '필수 전략 — 실전 모의고사 루틴 확립 및 과탐 Ⅱ과목 방어',
        desc: `<strong>왜 필수인가?</strong><br>
            강력한 국/수 모의고사 1등급 기조를 유지하면서도 흔들리는 과탐 성적을 보완해야, 수시 교과 최저 충족뿐 아니라 정시까지 지원폭이 극대화됩니다.<br><br>
            <strong>실행 방법</strong><br>
            · 매주 토요일 실제 수능 시간표(국·수·영·탐) 맞춰 오전/오후 실전 모의고사 응시<br>
            · 최저 학력을 맞추기 위한 '오답 정밀 분석(개념 미숙 vs 시간 부족)' 루틴화<br>
            · 3월 학력평가 성적 분석 후 PS:LAB 멘토진과 수시·정시 밸런스 재조정`
    },
    'action4': {
        title: '탐구 3 — 확률 통계 모델링을 활용한 반도체 불량률(SQC) 연구',
        desc: `<strong>연계 과목:</strong> 확률과 통계<br><br>
            <strong>탐구 배경</strong><br>
            2학년 물리 세특의 '생체 반도체' 내용을 확장합니다. 수학 교과에 화공·전자 융합 역량을 직접 보여주기 위해 정규분포를 통해 공정 수율(불량률)을 관리하는 통계적 품질 관리(SQC) 기법을 연구합니다.<br><br>
            <strong>탐구 방법</strong><br>
            1. 반도체 공정 가상 데이터(산포도 등) 설정 및 정규분포 생성<br>
            2. 신뢰구간 및 허용 오차 설정을 통한 불량률 확률 계산<br>
            3. 공정 수율 향상을 위한 수학적 관리 방안 모색<br><br>
            <strong>세특 활용법</strong><br>
            공대 진학 시 필수인 '확률과 통계를 활용한 데이터 핸들링 역량'을 증명하는 소논문·발표 자료 제출로 기재 강제.`
    },
    'action5': {
        title: '독서 계획 — 화학적 관점의 생태계 분석 『침묵의 봄』',
        desc: `<strong>왜 중요한가?</strong><br>
            현재 독서 기재량이 0이라는 치명적 약점을 만회하기 위한 핵심 전략입니다. 일반적인 독서 감상문이 아닌 전공 심화 지식을 드러내야 합니다.<br><br>
            <strong>탐구 방법</strong><br>
            1. 레이첼 카슨의 『침묵의 봄』 정독<br>
            2. 주요 살충제(DDT 등)의 화학적 분자 구조 및 반감기 조사<br>
            3. 생태계 농축 현상을 유발하는 화학적 기전 수식화 및 영향 분석<br><br>
            <strong>세특 활용법</strong><br>
            독서 후 화학 또는 진로 자율 세특에 기재. '화학 성분의 인체 흡수 기전에 대한 호기심으로 독서를 연계함' 형식의 스토리텔링 활용.`
    },
    'action6': {
        title: '리더십 전략 — 친환경 공정 설계 자율 프로젝트 기획',
        desc: `<strong>왜 필요한가?</strong><br>
            지원자의 경우 2학년 자율활동이 다소 수동적인 행사 위주로 기록되었습니다. 3학년에서는 주도적 리더십과 '온리원(Only One)'의 차별성이 필요합니다.<br><br>
            <strong>실행 방법</strong><br>
            1. '그린 케미스트리(Green Chemistry)' 원칙 적용 학급 프로젝트 기획<br>
            2. 학교 내 버려지는 쓰레기/화학 물질의 순환 구조 아이디어 시각화 팀 구성 및 리드<br>
            3. 프로젝트 기획서 및 발표 자료를 자율활동 기록 담당 교사에게 별도 제출<br><br>
            <strong>면접 활용</strong><br>
            자율 프로젝트의 기획 의도와 어려움 극복 과정을 면접의 핵심 스토리로 준비합니다.`
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

// ─── Chart.js ───
window.onload = function() {
    const ctx = document.getElementById('gradeChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1-1', '1-2', '2-1', '2-2'],
                datasets: [{
                    label: '주요교과 평균등급',
                    data: [2.25, 2.5, 3.1, 2.4],
                    borderColor: '#002F6C',
                    backgroundColor: 'rgba(0, 47, 108, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 6,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#002F6C',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        reverse: true,
                        min: 1,
                        max: 7,
                        ticks: { stepSize: 1 }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
};
