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
                data: [4.0, 3.9, 2.8, 2.9],
                borderColor: '#002F6C',
                backgroundColor: 'rgba(0, 47, 108, 0.08)',
                borderWidth: 3,
                pointBackgroundColor: ['#E11D48','#E11D48','#002F6C','#002F6C'],
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
                    max: 5.0,
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
        title: '유준환 멘토 — 고려대 경영학부 26학번',
        desc: `<strong>합격 대학</strong><br>
            고려대 경영학부 · 연세대 경영학과 · 서강대 경제학과 · 성균관대 경영학과<br><br>
            <strong>내신 궤적</strong><br>
            2.7 → 1.4 (우상향) · 평균 내신 약 1.8<br><br>
            <strong>핵심 메시지</strong><br>
            "연·고·서·성 4관왕의 핵심은 '기세'였습니다. 3학년 1학기 한 학기의 폭발적 성장이 입학사정관을 설득합니다."`
    },
    mentor2: {
        title: '고대현 멘토 — 경희대 이과대학 26학번',
        desc: `<strong>합격 대학</strong><br>
            경희대 이과대학 · 아주대 공과대학 합격<br><br>
            <strong>내신 궤적</strong><br>
            일반고 내신 2.9 (전 학년 평균) · 3학년 집중 관리<br><br>
            <strong>핵심 메시지</strong><br>
            "일반고 평균 내신으로도 학종을 뚫을 수 있습니다. 성적이 아닌 서사(Narrative)가 생기부를 살립니다."`
    },
    team_kyoho: {
        title: '김호민 — 서울대 경제학부 26학번',
        desc: `<strong>주요 합격 실적</strong><br>
            서울대 경제학부 · 고려대 전자전기공학부 차석 · 한양대 인터칼리지 수석<br><br>
            <strong>전문 영역</strong><br>
            정시 전략 · 수학 집중 보완 · 최상위권 수시 서류 전략<br><br>
            <em>PS:LAB 내 수능/정시 전략 총괄</em>`
    },
    team_donghoon: {
        title: '전동훈 — 한양대 공과대학 26학번',
        desc: `<strong>주요 합격 실적</strong><br>
            한양대 공과대학 · 성균관대 공과대학<br><br>
            <strong>전문 영역</strong><br>
            공학 계열 생기부 설계 · 이과 세특 스토리 기획<br><br>
            <em>PS:LAB 내 이공계열 컨설팅 담당</em>`
    },
    team_jewook: {
        title: '배제욱 — 한양대 자연과학대학 26학번',
        desc: `<strong>역할</strong><br>
            PS:LAB 자연과학계열 자문위원<br><br>
            <strong>전문 영역</strong><br>
            자연과학 계열 진로 설계 · 탐구 주제 고도화<br><br>
            <em>PS:LAB 내 자연과학 계열 전문 자문 담당</em>`
    },
    action1: {
        title: '탐구 1 — 딥페이크 처벌법과 정보통신망법 판례 분석',
        desc: `<strong>연계 과목:</strong> 정치와 법 (언론법 · 디지털미디어법 연계)<br><br>
            <strong>탐구 배경</strong><br>
            2학년 생활과 윤리 세특에서 인터넷 실명제·AI 필터링을 제안한 경험을 발전시켜, 실제 현행법(「딥페이크 처벌법」·「정보통신망법」) 판례를 직접 분석하는 심화 탐구 보고서를 작성합니다.<br><br>
            <strong>탐구 방법</strong><br>
            1. 딥페이크 처벌법 실제 판례 2~3건 선정·분석<br>
            2. 현행 규제 체제의 한계 도출 (정보통신망법 제44조 등)<br>
            3. 입법론적 개선 방향 제안 (소논문 A4 2매 권장)<br><br>
            <strong>세특 활용법</strong><br>
            정치와 법 세특에 '판례 분석 → 입법 개선 제안' 형식으로 기재 → 법학과 전공 적합성 완성. 언론법·디지털미디어법과 연계해 중요도 ★★★ 핵심 세특으로 격상 가능.`
    },
    action2: {
        title: '탐구 2 — 사실적시 명예훼손과 인터넷 실명제 논증',
        desc: `<strong>연계 과목:</strong> 생활과 윤리 (칸트 의무론 기반 법학적 논증)<br><br>
            <strong>탐구 배경</strong><br>
            2학년에 인터넷 실명제·AI 필터링 제안을 했던 경험을 발전시켜, 악성 댓글과 사실적시 명예훼손 처벌 간 경계를 법리적으로 분석합니다. 2학년 '명예훼손죄와 정의' 강의 수강 이력과도 직결됩니다.<br><br>
            <strong>탐구 방법</strong><br>
            1. 사실적시 명예훼손죄 위헌 논쟁 핵심 쟁점 정리<br>
            2. 칸트 의무론 vs. 공리주의 관점 충돌 논증<br>
            3. 인터넷 실명제: 표현의 자유 vs. 피해자 보호 사이 가치 충돌 분석<br>
            4. 1,500자 소논문 또는 PPT 발표 형식<br><br>
            <strong>세특 활용법</strong><br>
            생활과 윤리 세특에 '칸트 의무론 + 법리적 논증의 융합 탐구'로 기재 → 법학과 철학적 사고력 동시 어필.`
    },
    action3: {
        title: '필수 전략 — 실전 모의고사 주간 루틴 확립',
        desc: `<strong>왜 필수인가?</strong><br>
            모의고사 미응시 이력은 수능 최저를 맞추지 못할 경우 교과 전형의 모든 지원폭이 닫히는 치명적 리스크입니다. 2008년생(현 고3)은 재수가 사실상 불가능한 세대이므로, 지금 당장 루틴을 구축해야 합니다.<br><br>
            <strong>실행 방법</strong><br>
            · 매주 토요일 오전 8:40 수능 실제 시간표(국·수·영·탐) 실전 응시<br>
            · 채점 후 오답노트 정리까지 1세트 완성<br>
            · 3월 학력평가 성적을 반드시 PS:LAB에 공유<br><br>
            <em>3월 학평 결과에 따라 교과 전형 지원폭을 전면 재설계합니다!</em>`
    },
    action4: {
        title: '탐구 3 — 공공기관 정보공개제도와 프라이버시권 보호 연구',
        desc: `<strong>연계 과목:</strong> 정보 교과 (개인정보보호법 · 정보공개법 연계)<br><br>
            <strong>탐구 배경</strong><br>
            1학년 동아리(정보 교과 조장) 경험과 연결하여, 「정보공개법」과 「개인정보보호법」이 충돌하는 지점을 실제 판례로 분석합니다. SNS 시대의 데이터 주권과 공익 사이의 가치 충돌을 논증합니다.<br><br>
            <strong>탐구 방법</strong><br>
            1. 정보공개법 vs. 개인정보보호법 충돌 판례 2건 분석<br>
            2. AI 시대 데이터 주권 논쟁 (EU GDPR과 한국법 비교)<br>
            3. 정책제안서 또는 소논문 형식으로 완성<br><br>
            <strong>세특 활용법</strong><br>
            정보 교과 세특 연계 → 법학 + AI 윤리 규제 융합 탐구로 확장 가능. 숙명여대·단국대 법학과 면접 소재로도 강력.`
    },
    action5: {
        title: '독서 계획 — 법학 연계 독서 2권 & 세특 직접 적용',
        desc: `<strong>왜 중요한가?</strong><br>
            독서 기록에 단순 내용 요약이 아닌, 법학적 관점에서의 비판적 시각과 탐구 확장이 담겨 있어야 입학사정관이 주목합니다.<br><br>
            <strong>추천 도서 (법학 지망 최적화)</strong><br>
            · <em>정의란 무엇인가</em> (마이클 샌델) — 법과 정의의 철학적 기반 탐구<br>
            · <em>법정의 얼굴들</em> — 회복적 정의·형사사법 탐구 (2학년 세특 이미 연계됨)<br>
            · <em>미란다 원칙</em> — 형사소송 절차와 인권 보호 이해<br>
            · <em>법은 어떻게 부자의 무기가 되는가</em> (천준범) — 법체계의 구조적 불평등 비판적 분석<br><br>
            <strong>세특 적용 방법</strong><br>
            독서록 A4 1매 작성 → 담당 선생님(정치와 법·생활과 윤리)께 제출 → 세특에 '독서를 통해 확장된 법학적 관점'으로 기재 요청. 두 과목 모두 활용 가능.`
    },
    action6: {
        title: '리더십 전략 — 동아리/조별 과제 내 주도적 역할 확보',
        desc: `<strong>왜 필요한가?</strong><br>
            공동체 역량은 입학사정관이 면접과 서류에서 반드시 확인하는 항목입니다. 1~2학년에 학급 부회장·조장 이력이 있으나, 3학년에서도 연속성 있는 리더십 기록이 추가되어야 합니다.<br><br>
            <strong>실행 전략</strong><br>
            · 동아리(언론홍보·방송부) 회장·부회장 출마 또는 핵심 역할 자원<br>
            · 조별 과제에서 기획·조율 역할 주도적 확보<br>
            · 프로젝트 기획서 1건 작성 후 담당 교과 교사 제출<br>
            · 결과물(발표 자료·보고서)을 세특에 명시적으로 기재 요청<br><br>
            <strong>면접 활용</strong><br>
            "이 활동에서 어떤 판단을 했고 결과는 무엇이었나?"에 답할 수 있는 구체적 소재로 준비. 법학과 면접의 '갈등 조율 경험' 질문에 강력 대응 가능.`
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
