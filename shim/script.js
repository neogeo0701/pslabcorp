// ═══════════════ GRADE CHART ═══════════════
const ctx = document.getElementById('gradeChart')?.getContext('2d');
if (ctx) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1-1', '1-2', '2-1', '2-2', '3-1(예측)'],
            datasets: [{
                label: '평균 등급',
                data: [1.96, 2.22, 1.78, 2.17, 1.5], 
                borderColor: '#002F6C',
                backgroundColor: 'rgba(0, 47, 108, 0.1)',
                borderWidth: 3,
                pointBackgroundColor: '#002F6C',
                pointRadius: 5,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { reverse: true, min: 1, max: 5 },
                x: { grid: { display: false } }
            },
            plugins: { legend: { display: false } }
        }
    });
}

// ═══════════════ POPUP DATA ═══════════════
const popupData = {
    // 멘토 프로필 (REAL DATA FROM PS:LAB WEBSITE)
    'mentor1': {
        title: '전동훈 멘토 (한양대 공과대학)',
        content: `
            <div class="popup-mentor-tags">
                <span class="p-tag">보성고 2007년생</span>
                <span class="p-tag">26학번 선배</span>
            </div>
            <p><strong>"공학 입시의 표준, 합격의 메커니즘."</strong></p>
            <p>정석적인 서사로 성균관대 공과대학과 한양대 공과대학을 뚫어낸 선배입니다. 지후 학생이 다룬 **'나비에-스토크스 방정식'**같은 주제는 한양대에서 가장 좋아할 수밖에 없는 정석 중의 정석입니다. "어떻게 하면 공학적 성취를 생기부 500자 안에 효과적으로 녹여낼지"에 대한 노하우를 전수하겠습니다.</p>
        `
    },
    'mentor2': {
        title: '고대현 멘토 (경희대 이과대학)',
        content: `
            <div class="popup-mentor-tags">
                <span class="p-tag">내신 2.9 → 경희대 합격</span>
                <span class="p-tag">역전의 아이콘</span>
            </div>
            <p><strong>"역전의 서사를 로직으로 증명합니다."</strong></p>
            <p>일반고 내신 2.9에서 경희대 이과대학 합격과 아주대 공과대학 합격을 이뤄낸 역전의 본보기입니다. 지후 학생의 지구과학 4→1등급 드라마를 어떻게 부각시켜야 입학사정관들의 마음을 움직일 수 있을지, 본인의 경험을 바탕으로 현실적인 팁을 드립니다.</p>
        `
    },
    'mentor3': {
        title: '배제욱 멘토 (한양대 자연과학대학)',
        content: `
            <div class="popup-mentor-tags">
                <span class="p-tag">자연과학 자문</span>
                <span class="p-tag">PS:LAB 팀원</span>
            </div>
            <p><strong>"자연과학의 본질을 꿰뚫는 날카로운 시선."</strong></p>
            <p>PS:LAB의 자연과학계열 자문위원으로서 지후 학생의 화학/물리 탐구가 학문적으로 오류가 없는지, 그리고 대학교 학부 수준에서 어떤 포인트가 더 추가되어야 '진정한 탐구형 인재'로 보일지를 날카롭게 검수했습니다.</p>
        `
    },
    // 액션 플랜 6개 (DEEP CONTENT UPGRADE)
    'action1': {
        title: '나비에-스토크스: 실제 반응기 유동 최적화',
        content: `
            <div class="logic-box">
                <h4>BACKGROUND &amp; GOAL <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 기획 의도 및 목표</span></h4>
                <p>2학년 때 탐구한 미분방정식 개념을 <strong>'실질적인 공학적 문제'</strong> 해결로 연결하여 학업 역량의 정점을 증명합니다.</p>
                
                <h4 style="margin-top:16px;">EXECUTION PROCESS <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 실전 전개 로직</span></h4>
                <ol>
                    <li><strong>변수 설정:</strong> 화학 반응기 내부의 임펠러 속도(RPM)와 유체 점성(Viscosity)을 변수로 지정합니다.</li>
                    <li><strong>수치 해석:</strong> 미적분 개념을 활용하여 속도장에 따른 혼합 효율을 수식으로 정리합니다. (파이썬 NumPy 라이브러리 활용 추천)</li>
                    <li><strong>결과 도출:</strong> 최적의 에너지를 소모하면서 최대 반응을 이끌어내는 RPM 지점을 산출합니다.</li>
                </ol>

                <h4 style="margin-top:16px;">EXPECTED OUTCOME <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 사정관의 평가 예측</span></h4>
                <p>"단순 수식 나열에서 벗어나 <strong>수리적 도구를 실제 공정 최적화에 적용하는 모델링 역량</strong>이 탁월함"과 같은 최상위권 평가를 유도할 수 있습니다.</p>

                <div class="mentor-special-tip" style="margin-top:16px; padding:12px; background:rgba(0,47,108,0.05); border-radius:8px; font-size:0.85rem; color:var(--primary);">
                    <strong>전동훈 선배의 코멘트:</strong> 한양대 공대는 이론만 아는 애보다, 그 이론을 써서 "그래서 어떻게 좋아지는데?"를 답할 줄 아는 학생을 뽑고 싶어 해요.
                </div>
            </div>
        `
    },
    'action2': {
        title: '에너지 밴드갭 시뮬레이션: 수소 추출의 경제성',
        content: `
            <div class="logic-box">
                <h4>BACKGROUND &amp; GOAL <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 기획 의도 및 목표</span></h4>
                <p>광촉매의 구조적 특성이 <strong>수소 생산 효율(Economic Viability)</strong>에 미치는 영향을 정량적으로 분석합니다.</p>
                
                <h4 style="margin-top:16px;">EXECUTION PROCESS <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 실전 전개 로직</span></h4>
                <ol>
                    <li><strong>밴드갭 분석:</strong> 이산화티타늄(TiO2) 등 주요 광촉매의 에너지 준위를 조사합니다.</li>
                    <li><strong>변수 대입:</strong> 도핑 물질에 따른 밴드갭 변화를 물리적 수치로 가상 시뮬레이션합니다.</li>
                    <li><strong>경제성 평가:</strong> 태양광 조사량 대비 수소 생산 원가를 산출하여 미래 에너지 솔루션을 제안합니다.</li>
                </ol>

                <h4 style="margin-top:16px;">EXPECTED OUTCOME <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 사정관의 평가 예측</span></h4>
                <p>"에너지 공학자로서 <strong>사회적/경제적 비용까지 고려하는 거시적 시각</strong>과 물리/화학 융합 지식을 입증"할 수 있습니다.</p>

                <div class="mentor-special-tip" style="margin-top:16px; padding:12px; background:rgba(0,47,108,0.05); border-radius:8px; font-size:0.85rem; color:var(--primary);">
                    <strong>배제욱 선배의 코멘트:</strong> 논문 몇 개 읽고 정리하는 건 쉽죠. 지후 학생만의 '가상 데이터 분석' 결과를 한 줄이라도 더 넣어야 선배들 사이에서 눈에 띕니다.
                </div>
            </div>
        `
    },
    'action3': {
        title: 'PLA 가수분해: 화학II 반응속도론 연계',
        content: `
            <div class="logic-box">
                <h4>BACKGROUND &amp; GOAL <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 기획 의도 및 목표</span></h4>
                <p>생분해성 플라스틱의 분해 속도를 <strong>화학II의 반응속도론(Rate Law)</strong>으로 완벽하게 규명합니다.</p>
                
                <h4 style="margin-top:16px;">EXECUTION PROCESS <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 실전 전개 로직</span></h4>
                <ol>
                    <li><strong>실험 설계:</strong> 온도를 10도씩 높여가며 PLA 소재의 질량 변화(분해 속도)를 측정하는 실험을 구상합니다.</li>
                    <li><strong>수식 적용:</strong> 아레니우스 식(k = Ae^-Ea/RT)을 활용하여 활성화 에너지(Ea)를 정량적으로 도출합니다.</li>
                    <li><strong>비교 분석:</strong> 일반 플라스틱 대비 생분해성 소재의 환경적 우위를 데이터로 증명합니다.</li>
                </ol>

                <h4 style="margin-top:16px;">EXPECTED OUTCOME <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 사정관의 평가 예측</span></h4>
                <p>"화학적 평형과 반응 속도 개념을 <strong>실제 환경 문제 해결을 위한 정밀 실험</strong>으로 구현하는 집요함"이 강조됩니다.</p>

                <div class="mentor-special-tip" style="margin-top:16px; padding:12px; background:rgba(0,47,108,0.05); border-radius:8px; font-size:0.85rem; color:var(--primary);">
                    <strong>고대현 선배의 코멘트:</strong> 실험이 실패해도 괜찮아요. "왜 오차가 났는지"를 아레니우스 식에 근거해 설명하는 것 자체가 엄청난 가점 요인입니다.
                </div>
            </div>
        `
    },
    'action4': {
        title: '대기 모델링: NO2 광분해 예측 알고리즘',
        content: `
            <div class="logic-box">
                <h4>BACKGROUND &amp; GOAL <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 기획 의도 및 목표</span></h4>
                <p>지구과학II의 대기 파트를 화학 평형 및 수리 통계와 엮어 <strong>대기 질 변화 예측 모델</strong>을 설계합니다.</p>
                
                <h4 style="margin-top:16px;">EXECUTION PROCESS <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 실전 전개 로직</span></h4>
                <ol>
                    <li><strong>데이터 수집:</strong> 공공데이터포털에서 지역별 초미세먼지(PM2.5)와 NO2 농도 데이터를 수집합니다.</li>
                    <li><strong>상관관계 도출:</strong> 기온과 일사량이 대기 중 화학 반응 속도에 미치는 영향을 수식화합니다.</li>
                    <li><strong>알고리즘 제안:</strong> 특정 기상 조건에서 오존 농도가 위험 수준에 이를 시점을 예측하는 로직을 제안합니다.</li>
                </ol>

                <h4 style="margin-top:16px;">EXPECTED OUTCOME <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 사정관의 평가 예측</span></h4>
                <p>"지구과학적 현상을 <strong>수학적 알고리즘으로 모델링</strong>하여 해결책을 제시하는 데이터 사이언티스트적 면모"를 부각합니다.</p>
            </div>
        `
    },
    'action5': {
        title: '곤충의 화학적 방어 메커니즘 영어 리서치',
        content: `
            <div class="logic-box">
                <h4>BACKGROUND &amp; GOAL <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 기획 의도 및 목표</span></h4>
                <p>영미권 최신 논문을 활용하여 <strong>생체 모방 소재(Biomimetics)</strong> 설계의 영감을 얻고 정보 취합 능력을 과시합니다.</p>
                
                <h4 style="margin-top:16px;">EXECUTION PROCESS <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 실전 전개 로직</span></h4>
                <ol>
                    <li><strong>논문 탐색:</strong> Google Scholar에서 'Insect chemical defense and material science' 키워드로 초록(Abstract)을 검색합니다.</li>
                    <li><strong>핵심 요약:</strong> 곤충 외골격의 키틴 구조나 방어용 화학 물질의 항산화 작용을 정리합니다.</li>
                    <li><strong>공학적 적용:</strong> 해당 메커니즘을 극한 환경용 도료나 센서 등에 어떻게 적용할지 영어 에세이로 작성합니다.</li>
                </ol>

                <h4 style="margin-top:16px;">EXPECTED OUTCOME <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 사정관의 평가 예측</span></h4>
                <p>"원서 정보를 활용해 <strong>전공의 외연을 넓히는 글로벌 탐구 역량</strong>"과 영어 성적 이상의 실무 언어 능력을 입증합니다. </p>
            </div>
        `
    },
    'action6': {
        title: '고급물리학: 비선형 공기 저항 보정 모델',
        content: `
            <div class="logic-box">
                <h4>BACKGROUND &amp; GOAL <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 기획 의도 및 목표</span></h4>
                <p>고급 물리학 수업에서 배운 내용을 기반으로 <strong>이상적 수식과 실제 데이터의 괴리(오차)</strong>를 수학적으로 해결합니다.</p>
                
                <h4 style="margin-top:16px;">EXECUTION PROCESS <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 실전 전개 로직</span></h4>
                <ol>
                    <li><strong>실험 수행:</strong> 스마트폰 가속도 센서를 활용해 낙체 운동의 데이터를 수집합니다.</li>
                    <li><strong>오차 보정:</strong> 선형 공기 저항이 아닌 v^2에 비례하는 비선형 공기 저항 모델을 수식에 대입하여 피팅(Fitting)합니다.</li>
                    <li><strong>보고서 작성:</strong> 왜 보정이 필요한지, 어떤 수학적 기법을 썼는지 상술합니다.</li>
                </ol>

                <h4 style="margin-top:16px;">EXPECTED OUTCOME <span style="font-size:0.8rem; font-weight:normal; color:var(--text-sub); margin-left:6px;">| 사정관의 평가 예측</span></h4>
                <p>"고교 수준을 넘어선 <strong>물리적 실증과 수치적 보정 역량</strong>"을 보여주며 최상위권 이공계 대학에 강력한 인상을 남깁니다.</p>

                <div class="mentor-special-tip" style="margin-top:16px; padding:12px; background:rgba(0,47,108,0.05); border-radius:8px; font-size:0.85rem; color:var(--primary);">
                    <strong>전동훈 선배의 코멘트:</strong> "고급 물리학을 들었다"가 끝이 되면 안 됩니다. "어려운 과목에서 이런 문제까지 해결해봤다"가 되어야 합격증이 나옵니다.
                </div>
            </div>
        `
    }
};

// ═══════════════ MODAL LOGIC ═══════════════
function openPopup(id) {
    const modal = document.getElementById('popupModal');
    const body = document.getElementById('modalBody');
    const data = popupData[id];

    if (!data) return;

    body.innerHTML = `
        <h2 class="popup-title">${data.title}</h2>
        <div class="popup-desc">${data.content}</div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePopup(e, force = false) {
    const modal = document.getElementById('popupModal');
    if (force || e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}
