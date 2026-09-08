const projects = [
  {title:'반품 사유',detail:'returns',device:'macmini',deviceLabel:'MAC MINI · 장편소설',desc:'20장 구성 장편소설',progress:55,status:'active',facts:[['집필','11 / 20장'],['PDF','1부 39면']],updated:'오늘 09:15',git:'백업 필요',dirty:true},
  {title:'아무도 그런 적 없다고 했다',detail:'classroom',device:'macmini',deviceLabel:'MAC MINI · 창작동화',desc:'연작 동화 POD 제작',progress:90,status:'active',facts:[['내지','POD PDF'],['삽화','99개']],updated:'어제 23:28',git:'미커밋 79',dirty:true},
  {title:'동화 오피스',device:'macmini',deviceLabel:'MAC MINI · 출판 운영',desc:'완성작 웹 서재와 주간보고',progress:78,status:'active',facts:[['완성작','13편'],['Git','정상']],updated:'09.02',git:'깨끗함'},
  {title:'AI 출판 크루',device:'macmini',deviceLabel:'MAC MINI · 자동화',desc:'집필 에이전트 운영 시스템',progress:72,status:'active',facts:[['역할','8명'],['점검','오늘']],updated:'오늘 07:03',git:'깨끗함'},
  {title:'수원·용인·화성 빵집 지도',device:'macbook',deviceLabel:'MACBOOK · POD 테스트',desc:'A5 지도책 파이프라인',progress:62,status:'review',facts:[['수록','243곳'],['산출물','PDF+EPUB']],updated:'08.23',git:'제본 결정 필요',dirty:true},
  {title:'Book Notes',device:'macbook',deviceLabel:'MACBOOK · 독서 메모',desc:'OCR 기반 독서 기록 웹앱',progress:68,status:'review',facts:[['이미지','14개'],['빌드','완료']],updated:'03.15',git:'README 병합 흔적',dirty:true},
  {title:'Family Book Log',device:'macbook',deviceLabel:'MACBOOK · 독서 기록',desc:'가족 독서 기록 웹앱',progress:48,status:'review',facts:[['빌드','완료'],['변경','5건']],updated:'01.18',git:'미커밋 5',dirty:true},
  {title:'How to Steal a Dog',device:'macbook',deviceLabel:'MACBOOK · 영어 독서',desc:'문장별 영어 학습 리더',progress:85,status:'archive',facts:[['배포','완료'],['이미지','17개']],updated:'01.29',git:'미추적 4',dirty:true},
  {title:'The Martian Reader',device:'macbook',deviceLabel:'MACBOOK · 영어 독서',desc:'PDF 기반 영어 학습 리더',progress:82,status:'archive',facts:[['PDF','원본 1'],['빌드','완료']],updated:'01.29',git:'깨끗함'}
];

const grid = document.querySelector('#projectGrid');
const chapters = document.querySelector('#novelChapters');
for(let i=1;i<=20;i++){const el=document.createElement('i');el.className=`chapter ${i<=9?'done':i<=11?'review':''}`;el.title=`${i}장 ${i<=9?'완료':i<=11?'고문 검토 대기':'미착수'}`;chapters.append(el)}

projects.forEach((p)=>{
  const card=document.createElement('article');card.className=`project ${p.detail?'clickable':''}`;card.dataset.device=p.device;card.dataset.status=p.status;if(p.detail){card.dataset.detail=p.detail;card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label',`${p.title} 작품 상세 보기`)}
  card.innerHTML=`<div class="project-head"><div><span class="device-label">${p.deviceLabel}</span><h3>${p.title}</h3><p class="desc">${p.desc}</p></div><span class="percent">${p.progress}%</span></div><div class="bar"><i style="width:${p.progress}%"></i></div><div class="facts">${p.facts.map(f=>`<span>${f[0]}<b>${f[1]}</b></span>`).join('')}</div><div class="project-foot"><span>최근 ${p.updated}</span><span class="${p.dirty?'dirty':''}">${p.git}</span></div>`;
  grid.append(card);
});

let selectedDevice='all',selectedStatus='all';
function applyFilters(){let visible=0;document.querySelectorAll('.project').forEach(card=>{const show=(selectedDevice==='all'||card.dataset.device===selectedDevice)&&(selectedStatus==='all'||card.dataset.status===selectedStatus);card.classList.toggle('hidden',!show);if(show)visible++});document.querySelector('#metricProjects').textContent=visible}
document.querySelectorAll('[data-device]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-device]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');selectedDevice=btn.dataset.device;applyFilters()}));
document.querySelectorAll('[data-status]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-status]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');selectedStatus=btn.dataset.status;applyFilters()}));

