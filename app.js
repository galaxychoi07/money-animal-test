
const animalSvgs = {
  ant: `<svg class="animal-icon" viewBox="0 0 100 100" aria-label="개미"><circle cx="30" cy="55" r="13" fill="#f47c20"/><circle cx="50" cy="55" r="16" fill="#e96918"/><circle cx="70" cy="55" r="13" fill="#d85a13"/><circle cx="77" cy="48" r="3" fill="#231f20"/><path d="M24 45 12 32M30 43 26 25M39 68 28 82M53 72 50 88M65 68 78 82M72 43 85 30" stroke="#231f20" stroke-width="5" stroke-linecap="round" fill="none"/></svg>`,
  squirrel: `<svg class="animal-icon" viewBox="0 0 100 100" aria-label="다람쥐"><path d="M67 30c19-12 32 9 19 25-7 9-19 9-27 2" fill="#b86b36" stroke="#2b2018" stroke-width="4"/><ellipse cx="49" cy="59" rx="23" ry="25" fill="#c77a3d" stroke="#2b2018" stroke-width="4"/><circle cx="42" cy="38" r="15" fill="#d58a4b" stroke="#2b2018" stroke-width="4"/><path d="M34 26l-6-9M46 25l5-10" stroke="#2b2018" stroke-width="5" stroke-linecap="round"/><circle cx="47" cy="37" r="3"/><path d="M35 43q8 7 18 0" stroke="#2b2018" stroke-width="3" fill="none"/><ellipse cx="45" cy="66" rx="7" ry="12" fill="#f4d0a0"/></svg>`,
  owl: `<svg class="animal-icon" viewBox="0 0 100 100" aria-label="올빼미"><path d="M25 26q25-20 50 0v41q0 20-25 20T25 67z" fill="#b76e2b" stroke="#201915" stroke-width="4"/><circle cx="39" cy="45" r="12" fill="#fff1c5"/><circle cx="61" cy="45" r="12" fill="#fff1c5"/><circle cx="39" cy="45" r="5"/><circle cx="61" cy="45" r="5"/><path d="M50 52l-7 9h14z" fill="#f6a23a"/><path d="M26 28 17 16M74 28 83 16" stroke="#201915" stroke-width="5" stroke-linecap="round"/></svg>`,
  fox: `<svg class="animal-icon" viewBox="0 0 100 100" aria-label="여우"><path d="M50 22 14 40l19 40h34l19-40z" fill="#ff8a2a" stroke="#201915" stroke-width="4"/><path d="M50 22 38 53h24z" fill="#fff1dc"/><path d="M14 40 9 17l25 16M86 40l5-23-25 16" fill="#ff8a2a" stroke="#201915" stroke-width="4"/><circle cx="39" cy="48" r="4"/><circle cx="61" cy="48" r="4"/><path d="M50 55l-6 9h12z" fill="#201915"/><path d="M38 68q12 9 24 0" stroke="#201915" stroke-width="3" fill="none"/></svg>`,
  turtle: `<svg class="animal-icon" viewBox="0 0 100 100" aria-label="거북이"><ellipse cx="49" cy="59" rx="29" ry="22" fill="#79b84a" stroke="#201915" stroke-width="4"/><path d="M28 54h42M36 42l-10 28M50 38v43M64 42l10 28" stroke="#427c33" stroke-width="4"/><circle cx="79" cy="56" r="12" fill="#8bd65d" stroke="#201915" stroke-width="4"/><circle cx="83" cy="53" r="3"/><path d="M25 76l-8 9M70 76l8 9M25 42l-8-9M68 42l8-9" stroke="#201915" stroke-width="5" stroke-linecap="round"/></svg>`,
  beaver: `<svg class="animal-icon" viewBox="0 0 100 100" aria-label="비버"><ellipse cx="50" cy="57" rx="25" ry="27" fill="#a7653b" stroke="#201915" stroke-width="4"/><circle cx="38" cy="33" r="10" fill="#b97447" stroke="#201915" stroke-width="4"/><circle cx="62" cy="33" r="10" fill="#b97447" stroke="#201915" stroke-width="4"/><circle cx="42" cy="51" r="3"/><circle cx="58" cy="51" r="3"/><path d="M50 56l-5 5h10z" fill="#201915"/><rect x="43" y="64" width="14" height="12" rx="2" fill="#fff8e8" stroke="#201915" stroke-width="3"/><path d="M73 66c16 4 18 20 3 22-9 1-15-6-18-14" fill="#7b4a2d" stroke="#201915" stroke-width="4"/></svg>`,
  tiger: `<svg class="animal-icon" viewBox="0 0 100 100" aria-label="호랑이"><circle cx="50" cy="55" r="31" fill="#ff8d28" stroke="#201915" stroke-width="4"/><path d="M23 34 12 16l22 9M77 34l11-18-22 9" fill="#ff8d28" stroke="#201915" stroke-width="4"/><path d="M34 31l9 16M66 31l-9 16M50 24v16M27 53l14 3M73 53l-14 3" stroke="#201915" stroke-width="4" stroke-linecap="round"/><circle cx="39" cy="56" r="4"/><circle cx="61" cy="56" r="4"/><path d="M50 62l-7 8h14z" fill="#fff1dc"/><path d="M41 75q9 6 18 0" stroke="#201915" stroke-width="3" fill="none"/></svg>`,
  monkey: `<svg class="animal-icon" viewBox="0 0 100 100" aria-label="원숭이"><circle cx="50" cy="55" r="26" fill="#8b5a3b" stroke="#201915" stroke-width="4"/><circle cx="23" cy="55" r="11" fill="#c08a62" stroke="#201915" stroke-width="4"/><circle cx="77" cy="55" r="11" fill="#c08a62" stroke="#201915" stroke-width="4"/><ellipse cx="50" cy="62" rx="18" ry="15" fill="#e8b487"/><circle cx="41" cy="50" r="3"/><circle cx="59" cy="50" r="3"/><path d="M45 64q5 5 10 0" stroke="#201915" stroke-width="3" fill="none"/><path d="M72 70c13 0 16-14 8-18" stroke="#8b5a3b" stroke-width="7" stroke-linecap="round" fill="none"/></svg>`
};
function animalIcon(key) { return animalSvgs[key] || animalSvgs.squirrel; }

