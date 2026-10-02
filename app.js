const dashboardData = {
  openDate: "2027年4月1日",
  overallProgress: 46,
  status: [
    {
      title: "物件",
      state: "検討中",
      stateClass: "status-progress",
      progress: 55,
      detail: "候補物件を比較し、設備・費用・契約条件を確認中。"
    },
    {
      title: "行政手続",
      state: "準備中",
      stateClass: "status-progress",
      progress: 40,
      detail: "事前相談に向け、必要書類と確認事項を整理中。"
    },
    {
      title: "人員",
      state: "一部確定",
      stateClass: "status-ok",
      progress: 60,
      detail: "必要職種と勤務体制のたたき台を作成済み。"
    },
    {
      title: "利用者募集",
      state: "未開始",
      stateClass: "status-wait",
      progress: 10,
      detail: "案内資料と募集開始時期を検討予定。"
    }
  ],
  schedule: [
    { month: "10月", day: "15", title: "関係機関との打ち合わせ", note: "事業計画と資金面の相談" },
    { month: "10月", day: "22", title: "物件条件の再確認", note: "設備・修繕・契約条件を確認" },
    { month: "11月", day: "05", title: "開設準備会議", note: "進捗確認と次月タスクの決定" }
  ],
  issues: [
    { title: "物件の最終決定", note: "費用・設備要件・契約条件を比較して判断する。" },
    { title: "行政手続のスケジュール", note: "申請から指定までの期限を逆算する。" },
    { title: "募集開始時期", note: "広報物の完成時期と合わせて決定する。" }
  ],
  nextActions: [
    { title: "物件比較表を完成させる", note: "候補ごとの初期費用・月額費用・必要工事を1枚に整理。" },
    { title: "行政への確認事項をまとめる", note: "相談時に確認する質問を事前に一覧化。" },
    { title: "開設までの逆算スケジュールを作る", note: "月単位から週単位へ落とし込む。" }
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