const workDetails={
  returns:{theme:'returns',kicker:'장편소설 · 20장 구성 · 현실 기반 문학',title:'반품 사유',intro:'반품 검수원이 죽은 고객의 반복 반품 사유란에서 아들에게 보내는 편지를 발견하며 시작되는 이야기.',meta:['주인공 문지혜 · 41세','배경 이천 물류센터','현재 11 / 20장','1부 PDF · 39면'],progress:55,progressText:'1~9장 완료 · 10~11장 고문 검토 대기',sections:[
    ['작품 정보','<p>물건의 상태는 판정할 수 있지만 사람의 진심은 판정할 수 없는 반품 검수원 문지혜가, 시스템의 작은 입력란을 통해 타인의 미완성 관계에 들어가는 장편소설입니다. 1부 ‘발견’, 2부 ‘답장’, 3부 ‘발신’의 3부 구조입니다. 주요 인물은 지혜, 고인 박정민, 아들 박준서, 편지를 옮기는 오말순입니다.</p>'],
    ['주요 줄거리','<p>매주 같은 회색 스웨터가 반품되고 사유란에는 편지 한 줄이 이어집니다. 주문자는 이미 죽은 박정민. 간병인 말순이 남은 52줄을 정기배송 반품으로 옮기고 있었습니다. 지혜는 규정을 어기며 기록을 읽고, 답장을 보내고, 수신자인 준서를 찾아갑니다. 편지가 이어질수록 말순의 명의도용과 지혜의 개인정보 오남용이 회사 감사에 걸리고, 지혜는 결국 자신의 이름으로 마지막 문장들을 발신하게 됩니다.</p>'],
    ['핵심 갈등','<div class="conflict-grid"><div class="conflict"><b>지혜 ↔ 회사</b><span>조회 로그와 규정, 감사팀의 압박</span></div><div class="conflict"><b>지혜 ↔ 준서</b><span>전달하려는 사람과 거부할 권리</span></div><div class="conflict"><b>지혜 ↔ 말순</b><span>죽은 사람의 원문을 고쳐도 되는가</span></div><div class="conflict"><b>지혜 ↔ 자기 자신</b><span>읽는 사람에서 쓰는 사람으로</span></div></div>'],
    ['반전 · 스포일러','<ul class="twist"><li>7년 전 준서가 선물 반품 사유에 쓴 “필요 없습니다”가 정민이 같은 통로로 편지를 쓰기 시작한 이유입니다.</li><li>편지의 ‘너’는 아들만이 아니라 죽은 아내, 그리고 언젠가 읽을 이름 모를 검수원을 향합니다.</li><li>말순은 잔인한 세 문장을 순화했고, 지혜가 읽은 편지는 이미 편집본이었습니다.</li><li>준서는 지혜를 신고하지만, 그 민원에 낸 가족 증빙이 역설적으로 말순의 명의도용 혐의를 끝냅니다.</li><li>마지막 해지 사유는 “이제 필요 없어졌습니다. 감사합니다.” 읽었는지는 끝내 확정되지 않습니다.</li></ul>'],
    ['작품의 질문','<p class="quote-line">“물건은 검수할 수 있다. 그렇다면 문장의 진심도 검수할 수 있는가?”</p>']
  ]},
  classroom:{theme:'classroom',kicker:'창작동화 연작 · 일곱 아이 · 같은 여덟 달',title:'아무도 그런 적 없다고 했다',intro:'같은 교실의 같은 사건을 일곱 개의 자리와 기억으로 다시 바라보는 다중시점 연작동화.',meta:['5학년 교실','본편 7편','교보 POD 내지 완료','표지 확정 단계'],progress:90,progressText:'원고 · 검토 · 삽화 · 내지 완료',sections:[
    ['작품 정보','<p>전학생 하민을 둘러싼 한 학급의 여덟 달을 준서, 하민, 엄마 마리셀, 다훈, 지수, 재민, 다음 해 전학생 채운의 자리에서 다시 봅니다. 한 편마다 독립적으로 끝나지만, 뒤의 이야기를 읽을수록 앞에서 믿었던 사실이 달라지는 7편 연작입니다.</p>'],
    ['주요 줄거리','<p>세 번째 전학을 온 하민은 “엄마가 필리핀 사람”이라는 한마디 뒤 혼자 남습니다. 생일에 가져온 투론 32개는 아무도 먹지 않고, 하민의 옆자리에는 가방만 놓입니다. 준서가 먼저 그 자리에 앉고 다른 아이들이 뒤따르며 교실은 조금 바뀝니다. 그러나 각 편은 그 변화 뒤에 있던 망설임, 방관, 엄마와 담임이 보지 못한 순간을 다른 시점으로 드러냅니다. 다음 학년에는 이름을 ‘채윤’으로 잘못 불린 새 전학생 채운이 등장하며 이야기는 다시 처음으로 돌아갑니다.</p>'],
    ['핵심 갈등','<div class="conflict-grid"><div class="conflict"><b>하민 ↔ 교실의 낙인</b><span>악의보다 소문과 침묵이 만든 빈자리</span></div><div class="conflict"><b>아이 ↔ 자기 방관</b><span>알면서도 먼저 움직이지 못한 마음</span></div><div class="conflict"><b>아이 ↔ 어른의 시야</b><span>좋은 담임과 엄마도 모든 일을 보지 못함</span></div><div class="conflict"><b>기억 ↔ 사실</b><span>같은 사건을 서로 다르게 기억하는 화자들</span></div></div>'],
    ['반전 · 스포일러','<ul class="twist"><li>준서가 밖에서 본 “아이들이 함께 쓴 활동지”는 실제로 하민 혼자 완성했고, 다훈을 포함한 셋은 방관했습니다.</li><li>다훈은 단순한 악역이 아니며, 재민도 안전해진 뒤에야 다가갑니다. 변화는 선한 한 사람의 승리로 정리되지 않습니다.</li><li>담임은 유능하고 성실하지만 하민의 옆자리가 언제 채워졌는지조차 모릅니다. 어른의 선의와 시야의 한계가 함께 놓입니다.</li><li>마지막 전학생 채운은 한 달 넘게 ‘채윤’으로 불리면서도 대답합니다. 하민의 이야기가 끝났어도 구조는 다음 아이에게 반복됩니다.</li><li>누가 채운의 연필을 주워 주었는지는 화자마다 다르며, 작품은 하나의 정답을 확정하지 않습니다.</li></ul>'],
    ['작품의 질문','<p class="quote-line">“아무도 나쁘지 않았는데, 왜 한 아이의 자리는 비어 있었을까?”</p>']
  ]}
};