const questions = [
  { id: 1, axis: 'M', axisLabel: '모으기 vs 쓰기', text: '보너스 100만원이 갑자기 들어왔다!', options: [{ label: '일단 70%는 저축부터', value: 'S' }, { label: '일단 장바구니부터 연다', value: 'P' }] },
  { id: 2, axis: 'M', axisLabel: '모으기 vs 쓰기', text: '월급날 가장 먼저 하는 일은?', options: [{ label: '자동이체와 고정비부터 확인한다', value: 'S' }, { label: '참았던 결제를 드디어 한다', value: 'P' }] },
  { id: 3, axis: 'M', axisLabel: '모으기 vs 쓰기', text: '“이건 나를 위한 투자야”라는 말은?', options: [{ label: '소비 합리화일 가능성이 높다', value: 'S' }, { label: '맞다. 내 행복도 자산이다', value: 'P' }] },
  { id: 4, axis: 'M', axisLabel: '모으기 vs 쓰기', text: '통장 잔고를 확인하는 빈도는?', options: [{ label: '거의 매일 확인한다', value: 'S' }, { label: '무서워서 잘 안 본다', value: 'P' }] },
  { id: 5, axis: 'R', axisLabel: '안정 vs 모험', text: '여윳돈 500만원이 생겼다!', options: [{ label: '예금, 적금, 안전자산부터 본다', value: 'A' }, { label: '주식, 코인, 성장주도 궁금하다', value: 'V' }] },
  { id: 6, axis: 'R', axisLabel: '안정 vs 모험', text: '“원금 보장”이라는 단어를 보면?', options: [{ label: '안심된다', value: 'A' }, { label: '수익률이 낮을 것 같다', value: 'V' }] },
  { id: 7, axis: 'R', axisLabel: '안정 vs 모험', text: '주변에서 대박 종목 얘기를 들으면?', options: [{ label: '일단 의심하고 찾아본다', value: 'A' }, { label: '심장이 뛰고 검색부터 한다', value: 'V' }] },
  { id: 8, axis: 'R', axisLabel: '안정 vs 모험', text: '내 돈이 하루 만에 -10%가 됐다면?', options: [{ label: '잠이 안 오고 불안하다', value: 'A' }, { label: '원래 그런 거지. 존버한다', value: 'V' }] },
  { id: 9, axis: 'P', axisLabel: '계획 vs 즉흥', text: '이번 달 지출 관리는?', options: [{ label: '예산 안에서 움직이려고 한다', value: 'J' }, { label: '카드값 문자로 사후 확인한다', value: 'F' }] },
  { id: 10, axis: 'P', axisLabel: '계획 vs 즉흥', text: '가계부 또는 가계부 앱은?', options: [{ label: '쓰고 있거나 써본 적 있다', value: 'J' }, { label: '3일을 못 넘긴다', value: 'F' }] },
  { id: 11, axis: 'P', axisLabel: '계획 vs 즉흥', text: '큰 지출 전에 나는?', options: [{ label: '최저가와 후기를 비교한다', value: 'J' }, { label: '첫눈에 꽂히면 바로 결제한다', value: 'F' }] },
  { id: 12, axis: 'P', axisLabel: '계획 vs 즉흥', text: '새벽 2시, 장바구니의 유혹이 왔다.', options: [{ label: '아침에 다시 보고 결정한다', value: 'J' }, { label: '이미 결제 완료', value: 'F' }] }
];

