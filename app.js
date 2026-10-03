const dashboardData = {
  openDate: "2027年4月1日",
  overallProgress: 55,
  status: [
    {
      title: "物件",
      state: "見積段階",
      stateClass: "status-progress",
      progress: 72,
      detail: "候補物件について、B型事業所としての活用可能性を建築士と現地確認。既存建物を活かし、必要最小限の改修で進める方向が見えてきました。浄化槽、分筆、改修費用、動線の確認を進めています。",
      owner: "開設準備室",
      deadline: "10月中",
      nextStep: "10月14日の合同現地確認で、分筆・浄化槽・改修範囲を整理し、概算費用を確定する。"
    },
    {
      title: "行政手続",
      state: "確認事項整理中",
      stateClass: "status-progress",
      progress: 50,
      detail: "生活介護10名・就労継続支援B型10名の多機能型を想定。既存建物の扱い、採光・排煙・天井高、消防設備、居住部分との区画・動線などを建築士と確認しています。",
      owner: "行政手続担当",
      deadline: "10月下旬",
      nextStep: "建築・消防上の確認事項を見積内容と合わせて整理し、行政への事前相談資料へ反映する。"
    },
    {
      title: "人員",
      state: "体制整理中",
      stateClass: "status-ok",
      progress: 65,
      detail: "管理者、サービス管理責任者、支援員、看護職など、必要職種と配置体制を整理しています。",
      owner: "人員体制担当",
      deadline: "11月上旬",
      nextStep: "開所時の勤務体制表と不足職種を確定する。"
    },
    {
      title: "利用者募集",
      state: "準備中",
      stateClass: "status-progress",
      progress: 30,
      detail: "2026年内の募集開始を目標に、案内内容と募集開始時期を検討しています。物件・改修方針が固まり次第、募集案内を具体化します。",
      owner: "広報・募集担当",
      deadline: "2026年内",
      nextStep: "募集案内のたたき台を作り、物件方針確定後に関係機関への周知を開始する。"
    }
  ],
  schedule: [
    { month: "10月", day: "03", title: "現地確認・採寸", note: "かとう建築事務所と建物の活用方法、改修方法、動線などを確認。見積段階へ移行。" },
    { month: "10月", day: "14", title: "専門業者合同 現地確認", note: "13:30〜　分筆、浄化槽・水道、建築改修の範囲と見積条件を現地で確認予定。" },
    { month: "10月", day: "15", title: "浜北商工会議所　融資相談", note: "10:00〜　物件取得・改修・運転資金を含む資金計画について相談予定。" }
  ],
  issues: [
    { title: "改修費用の確定", note: "天井、手すり、トイレ・手洗い、区画・動線、消防・建築対応を含む概算見積を出す。"
    },
    { title: "浄化槽・配管計画", note: "既存設備の活用、配管切り回し、新設のどの方法で進めるか、施工費と合わせて判断する。" },
    { title: "分筆範囲と測量費", note: "事業で使用する範囲、浄化槽位置、将来の土地利用を踏まえて土地家屋調査士と確認する。" },
    { title: "農地・駐車場の扱い", note: "周辺農地を駐車場等に利用する場合は、無断転用を避け、農地転用や権利関係を事前に整理する。" },
    { title: "既存建物の法令整理", note: "建築年代、増築部分、採光・排煙・天井高、消防設備などを確認し、必要な改修範囲を確定する。" },
    { title: "融資・資金調達", note: "物件取得資金、改修費、運転資金を分けて整理し、10月15日の融資相談に備える。" }
  ],
  nextActions: [
    {
      title: "10月14日の合同現地確認を実施",
      note: "建築、土地家屋調査、浄化槽・水道の各専門家と、分筆・設備・改修範囲を同時に確認する。",
      owner: "開設準備室",
      deadline: "10月14日 13:30"
    },
    {
      title: "改修・浄化槽・分筆の概算見積を集約",
      note: "必要工事を「開所時に必須」「後からでも可能」に分け、初期費用を明確にする。",
      owner: "開設準備室",
      deadline: "10月15日までに一次整理"
    },
    {
      title: "融資相談資料を更新",
      note: "10月14日の見積情報を可能な範囲で反映し、物件取得・改修・運転資金の資金使途を整理する。",
      owner: "事務局",
      deadline: "10月15日 10:00"
    },
    {
      title: "農地利用の手続を確認",
      note: "駐車場拡張や将来購入を想定する土地について、農地転用の必要性と進め方を確認する。",
      owner: "開設準備室",
      deadline: "10月中"
    }
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
    <div class="status-meta">
      <span><small>担当</small><strong>${item.owner}</strong></span>
      <span><small>期限</small><strong>${item.deadline}</strong></span>
    </div>
    <div class="next-step">
      <small>次の一手</small>
      <strong>${item.nextStep}</strong>
    </div>
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
  <article class="stack-item action-item">
    <strong>${index + 1}. ${item.title}</strong>
    <p>${item.note}</p>
    <div class="action-meta">
      <span>担当：${item.owner}</span>
      <span>期限：${item.deadline}</span>
    </div>
  </article>
`).join("");
