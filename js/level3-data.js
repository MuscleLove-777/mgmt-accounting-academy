const LEVEL3_DATA = {
    id: 3,
    title: "予算管理と投資判断",
    icon: "📈",
    description: "予実差異分析と投資評価手法（NPV/IRR）を習得する",
    modules: [
        {
            id: 301,
            title: "予実差異分析",
            duration: "15分",
            content: `
                <h2>予実差異分析のフレームワーク</h2>
                <p>予算と実績の差異を分析し、その原因を特定して次のアクションにつなげるのが<strong>予実差異分析</strong>です。</p>

                <h3>売上差異の分解</h3>
                <div class="info-box tip">
                    <div class="info-box-title">差異分析の例</div>
                    <p>予算売上 1,000万 → 実績売上 920万 → 差異 ▲80万</p>
                    <ul>
                        <li><strong>価格差異</strong>：（実績単価 - 予算単価）× 実績数量 ＝（920円 - 1,000円）× 10,000個 ＝ <strong>▲80万</strong></li>
                        <li><strong>数量差異</strong>：（実績数量 - 予算数量）× 予算単価 ＝（10,000個 - 10,000個）× 1,000円 ＝ <strong>0万</strong></li>
                    </ul>
                    <p>→ 「数量は計画通り。しかし値引きで利益が削られている！」</p>
                </div>

                <h2>差異の種類</h2>
                <table>
                    <thead>
                        <tr><th>差異の種類</th><th>計算方法</th><th>分析の視点</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>価格差異</strong></td><td>（実績単価 - 予算単価）× 実績数量</td><td>値引き・為替の影響</td></tr>
                        <tr><td><strong>数量差異</strong></td><td>（実績数量 - 予算数量）× 予算単価</td><td>販売努力・市場環境</td></tr>
                        <tr><td><strong>ミックス差異</strong></td><td>製品構成比の変化による影響</td><td>高粗利製品の比率変化</td></tr>
                        <tr><td><strong>原価差異</strong></td><td>実績原価 - 標準原価</td><td>効率性・仕入価格</td></tr>
                    </tbody>
                </table>

                <h2>差異分析をアクションにつなげる</h2>
                <ul>
                    <li>差異を発見するだけでなく、<strong>「なぜ？」を深掘り</strong>して原因を特定する</li>
                    <li>原因に対して<strong>具体的なアクションプラン</strong>を策定する</li>
                    <li>翌月の予算に<strong>フィードバック</strong>して精度を高める</li>
                </ul>
            `,
            quiz: [
                { id: "q301_1", type: "choice", question: "予算売上1,000万円、実績売上920万円の場合、売上差異はいくらですか？", options: ["＋80万円", "▲80万円", "▲920万円", "＋920万円"], answer: 1, explanation: "売上差異 = 実績 - 予算 = 920 - 1,000 = ▲80万円（マイナスは不利差異）です。" },
                { id: "q301_2", type: "choice", question: "価格差異の計算式として正しいのは？", options: ["（実績数量 - 予算数量）× 実績単価", "（実績単価 - 予算単価）× 実績数量", "（実績単価 - 予算単価）× 予算数量", "実績売上 - 予算売上"], answer: 1, explanation: "価格差異 =（実績単価 - 予算単価）× 実績数量 です。単価の変動が売上に与えた影響を分析します。" },
                { id: "q301_3", type: "choice", question: "数量差異がゼロで価格差異がマイナスの場合、何が起きていますか？", options: ["販売量が減った", "値引きが行われた", "原価が上がった", "固定費が増えた"], answer: 1, explanation: "数量は予算通りだが単価が下がったため、値引きや価格低下が起きていると判断できます。" },
                { id: "q301_4", type: "choice", question: "差異分析の最も重要な目的は何ですか？", options: ["責任者を追及する", "原因を特定し次のアクションにつなげる", "財務諸表を正確にする", "税務申告に利用する"], answer: 1, explanation: "差異分析は犯人探しではなく、原因を特定して改善アクションにつなげるためのツールです。" },
                { id: "q301_5", type: "fill", question: "製品構成比の変化による売上への影響を何差異と呼びますか？（カタカナ3文字＋漢字2文字）", answer: "ミックス差異", explanation: "ミックス差異は、高粗利製品と低粗利製品の販売構成比が変化したことによる影響を分析します。" }
            ]
        },
        {
            id: 302,
            title: "ローリングフォーキャスト",
            duration: "15分",
            content: `
                <h2>従来型予算の限界</h2>
                <p>多くの企業では年初に年間予算を策定しますが、ビジネス環境が変化すると下期には予算が陳腐化してしまいます。</p>

                <table>
                    <thead>
                        <tr><th></th><th>従来型予算</th><th>ローリングフォーキャスト</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>策定時期</strong></td><td>年1回（期初に策定）</td><td>毎月 or 四半期ごとに更新</td></tr>
                        <tr><td><strong>計画期間</strong></td><td>期末まで固定</td><td>常に向こう12〜18ヶ月</td></tr>
                        <tr><td><strong>環境変化への対応</strong></td><td>下期には陳腐化</td><td>常に最新の見通しを反映</td></tr>
                        <tr><td><strong>工数</strong></td><td>年初に大きな工数</td><td>定期的に小さな工数</td></tr>
                    </tbody>
                </table>

                <h2>ローリングフォーキャストの仕組み</h2>
                <p>ローリングフォーキャストでは、毎月（または四半期ごとに）向こう12〜18ヶ月の予測を更新し続けます。</p>
                <ul>
                    <li><strong>常に「今から先」</strong>が見える状態を維持する</li>
                    <li>環境変化を<strong>迅速に</strong>計画に反映できる</li>
                    <li>予算策定の<strong>工数を分散</strong>できる</li>
                    <li>「予算消化」のような<strong>非合理的な行動を防ぐ</strong></li>
                </ul>

                <h2>導入のポイント</h2>
                <ul>
                    <li>全費目を毎月更新するのではなく、<strong>売上・利益に大きく影響する項目</strong>を優先する</li>
                    <li>精度100%を目指さず、<strong>方向性とトレンド</strong>を重視する</li>
                    <li><strong>BIツール</strong>と連携して自動化する部分を増やす</li>
                    <li>予算が「目標」、フォーキャストが「見通し」と<strong>役割を明確に分ける</strong></li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">提案ポイント</div>
                    <p>「年初に作った予算に縛られて、環境変化に対応できていませんか？ ローリングフォーキャストで"生きた予算"に進化させましょう。」</p>
                </div>
            `,
            quiz: [
                { id: "q302_1", type: "choice", question: "ローリングフォーキャストの最大の特徴は？", options: ["年1回の精密な計画", "毎月/四半期ごとに予測を更新し続ける", "過去の実績のみを分析する", "固定費のみを管理する"], answer: 1, explanation: "ローリングフォーキャストは定期的に予測を更新し続けることで、常に最新の見通しを維持する手法です。" },
                { id: "q302_2", type: "choice", question: "従来型予算の問題点は何ですか？", options: ["工数が少なすぎる", "更新頻度が高すぎる", "下期には計画が陳腐化する", "精度が高すぎる"], answer: 2, explanation: "年初に作成した予算は環境変化に対応できず、下期には実態と乖離して形骸化しがちです。" },
                { id: "q302_3", type: "choice", question: "ローリングフォーキャストの計画期間は？", options: ["期末まで固定", "常に向こう12〜18ヶ月", "過去12ヶ月", "3ヶ月先まで"], answer: 1, explanation: "ローリングフォーキャストは常に向こう12〜18ヶ月の見通しを維持するのが一般的です。" },
                { id: "q302_4", type: "choice", question: "ローリングフォーキャスト導入で防げる非合理的行動は？", options: ["残業の増加", "予算消化", "売上の増加", "人員の増加"], answer: 1, explanation: "固定予算だと期末に「予算を使い切らなければ」という予算消化行動が発生しますが、ローリングフォーキャストではこれを防げます。" },
                { id: "q302_5", type: "fill", question: "予算は「目標」ですが、フォーキャストは何と位置づけますか？（漢字2文字）", answer: "見通し", explanation: "予算が達成すべき「目標」であるのに対し、フォーキャストは現実的な「見通し」として役割を分けることが重要です。" }
            ]
        },
        {
            id: 303,
            title: "投資判断（NPV・IRR）",
            duration: "20分",
            content: `
                <h2>主要な投資評価手法</h2>
                <p>設備投資や新規事業への投資判断に使う主な手法を理解しましょう。</p>

                <table>
                    <thead>
                        <tr><th>手法</th><th>計算方法</th><th>メリット</th><th>デメリット</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>回収期間法</strong></td><td>投資額 ÷ 年間CF</td><td>簡単・直感的</td><td>時間価値無視</td></tr>
                        <tr><td><strong>NPV（正味現在価値）</strong></td><td>将来CFの現在価値合計 - 投資額</td><td>理論的に最も正しい</td><td>割引率の設定が難しい</td></tr>
                        <tr><td><strong>IRR（内部収益率）</strong></td><td>NPV=0となる割引率</td><td>%で比較しやすい</td><td>複数解の可能性</td></tr>
                    </tbody>
                </table>

                <h2>NPV計算の具体例</h2>
                <div class="info-box tip">
                    <div class="info-box-title">設備投資案件の評価</div>
                    <p>初期投資：▲1,000万円<br>
                    年間CF：350万円 × 4年<br>
                    割引率：8%（WACC）</p>
                    <p>NPV = -1,000 + 350/(1.08) + 350/(1.08^2) + 350/(1.08^3) + 350/(1.08^4)<br>
                    = -1,000 + 324 + 300 + 278 + 257<br>
                    = ▲1,000 + 1,159<br>
                    = <strong>+159万円 → 投資すべき（NPV > 0）</strong></p>
                    <p>回収期間 = 1,000 ÷ 350 ≒ 2.86年</p>
                </div>

                <h2>NPVとIRRの判断基準</h2>
                <table>
                    <thead>
                        <tr><th>手法</th><th>投資すべき条件</th><th>投資を見送る条件</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>NPV</strong></td><td>NPV > 0</td><td>NPV < 0</td></tr>
                        <tr><td><strong>IRR</strong></td><td>IRR > WACC（ハードルレート）</td><td>IRR < WACC</td></tr>
                    </tbody>
                </table>

                <h3>WACC（加重平均資本コスト）とは</h3>
                <p>企業が資金調達するためのコストで、NPV計算の割引率として使われます。株主の期待リターンと借入金利を加重平均したものです。</p>

                <div class="info-box tip">
                    <div class="info-box-title">役員を動かすフレーズ</div>
                    <p>「"なんとなく良さそう"ではなく、WACCを超えるリターンがあるか。この1つの問いが、投資の成否を分けます。」</p>
                </div>
            `,
            quiz: [
                { id: "q303_1", type: "choice", question: "NPVが+159万円の投資案件はどう判断すべきですか？", options: ["投資を見送る", "投資すべき", "追加情報が必要", "判断できない"], answer: 1, explanation: "NPV > 0 の場合、投資はWACCを上回るリターンを生むため、投資すべきと判断します。" },
                { id: "q303_2", type: "choice", question: "回収期間法の最大の欠点は何ですか？", options: ["計算が複雑", "時間価値を無視している", "直感的でない", "利益を考慮しない"], answer: 1, explanation: "回収期間法は将来のキャッシュフローの時間価値（貨幣の時間的価値）を考慮しないため、理論的には不完全です。" },
                { id: "q303_3", type: "choice", question: "IRRの判断基準として正しいのは？", options: ["IRR > NPV なら投資する", "IRR > WACC なら投資する", "IRR > 売上高利益率 なら投資する", "IRR > 100% なら投資する"], answer: 1, explanation: "IRRが企業の資本コスト（WACC）を上回る場合、その投資は価値を生むと判断できます。" },
                { id: "q303_4", type: "choice", question: "NPV計算で使う割引率として一般的なものは？", options: ["インフレ率", "WACC", "ROE", "BEP"], answer: 1, explanation: "NPV計算ではWACC（加重平均資本コスト）を割引率として使うのが一般的です。" },
                { id: "q303_5", type: "fill", question: "NPVは日本語で何と呼びますか？（漢字6文字）", answer: "正味現在価値", explanation: "NPV（Net Present Value）は「正味現在価値」と訳され、将来キャッシュフローの現在価値合計から投資額を引いたものです。" }
            ]
        }
    ]
};