const results = {
  SAJ: { icon:'ant', animal:'개미', title:'성실 저축왕 개미', summary:'티끌 모아 태산을 실제로 해내는 사람', description:'당신은 작은 돈도 그냥 흘려보내지 않습니다. 자동이체, 비상금, 예산표 같은 단어가 낯설지 않고 돈이 모이는 과정에서 안정감을 느껴요. 다만 너무 아끼느라 삶의 즐거움까지 미루지는 마세요.', match:'비버형 — 당신의 저축을 자산 구조로 바꿔줌', mismatch:'원숭이형 — 모은 돈을 축제 예산으로 볼 수 있음', prescription:'비상금 계좌는 유지하되, 매달 나를 위한 소액 보상 예산을 따로 정해보세요.', color:'#f4a261', stats:{절약력:5, 투자력:2, 계획력:5, 소비욕:1} },
  SAF: { icon:'squirrel', animal:'다람쥐', title:'도토리 수집가 다람쥐', summary:'모으긴 하는데 어디 뒀는지 가끔 모름', description:'돈을 모으는 감각은 뛰어나지만 계좌, 포인트, 쿠폰, 비상금이 여기저기 흩어져 있을 수 있어요. 당신의 진짜 능력은 이미 모은 도토리를 한곳에 정리할 때 폭발합니다.', match:'거북이형 — 흩어진 도토리를 장기 계획으로 묶어줌', mismatch:'원숭이형 — 도토리를 간식처럼 먹어치움', prescription:'흩어진 계좌와 자동결제 목록을 한 번 정리하세요. 숨은 도토리가 나올 가능성이 큽니다.', color:'#ffb86b', stats:{절약력:4, 투자력:2, 계획력:2, 소비욕:2} },
  SVJ: { icon:'owl', animal:'올빼미', title:'정보 사냥꾼 올빼미', summary:'아끼다가 기회가 오면 조용히 움직이는 타입', description:'평소에는 신중하지만 좋은 기회라고 판단되면 빠르게 집중합니다. 뉴스, 리포트, 후기, 숫자를 확인하고 움직이는 편이라 충동보다는 근거 있는 선택을 선호해요.', match:'개미형 — 안정적인 기반을 함께 만들어줌', mismatch:'원숭이형 — 즉흥성이 당신의 분석을 흔듦', prescription:'투자나 큰 소비 전, 나만의 체크리스트 5개를 만들어 기준을 고정하세요.', color:'#8ecae6', stats:{절약력:4, 투자력:4, 계획력:5, 소비욕:2} },
  SVF: { icon:'fox', animal:'여우', title:'촉의 승부사 여우', summary:'감으로 사고 감으로 파는 미스터리 흑자형', description:'눈치와 촉이 빠릅니다. 남들이 아직 망설일 때 분위기를 읽고 기회를 잡는 편이에요. 다만 촉이 너무 강해지면 기록 없이 감정으로만 판단할 수 있으니 근거를 남기는 습관이 필요합니다.', match:'올빼미형 — 촉에 정보를 더해줌', mismatch:'개미형 — 당신의 속도를 이해하기 어려워함', prescription:'돈을 움직일 때마다 “왜 이 선택을 했는지” 한 줄만 기록해보세요.', color:'#fb8500', stats:{절약력:3, 투자력:5, 계획력:2, 소비욕:3} },
  PAJ: { icon:'turtle', animal:'거북이', title:'장기 설계자 거북이', summary:'쓸 땐 쓰지만 다 계획이 있는 안정 큰손', description:'당신은 돈을 무조건 아끼기보다 삶의 질을 높이는 데 쓰는 법을 압니다. 대신 계획 없이 쓰는 걸 싫어하고, 큰 지출도 장기 그림 안에서 움직이려 해요.', match:'다람쥐형 — 모으는 힘을 더해줌', mismatch:'여우형 — 변수가 많아 마음이 피곤함', prescription:'큰 소비를 할 때 “3년 뒤에도 만족할까?”라는 질문을 붙여보세요.', color:'#90be6d', stats:{절약력:3, 투자력:2, 계획력:5, 소비욕:4} },
  PAF: { icon:'beaver', animal:'비버', title:'행복 건설가 비버', summary:'돈은 행복하려고 버는 거라는 걸 아는 타입', description:'당신은 소비를 죄책감으로만 보지 않습니다. 필요한 곳에는 기분 좋게 쓰고, 삶의 만족도를 높이는 선택을 잘해요. 다만 작은 소비들이 쌓여 큰 댐이 무너질 수 있으니 경계가 필요합니다.', match:'거북이형 — 행복 소비에 장기 균형을 잡아줌', mismatch:'호랑이형 — 큰 베팅이 당신을 긴장시킴', prescription:'행복 소비 예산을 정하고, 그 안에서는 마음껏 쓰세요. 대신 초과하면 다음 달로 넘깁니다.', color:'#b08968', stats:{절약력:2, 투자력:2, 계획력:2, 소비욕:4} },
  PVJ: { icon:'tiger', animal:'호랑이', title:'계획된 베팅러 호랑이', summary:'분석이 끝나면 크게 움직이는 승부형', description:'당신은 무모한 사람이 아닙니다. 다만 확신이 생기면 남들보다 과감하게 실행합니다. 목표 수익, 손절 기준, 기간을 정해두면 강력한 추진력이 자산이 됩니다.', match:'올빼미형 — 베팅 전 정보력을 보강해줌', mismatch:'비버형 — 안정 욕구와 충돌할 수 있음', prescription:'큰 결정을 하기 전 손실 한도와 종료 조건을 먼저 숫자로 정하세요.', color:'#e76f51', stats:{절약력:2, 투자력:5, 계획력:5, 소비욕:4} },
  PVF: { icon:'monkey', animal:'원숭이', title:'YOLO 재주꾼 원숭이', summary:'통장은 스쳐가지만 인생 에피소드는 남는 타입', description:'당신은 돈보다 경험과 재미에 강하게 반응합니다. 덕분에 삶의 에너지가 높고 주변에 이야깃거리가 많아요. 하지만 다음 달의 내가 너무 자주 등장하면 지갑이 지칠 수 있습니다.', match:'개미형 — 새는 돈을 막아주는 현실 친구', mismatch:'다람쥐형 — 당신의 속도에 도토리가 사라짐', prescription:'결제 전 10분 멈춤 규칙을 써보세요. 그래도 갖고 싶으면 진짜 원하는 겁니다.', color:'#f6bd60', stats:{절약력:1, 투자력:4, 계획력:1, 소비욕:5} }
};

