const dashboardData = {
  openDate: "2027年4月1日",
  overallProgress: 48,
  status: [
    {
      title: "物件",
      state: "検討中",
      stateClass: "status-progress",
      progress: 60,
      detail: "浜名区内野2395のガレージ付き家屋を候補として検討中。浄化槽、分筆、改修費用、契約条件を確認しています。"
    },
    {
      title: "行政手続",
      state: "準備中",
      stateClass: "status-progress",
      progress: 45,
      detail: "生活介護10名・就労継続支援B型10名の多機能型を想定し、障害福祉サービス指定に向けた事前相談事項を整理しています。"
    },
    {
      title: "人員",
      state: "体制整理中",
      stateClass: "status-ok",
      progress: 65,
      detail: "管理者、サービス管理責任者、支援員、看護職など、必要職種と配置体制を整理しています。"
    },
    {
      title: "利用者募集",
      state: "準備中",
      stateClass: "status-progress",
      progress: 25,
      detail: "2026年内の募集開始を目標に、案内内容と募集開始時期を検討しています。"
    }
  ],
  schedule: [
    { month: "10月", day: "15", title: "浜北商工会議所との打ち合わせ", note: "事業計画・資金面・開設準備について相談予定。" }
  ],
  issues: [
    { title: "物件の最終決定", note: "費用、設備要件、契約条件を比較して判断する。" },
    { title: "浄化槽の対応方法", note: "既存設備の活用・交換・新設を比較する。" },
    { title: "分筆の必要性と費用", note: "必要範囲と土地家屋調査士費用を確認する。" },
    { title: "改修費用", note: "指定基準・消防・建築面を踏まえた改修範囲と総額を整理する。" },
    { title: "指定申請までのスケジュール", note: "2027年4月1日開所から逆算して行政手続きを工程化する。" }
  ],
  nextActions: [
    { title: "物件費用を3パターンで比較", note: "初期費用・月額負担・浄化槽・分筆・改修費をまとめて比較する。" },
    { title: "行政への事前相談事項を整理", note: "多機能型の指定、人員配置、設備要件、申請時期を質問リスト化する。" },
    { title: "開所日から逆算した工程表を作成", note: "物件決定、改修、指定申請、人員確定、利用者募集を月・週単位で管理する。" }
  ]
};

document.getElementById("openDate").textContent = dashboardData.openDate;
document.getElementById("overallProgress").textContent = dashboardData.overallProgress + "%";
document.getElementById("overallProgressBar").style.width = dashboardData.overallProgress + "%";

document.getElementById("statusGrid").innerHTML = dashboardData.status.map(item => `
  <article class="status-card">
    <div class="status-card-header">
      <h3>${item.title}</h3>
      <span class="status-pill ${item.stateClass}">${item.state}</span>
    </div>
    <p>${item.detail}</p>
    <div class="mini-progress" aria-label="${item.title}の進捗 ${item.progress}%">
      <span style="width: ${item.progress}%"></span>
    </div>
  </article>
`).join("");

document.getElementById("scheduleList").innerHTML = dashboardData.schedule.map(item => `
  <article class="timeline-item">
    <div class="date-box">
      <strong>${item.day}</strong>
      <span>${item.month}</span>
    </div>
    <div class="timeline-content">
      <strong>${item.title}</strong>
      <p>${item.note}</p>
    </div>
  </article>
`).join("");

document.getElementById("issueCount").textContent = dashboardData.issues.length + "件";
document.getElementById("issueList").innerHTML = dashboardData.issues.map(item => `
  <article class="stack-item">
    <strong>${item.title}</strong>
    <p>${item.note}</p>
  </article>
`).join("");

document.getElementById("nextList").innerHTML = dashboardData.nextActions.map((item, index) => `
  <article class="stack-item">
    <strong>${index + 1}. ${item.title}</strong>
    <p>${item.note}</p>
  </article>
`).join("");