const modal=document.querySelector('#workModal'),modalContent=document.querySelector('#modalContent');let lastTrigger=null;
function openWorkDetail(id,trigger){const work=workDetails[id];if(!work)return;lastTrigger=trigger;modalContent.innerHTML=`<header class="modal-hero ${work.theme}"><span class="modal-kicker">${work.kicker}</span><h2 id="modalTitle">『${work.title}』</h2><p>${work.intro}</p><div class="modal-meta">${work.meta.map(v=>`<span>${v}</span>`).join('')}</div><div class="modal-progress"><b>${work.progress}%</b><div class="bar"><i style="width:${work.progress}%"></i></div><small>${work.progressText}</small></div></header><div class="modal-body"><div class="spoiler"><b>SPOILER</b><span>아래에는 작품의 주요 반전과 결말 정보가 포함되어 있습니다.</span></div>${work.sections.map(s=>`<section class="story-section"><h3>${s[0]}</h3><div>${s[1]}</div></section>`).join('')}</div>`;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');history.replaceState(null,'',`#${id}`);modal.querySelector('.modal-close').focus()}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');history.replaceState(null,'',location.pathname+location.search);if(lastTrigger)lastTrigger.focus()}
document.addEventListener('click',e=>{const trigger=e.target.closest('[data-detail]');if(trigger)openWorkDetail(trigger.dataset.detail,trigger);if(e.target.closest('[data-close-modal]'))closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal();if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-detail]')){e.preventDefault();openWorkDetail(e.target.dataset.detail,e.target)}});
if(workDetails[location.hash.slice(1)])openWorkDetail(location.hash.slice(1),null);
