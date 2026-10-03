const dashboardData = {
  openDate: "2027年4月1日",
  overallProgress: 52,
  properties: [
    {
      rank: "第一候補",
      title: "浜名区内野2395",
      subtitle: "ガレージ付き2階建・池谷さん宅の離れ",
      state: "最優先で調査・見積中",
      stateClass: "status-ok",
      detail: "都市計画法はクリア（既存宅地確認OK）。浄化槽入れ替え、土地の分筆、改修の見積もりを取るため、10月14日（水）13:30から現地打ち合わせ予定。"
    },
    {
      rank: "第二候補",
      title: "浜名区寺島2258",
      subtitle: "椋本さん宅・明治2年の古民家",
      state: "相談次第で開設可能",
      stateClass: "status-progress",
      detail: "古民家だが、関係者との相談・条件整理により開設可能性あり。今後の2つ目の拠点候補として整備を進める。"
    },
    {
      rank: "第三候補",
      title: "中央区笠井町519-5",
      subtitle: "売買希望・1,000〜1,200万円",
      state: "融資条件を見て検討",
      stateClass: "status-wait",
      detail: "家主が売買を希望。融資が通れば購入を検討するが、1つ目の拠点としては取得・改修・資金面のリスクがあるため慎重に判断する。"
    }
  ],
  status: [
    {
      title: "物件候補（3候補）",
      state: "調査・見積準備",
      stateClass: "status-progress",
      progress: 68,
      detail: "第一候補は内野2395、第二候補は寺島2258、第三候補は笠井町519-5。内野を最優先に、寺島は2つ目の拠点候補、笠井は融資条件を見ながら購入可否を検討しています。",
      owner: "開設準備室",
      deadline: "10月中",
      nextStep: "10月14日の内野現地打ち合わせで、浄化槽入れ替え・分筆・改修の見積条件を整理する。"
    },
    {
      title: "行政手続",
      state: "準備中",
      stateClass: "status-progress",
      progress: 45,
      detail: "生活介護10名・就労継続支援B型10名の多機能型を想定し、物件方針決定後の指定申請に向けて必要事項を整理しています。",
      owner: "行政手続担当",
      deadline: "物件方針決定後",
      nextStep: "内野物件の建築・消防・設備条件が整理でき次第、行政事前相談資料へ反映する。"
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
      detail: "2026年内の募集開始を目標に、案内内容と募集開始時期を検討しています。",
      owner: "広報・募集担当",
      deadline: "2026年内",
      nextStep: "物件方針が固まり次第、募集案内と関係機関への周知を具体化する。"
    }
  ],
  schedule: [
    {
      month: "10月",
      day: "03",
      title: "寺島2258　内見・採寸",
      note: "15:00〜　かとう建築事務所と現地確認。明治2年建築の古い建物。L字型で生活スペースを分ける案、居住部分と事業利用部分の動線・区画、トイレ等の配置を検討。※内野2395とは別案件。"
    },
    {
      month: "10月",
      day: "14",
      title: "内野2395　現地打ち合わせ",
      note: "13:30〜　浄化槽入れ替え、土地の分筆、改修の見積もり取得に向けて現地確認・打ち合わせ予定。都市計画法は既存宅地確認済み。"
    },
    {
      month: "10月",
      day: "15",
      title: "浜北商工会議所　融資相談",
      note: "10:00〜　物件取得・改修・運転資金を含む資金計画について相談予定。"
    }
  ],
  issues: [
    {
      title: "内野の土地利用・分筆",
      note: "事業で使用する土地の範囲、分筆の必要性、測量費用を土地家屋調査士と確認する。"
    },
    {
      title: "内野の浄化槽・水道",
      note: "既存設備の状況、新設・切り回しの必要性、施工費を10月14日に確認する。"
    },
    {
      title: "内野の必要工事・費用",
      note: "B型等の日中活動拠点として使用するために必要な工事と概算費用を整理する。"
    },
    {
      title: "農地・駐車場の扱い",
      note: "周辺農地を駐車場等に利用する場合は、農地転用や権利関係を事前に整理する。"
    },
    {
      title: "融資・資金調達",
      note: "物件取得、改修、運転資金を分けて整理し、10月15日の融資相談に備える。"
    }
  ],
  nextActions: [
    {
      title: "内野2395の合同現地確認",
      note: "土地家屋調査、浄化槽・水道、建築関係の専門家と、分筆・設備・必要工事を確認する。",
      owner: "開設準備室",
      deadline: "10月14日 13:30"
    },
    {
      title: "内野の概算費用を集約",
      note: "分筆、浄化槽、水道、必要工事を項目別に整理し、初期費用を明確にする。",
      owner: "開設準備室",
      deadline: "10月15日までに一次整理"
    },
    {
      title: "融資相談資料を更新",
      note: "内野の見積情報を可能な範囲で反映し、物件取得・改修・運転資金の資金使途を整理する。",
      owner: "事務局",
      deadline: "10月15日 10:00"
    },
    {
      title: "寺島2258を第2拠点候補として整理",
      note: "明治2年の古民家。相談次第で開設可能なため、1つ目の拠点とは切り分け、今後の2つ目の拠点候補として整備方針を検討する。",
      owner: "事務局",
      deadline: "継続"
    }
  ]
};

document.getElementById("openDate").textContent = dashboardData.openDate;
document.getElementById("overallProgress").textContent = dashboardData.overallProgress + "%";
document.getElementById("overallProgressBar").style.width = dashboardData.overallProgress + "%";

document.getElementById("propertyCandidates").innerHTML = dashboardData.properties.map(item => `
  <article class="property-candidate">
    <div class="property-candidate-head">
      <div>
        <span class="rank-label">${item.rank}</span>
        <h3>${item.title}</h3>
      </div>
      <span class="status-pill ${item.stateClass}">${item.state}</span>
    </div>
    <p class="property-subtitle">${item.subtitle}</p>
    <p class="property-detail">${item.detail}</p>
  </article>
`).join("");

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
