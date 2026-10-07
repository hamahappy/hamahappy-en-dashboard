const dashboardData = {
  openDate: "2027年4月1日",
  overallProgress: 61,
  publicityAssets: [
    {
      type: "SNS正方形版",
      title: "できることから、いっしょに。",
      note: "2027年4月OPEN予定。農作業・請負作業・軽作業・食品づくりを紹介し、利用相談・見学相談受付中を大きく掲載。Instagram・Facebook等の投稿向け。"
    },
    {
      type: "横長バナー版",
      title: "2027年4月 OPEN予定",
      note: "Webサイト・ダッシュボード・SNSヘッダー等で使いやすい横長版。利用相談・見学相談受付中と浜松市浜名区を掲載。"
    },
    {
      type: "縦長チラシ版",
      title: "利用者募集の基本チラシ",
      note: "対象となる方、予定している活動、施設概要、B型10名予定、月〜金9:00〜16:00、問い合わせ導線を掲載した配布用チラシ。"
    }
  ],
  properties: [
    {
      rank: "第一候補",
      title: "浜名区内野2395",
      subtitle: "ガレージ付き2階建・第一候補",
      state: "最優先で調査・見積中",
      stateClass: "status-ok",
      detail: "都市計画法はクリア（既存宅地確認OK）。1階ガレージ土間を作業・準備スペース、2階を相談室として活用するB型拠点を検討。浄化槽入れ替え、土地の分筆、改修の見積もりを取るため、10月14日（水）13:30から現地打ち合わせ予定。"
    },
    {
      rank: "第二候補",
      title: "浜名区寺島2258",
      subtitle: "明治2年の古民家・将来拠点候補",
      state: "相談次第で開設可能",
      stateClass: "status-progress",
      detail: "古民家だが、関係者との相談・条件整理により開設可能性あり。今後の2つ目の拠点候補として整備を進める。"
    },
    {
      rank: "第三候補",
      title: "中央区笠井町519-5",
      subtitle: "売買希望・1,000〜1,200万円",
      state: "購入は当面見送り",
      stateClass: "status-wait",
      detail: "家主が売買を希望（1,000〜1,200万円）。10月7日のJA融資相談でも、1拠点目からの購入は資金負担が大きいとの意見。まず内野で実績を積み、法人の体力をつけてから将来再検討する。"
    }
  ],
  operatingModel: [
    {
      label: "第一案",
      title: "B型単独で開所",
      note: "内野2395は、就労継続支援B型を第一案として2027年4月1日の開所を目指す。生活介護は将来検討。"
    },
    {
      label: "拠点",
      title: "施設外就労中心",
      note: "1階ガレージ土間＝作業・準備、2階＝相談室。地域の仕事へ利用者をつなぐ就労支援拠点として運営する。"
    },
    {
      label: "仕事候補",
      title: "地域仕事を複数用意",
      note: "バス車内清掃、農家の収穫・出荷、規格外野菜の選定、飲食店清掃を候補とし、本人の特性に合わせて仕事を選べる形を目指す。"
    },
    {
      label: "営業",
      title: "毎月1日・26日は休業",
      note: "土日祝は原則休業。営業日数が少ない月は必要に応じて土曜営業を設定し、年間営業日数と収入を調整する。"
    },
    {
      label: "記録・請求",
      title: "かべなしクラウドで一元管理",
      note: "利用者情報、支援記録、個別支援計画、実績、加算、工賃、送迎、勤怠、国保連請求を可能な限り一元管理する。"
    },
    {
      label: "生活介護",
      title: "将来の追加を検討",
      note: "内野は生活介護よりB型向き。看護師の安定確保と、バリアフリー等に適した別拠点の確保ができた段階で再検討する。"
    }
  ],
  financeSummary: [
    { label: "浄化槽", value: "100万円" },
    { label: "分筆", value: "50万円" },
    { label: "改修", value: "50万円（DIY中心・専門工事のみ外注）" },
    { label: "建築士", value: "16万円" },
    { label: "物件関係計", value: "216万円", strong: true },
    { label: "家賃", value: "月5〜8万円" },
    { label: "開所時給与総額", value: "月60〜65万円目安" },
    { label: "資金方針", value: "内野改修＋3〜6か月の運転資金を優先" },
    { label: "JA融資", value: "定期貯金担保融資の適用可否を確認中" },
    { label: "比較先", value: "日本政策金融公庫・浜北商工会議所" }
  ],
  status: [
    {
      title: "物件候補（3候補）",
      state: "調査・見積準備",
      stateClass: "status-progress",
      progress: 72,
      detail: "第一候補は内野2395、第二候補は寺島2258、第三候補は笠井町519-5。10月7日のJA融資相談を踏まえ、1拠点目は内野で低コストにスモールスタートする方針を強化。寺島は将来の第2拠点、笠井の購入は当面見送ります。",
      owner: "開設準備室",
      deadline: "10月中",
      nextStep: "10月14日の内野現地打ち合わせで、浄化槽入れ替え・分筆・改修の見積条件を整理する。"
    },
    {
      title: "行政手続",
      state: "準備中",
      stateClass: "status-progress",
      progress: 45,
      detail: "内野では就労継続支援B型単独での開所を第一案として整理中。生活介護は、物件適性・看護職員の安定確保・利用ニーズを確認し、将来の別拠点または追加指定として検討します。",
      owner: "行政手続担当",
      deadline: "物件方針決定後",
      nextStep: "内野物件の建築・消防・設備条件が整理でき次第、行政事前相談資料へ反映する。"
    },
    {
      title: "人員",
      state: "体制整理中",
      stateClass: "status-ok",
      progress: 65,
      detail: "管理者兼支援員、サービス管理責任者、職業指導員、生活支援員を中心に体制を検討。各スタッフの勤務可能曜日・時間を確認し、常勤換算と実際のシフトを確定します。",
      owner: "人員体制担当",
      deadline: "11月上旬",
      nextStep: "各スタッフの勤務可能曜日・時間を確認し、B型単独案の勤務形態一覧表を作成する。"
    },
    {
      title: "利用者募集",
      state: "広報素材3種作成済み",
      stateClass: "status-ok",
      progress: 50,
      detail: "SNS正方形版、横長バナー版、縦長チラシ版を作成済み。『できることから、いっしょに。』を軸に、2027年4月OPEN予定、利用相談・見学相談受付中として周知準備を進めています。",
      owner: "広報・募集担当",
      deadline: "2026年内",
      nextStep: "問い合わせ先とQRコードを確定し、相談支援事業所・学校・関係機関への配布とSNS発信を開始する。"
    }
  ],
  schedule: [
    {
      month: "10月",
      day: "04",
      title: "スタッフミーティング",
      note: "15:00〜16:00　顔合わせと進捗共有。B型単独案、内野の施設外就労モデル、勤務可能曜日・時間の確認方針を共有する。"
    },
    {
      month: "10月",
      day: "03",
      title: "寺島2258　内見・採寸",
      note: "15:00〜　かとう建築事務所と現地確認。明治2年建築の古い建物。L字型で生活スペースを分ける案、居住部分と事業利用部分の動線・区画、トイレ等の配置を検討。※内野2395とは別案件。"
    },
    {
      month: "10月",
      day: "07",
      title: "JAとぴあ浜松　融資相談",
      note: "10:30〜　障害福祉事業の資金調達を相談。内野でのスモールスタートを基本線とし、定期貯金担保融資の活用可能性、運転資金3〜6か月分の確保、笠井物件購入のリスク、農福連携の可能性を確認。定期貯金担保融資がNPO法人のB型事業に利用可能かはJA側で確認後に連絡予定。"
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
    },
    {
      month: "10月",
      day: "18",
      title: "スタッフミーティング",
      note: "8:30〜10:30　10月14日の見積、15日の融資相談を踏まえ、必要資金・融資額・人員配置・今後の動きを共有する。対面を基本にLINE・オンラインも活用。"
    },
    {
      month: "10月",
      day: "末",
      title: "主候補物件の方針決定",
      note: "内野2395を中心に、寺島2258・笠井町519-5も比較し、4月開所に向けた主候補を決定する。"
    },
    {
      month: "11月",
      day: "",
      title: "建築・消防・行政要件を確定",
      note: "平面図、使用範囲、避難、採光・排煙、トイレ、相談室等を整理し、行政・消防へ事前相談。必要改修を『開所前必須／後回し可』に分ける。"
    },
    {
      month: "12月",
      day: "",
      title: "契約・資金・申請準備",
      note: "賃貸または売買条件、融資申込、工事業者決定。指定申請書類を整え、利用者募集を開始する。"
    },
    {
      month: "1月",
      day: "",
      title: "指定申請・改修開始",
      note: "行政への正式申請または最終確認、改修工事開始。利用希望者面談、人員・勤務体制の最終調整を進める。"
    },
    {
      month: "2月",
      day: "",
      title: "工事・人員・利用者を確定",
      note: "改修をほぼ完了させ、消防・建築関係を最終確認。職員シフト、利用予定者、備品を確定する。"
    },
    {
      month: "3月",
      day: "",
      title: "開所前最終確認",
      note: "指定、消防、設備、備品、記録様式、契約書類を確認。職員研修、緊急時対応、送迎動線、利用契約を整える。"
    },
    {
      month: "4月",
      day: "01",
      title: "はまはっぴー・えん 開所",
      note: "2027年4月1日開所目標。初月は支援体制と記録運用の安定を優先する。"
    }
  ],
  issues: [
    {
      title: "B型単独か多機能型かの最終判断",
      note: "内野はB型単独を第一案。生活介護は看護職員の確保だけでなく、建物の適性・利用ニーズも踏まえて将来追加を判断する。"
    },
    {
      title: "施設外就労先との契約・運用",
      note: "バス清掃、農作業、飲食店清掃等について、請負契約、職員配置、個別支援計画、緊急時対応、作業指示系統を整理する。"
    },
    {
      title: "スタッフ勤務可能時間",
      note: "常勤・非常勤を先に固定せず、各スタッフの勤務可能曜日・時間を確認してから常勤換算と配置を決める。"
    },
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
      title: "JA定期貯金担保融資の適用可否",
      note: "NPO法人の就労継続支援B型事業の改修費・運転資金に正式に利用できるか、JAとぴあ浜松からの回答待ち。利用可能な場合は金利、担保拘束、融資額、返済条件を確認する。"
    },
    {
      title: "融資商品の比較",
      note: "JA、日本政策金融公庫のソーシャルビジネス支援資金、商工会議所経由の制度融資等を比較し、金利だけでなく手元資金を残せるか、担保条件、実行時期まで含めて判断する。"
    },
    {
      title: "4月開所の工程管理",
      note: "10月末までの物件方針決定、11月の要件確定、12月の契約・資金調達が遅れると4月1日開所への影響が大きい。"
    }
  ],
  nextActions: [
    {
      title: "スタッフ勤務可能時間を確認",
      note: "勤務可能曜日・時間、週勤務時間、2027年4月からの勤務可否を確認し、常勤換算と勤務形態一覧表へ落とし込む。",
      owner: "開設準備室",
      deadline: "10月上旬"
    },
    {
      title: "B型施設外就労モデルを具体化",
      note: "バス車内清掃、農家の収穫・出荷、規格外野菜選定、飲食店清掃について、仕事量・時間帯・請負条件・必要職員数を確認する。",
      owner: "開設準備室",
      deadline: "10月中"
    },
    {
      title: "かべなしクラウド運用項目を決定",
      note: "支援記録、個別支援計画、加算、送迎、工賃、勤怠、請求のどこまでを一元管理するかを開所前に確定する。",
      owner: "事務局",
      deadline: "指定申請準備まで"
    },
    {
      title: "JAからの融資可否回答を確認",
      note: "定期貯金担保融資がNPO法人のB型事業資金として利用できるか正式回答を受け、金利・融資上限・担保解除条件・必要書類を確認する。",
      owner: "事務局",
      deadline: "JA回答後すぐ"
    },
    {
      title: "3〜6か月分の運転資金を算定",
      note: "人件費、家賃、光熱費、その他固定費を基に、障害福祉報酬の入金まで耐えられる必要運転資金を算出する。",
      owner: "事務局",
      deadline: "10月15日までに一次整理"
    },
    {
      title: "農福連携候補を具体化",
      note: "JAとの接点を活かし、法人農家等との規格外野菜の回収・選別・出荷・収穫・施設外就労の候補を整理する。",
      owner: "開設準備室",
      deadline: "10月中"
    },
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
      title: "10月15日の融資相談資料を更新",
      note: "JA相談結果と内野の見積情報を反映し、改修費・運転資金・自己資金・借入候補を比較できる形に整理する。",
      owner: "事務局",
      deadline: "10月15日 10:00"
    },
    {
      title: "4月1日開所の工程を月次管理",
      note: "10月＝物件、11月＝要件、12月＝契約・資金、1月＝申請・改修、2月＝確定、3月＝最終確認の順で遅れを毎月チェックする。",
      owner: "開設準備室",
      deadline: "毎月更新"
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

document.getElementById("publicityAssets").innerHTML = dashboardData.publicityAssets.map(item => `
  <article class="publicity-card">
    <span class="publicity-type">${item.type}</span>
    <strong>${item.title}</strong>
    <p>${item.note}</p>
  </article>
`).join("");

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

document.getElementById("operatingModel").innerHTML = dashboardData.operatingModel.map(item => `
  <article class="model-card">
    <span class="model-label">${item.label}</span>
    <strong>${item.title}</strong>
    <p>${item.note}</p>
  </article>
`).join("");

document.getElementById("financeSummary").innerHTML = dashboardData.financeSummary.map(item => `
  <div class="finance-item ${item.strong ? "finance-strong" : ""}">
    <span>${item.label}</span>
    <strong>${item.value}</strong>
  </div>
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
