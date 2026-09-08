const projects = [
  {title:'반품 사유',device:'macmini',deviceLabel:'MAC MINI · 장편소설',desc:'20장 구성 장편소설',progress:55,status:'active',facts:[['집필','11 / 20장'],['PDF','1부 39면']],updated:'오늘 09:15',git:'백업 필요',dirty:true},
  {title:'아무도 그런 적 없다고 했다',device:'macmini',deviceLabel:'MAC MINI · 창작동화',desc:'연작 동화 POD 제작',progress:90,status:'active',facts:[['내지','POD PDF'],['삽화','99개']],updated:'어제 23:28',git:'미커밋 79',dirty:true},
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
  const card=document.createElement('article');card.className='project';card.dataset.device=p.device;card.dataset.status=p.status;
  card.innerHTML=`<div class="project-head"><div><span class="device-label">${p.deviceLabel}</span><h3>${p.title}</h3><p class="desc">${p.desc}</p></div><span class="percent">${p.progress}%</span></div><div class="bar"><i style="width:${p.progress}%"></i></div><div class="facts">${p.facts.map(f=>`<span>${f[0]}<b>${f[1]}</b></span>`).join('')}</div><div class="project-foot"><span>최근 ${p.updated}</span><span class="${p.dirty?'dirty':''}">${p.git}</span></div>`;
  grid.append(card);
});

let selectedDevice='all',selectedStatus='all';
function applyFilters(){let visible=0;document.querySelectorAll('.project').forEach(card=>{const show=(selectedDevice==='all'||card.dataset.device===selectedDevice)&&(selectedStatus==='all'||card.dataset.status===selectedStatus);card.classList.toggle('hidden',!show);if(show)visible++});document.querySelector('#metricProjects').textContent=visible}
document.querySelectorAll('[data-device]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-device]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');selectedDevice=btn.dataset.device;applyFilters()}));
document.querySelectorAll('[data-status]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-status]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');selectedStatus=btn.dataset.status;applyFilters()}));