let answers = [];
let step = 0;
const app = document.getElementById('app');
const $ = (id) => document.getElementById(id);
function cloneTemplate(id) { return document.getElementById(id).content.cloneNode(true); }
function renderHome() {
  app.innerHTML = ''; app.appendChild(cloneTemplate('home-template'));
  document.querySelectorAll('[data-animal]').forEach(el => { el.innerHTML = animalIcon(el.dataset.animal); });
  $('startBtn').onclick = () => { answers = []; step = 0; renderTest(); };
}
function renderTest() {
  app.innerHTML = ''; app.appendChild(cloneTemplate('test-template'));
  const q = questions[step];
  $('stepText').textContent = `${step + 1} / ${questions.length}`;
  $('progressBar').style.width = `${((step) / questions.length) * 100}%`;
  $('axisText').textContent = q.axisLabel;
  $('questionText').textContent = q.text;
  $('backBtn').style.visibility = step === 0 ? 'hidden' : 'visible';
  $('backBtn').onclick = () => { if (step > 0) { step--; answers.pop(); renderTest(); } };
  const options = $('options');
  q.options.forEach((option) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option.label;
    btn.onclick = () => {
      answers[step] = option.value;
      step++;
      if (step >= questions.length) renderLoading(); else renderTest();
    };
    options.appendChild(btn);
  });
}
function renderLoading() {
  app.innerHTML = ''; app.appendChild(cloneTemplate('loading-template'));
  setTimeout(() => renderResult(calcResult()), 1200);
}
function calcResult() {
  const count = { S:0, P:0, A:0, V:0, J:0, F:0 };
  answers.forEach(v => count[v]++);
  return `${count.S >= count.P ? 'S' : 'P'}${count.A >= count.V ? 'A' : 'V'}${count.J >= count.F ? 'J' : 'F'}`;
}
function stars(score) { return '★'.repeat(score) + '☆'.repeat(5-score); }
function renderResult(code) {
  const result = results[code] || results.SAF;
  history.replaceState(null, '', `#result-${code.toLowerCase()}`);
  app.innerHTML = ''; app.appendChild(cloneTemplate('result-template'));
  document.documentElement.style.setProperty('--brand', result.color);
  $('resultEmoji').innerHTML = animalIcon(result.icon);
  $('resultTitle').textContent = result.title;
  $('resultSummary').textContent = result.summary;
  $('resultDescription').textContent = result.description;
  $('matchText').textContent = result.match;
  $('mismatchText').textContent = result.mismatch;
  $('prescriptionText').textContent = result.prescription;
  const statGrid = $('statGrid');
  Object.entries(result.stats).forEach(([label, score]) => {
    const div = document.createElement('div');
    div.className = 'stat';
    div.innerHTML = `<span>${label}</span><strong>${stars(score)}</strong>`;
    statGrid.appendChild(div);
  });
  $('copyBtn').onclick = copyResultLink;
  $('retryBtn').onclick = () => { history.replaceState(null, '', location.pathname); document.documentElement.style.setProperty('--brand', '#ff9f43'); renderHome(); };
  $('saveBtn').onclick = saveResultImage;
}
async function copyResultLink() {
  const text = `${location.href}\n나는 경제 동물 테스트에서 결과가 나왔어. 너는 무슨 동물이야?`;
  try { await navigator.clipboard.writeText(text); showToast('결과 링크를 복사했어요'); }
  catch { showToast('복사가 어려워요. 주소창 링크를 복사해주세요'); }
}
async function saveResultImage() {
  const card = $('resultCard');
  if (!window.html2canvas) { showToast('이미지 저장 라이브러리를 불러오지 못했어요'); return; }
  const canvas = await html2canvas(card, { backgroundColor: null, scale: 2 });
  const link = document.createElement('a');
  link.download = 'money-animal-result.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast('결과 이미지를 저장했어요');
}
function showToast(message) {
  const old = document.querySelector('.toast'); if (old) old.remove();
  const toast = document.createElement('div'); toast.className = 'toast'; toast.textContent = message;
  document.body.appendChild(toast); setTimeout(() => toast.remove(), 1800);
}
renderHome();
