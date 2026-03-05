const LEVEL2_DATA = {
    id: 2,
    title: "部門別管理と業績評価",
    icon: "🏢",
    description: "部門別採算管理とKPIツリーの設計を学ぶ",
    modules: [
        {
            id: 201,
            title: "部門別採算管理",
            duration: "15分",
            content: `
                <h2>共通費の配賦問題</h2>
                <p>部門別の業績を評価する際、最も注意すべきは<strong>共通費（本社費用など）の配賦方法</strong>です。配賦の仕方次第で、事業部の利益は大きく変わります。</p>

                <div class="info-box danger">
                    <div class="info-box-title">よくある失敗パターン</div>
                    <table>
                        <thead><tr><th></th><th>A事業部</th><th>B事業部</th><th>本社共通</th></tr></thead>
                        <tbody>
                            <tr><td>売上</td><td>500万</td><td>300万</td><td>-</td></tr>
                            <tr><td>変動費</td><td>200万</td><td>150万</td><td>-</td></tr>
                            <tr><td>限界利益</td><td>300万</td><td>150万</td><td>-</td></tr>
                            <tr><td>共通費配賦</td><td>▲180万</td><td>▲120万</td><td>300万（売上比で配賦）</td></tr>
                            <tr><td><strong>営業利益</strong></td><td><strong>120万</strong></td><td><strong>30万</strong></td><td>-</td></tr>
                        </tbody>
                    </table>
                    <p>→ 「B事業部は儲かってない！撤退だ！」 ← 本当にそうか？</p>
                </div>

                <div class="info-box success">
                    <div class="info-box-title">正しい見方：直接原価計算（貢献利益アプローチ）</div>
                    <table>
                        <thead><tr><th></th><th>A事業部</th><th>B事業部</th><th>本社共通</th><th>全社</th></tr></thead>
                        <tbody>
                            <tr><td>売上</td><td>500万</td><td>300万</td><td>-</td><td>800万</td></tr>
                            <tr><td>変動費</td><td>200万</td><td>150万</td><td>-</td><td>350万</td></tr>
                            <tr><td>限界利益</td><td>300万</td><td>150万</td><td>-</td><td>450万</td></tr>
                            <tr><td>個別固定費</td><td>▲50万</td><td>▲30万</td><td>-</td><td>▲80万</td></tr>
                            <tr><td><strong>貢献利益</strong></td><td><strong>250万</strong></td><td><strong>120万</strong></td><td>-</td><td><strong>370万</strong></td></tr>
                            <tr><td>共通費</td><td>-</td><td>-</td><td>▲300万</td><td>▲300万</td></tr>
                            <tr><td>営業利益</td><td>-</td><td>-</td><td>-</td><td>70万</td></tr>
                        </tbody>
                    </table>
                </div>

                <h2>経営判断のポイント</h2>
                <div class="info-box tip">
                    <div class="info-box-title">正しい判断</div>
                    <p>「B事業部は貢献利益120万を生んでいる。撤退すれば全社利益は120万円減る。共通費は消えないからです。配賦のマジックに騙されてはいけません。」</p>
                </div>

                <h3>貢献利益と撤退判断の関係</h3>
                <ul>
                    <li><strong>貢献利益がプラス</strong>：その事業部は共通費の回収に貢献しているため、撤退すると全社利益が減少する</li>
                    <li><strong>貢献利益がマイナス</strong>：その事業部は全社の足を引っ張っているため、撤退を検討すべき</li>
                    <li><strong>貢献利益がゼロ</strong>：共通費回収への貢献がなく、将来性がなければ撤退の候補</li>
                </ul>
            `,
            quiz: [
                { id: "q201_1", type: "choice", question: "共通費を売上比で配賦する方法の問題点は何ですか？", options: ["計算が複雑すぎる", "配賦のマジックにより不採算部門の誤判定が起きうる", "税務上認められない", "変動費が増える"], answer: 1, explanation: "共通費を機械的に配賦すると、実際には貢献利益を生んでいる部門が「赤字」に見えてしまう危険があります。" },
                { id: "q201_2", type: "choice", question: "貢献利益がプラスの事業部を撤退させるとどうなりますか？", options: ["全社利益が増える", "全社利益が減る", "共通費が減る", "変動費が増える"], answer: 1, explanation: "貢献利益がプラスの事業部は共通費の回収に貢献しており、撤退すると共通費は残ったまま全社利益が減少します。" },
                { id: "q201_3", type: "choice", question: "直接原価計算で重要な利益概念はどれですか？", options: ["営業利益", "経常利益", "貢献利益", "粗利益"], answer: 2, explanation: "直接原価計算では、各事業部が全社にどれだけ貢献しているかを示す「貢献利益」が重要な判断基準です。" },
                { id: "q201_4", type: "choice", question: "貢献利益の計算式として正しいのは？", options: ["売上高 - 変動費 - 共通費", "限界利益 - 個別固定費", "売上高 - 固定費", "営業利益 + 共通費"], answer: 1, explanation: "貢献利益 = 限界利益 - 個別固定費 です。共通費は配賦せず、各部門が直接管理できる費用のみを差し引きます。" },
                { id: "q201_5", type: "fill", question: "各事業部が全社の共通費回収にどれだけ寄与しているかを示す利益を何と呼びますか？（漢字4文字）", answer: "貢献利益", explanation: "貢献利益は、限界利益から個別固定費を差し引いた、各部門の全社への貢献度を示す利益指標です。" }
            ]
        },
        {
            id: 202,
            title: "KPIツリーとデュポン分析",
            duration: "15分",
            content: `
                <h2>デュポン分析（ROE分解）</h2>
                <p>ROE（自己資本利益率）を3つの要素に分解し、経営指標を現場の行動に落とし込む手法が<strong>デュポン分析</strong>です。</p>

                <div class="info-box tip">
                    <div class="info-box-title">ROEの3分解</div>
                    <p><strong>ROE ＝ 売上高利益率 × 総資産回転率 × 財務レバレッジ</strong></p>
                    <ul>
                        <li><strong>売上高利益率</strong>（稼ぐ力）＝ 純利益 ÷ 売上高</li>
                        <li><strong>総資産回転率</strong>（回す力）＝ 売上高 ÷ 総資産</li>
                        <li><strong>財務レバレッジ</strong>（テコの力）＝ 総資産 ÷ 自己資本</li>
                    </ul>
                </div>

                <h2>現場KPIへの落とし込み</h2>
                <table>
                    <thead>
                        <tr><th>経営指標</th><th>現場KPI</th><th>担当</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>売上高利益率↑</td><td>粗利率の高い商品のミックス改善</td><td>営業部</td></tr>
                        <tr><td>売上高利益率↑</td><td>不良率 0.5%以下</td><td>製造部</td></tr>
                        <tr><td>総資産回転率↑</td><td>在庫回転日数 30日以内</td><td>SCM</td></tr>
                        <tr><td>総資産回転率↑</td><td>売掛金回収サイト 45日以内</td><td>経理部</td></tr>
                        <tr><td>財務レバレッジ</td><td>D/Eレシオの最適化</td><td>CFO</td></tr>
                    </tbody>
                </table>

                <h2>KPIツリーの設計ポイント</h2>
                <ul>
                    <li><strong>トップダウン</strong>で経営指標を分解し、<strong>ボトムアップ</strong>で現場が追える指標にする</li>
                    <li>各KPIには<strong>数値目標</strong>と<strong>責任者</strong>を明確にする</li>
                    <li>KPI間の<strong>因果関係</strong>を意識する（在庫削減 → 回転率UP → ROE向上）</li>
                    <li>定期的にKPIの<strong>妥当性をレビュー</strong>する（形骸化を防ぐ）</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">役員への問いかけ</div>
                    <p>「御社のROE目標を達成するために、各部門が追うべきKPIは明確ですか？ 経営指標と現場の行動が"数字の糸"で繋がっていますか？」</p>
                </div>
            `,
            quiz: [
                { id: "q202_1", type: "choice", question: "デュポン分析でROEを分解する3要素に含まれないものは？", options: ["売上高利益率", "総資産回転率", "限界利益率", "財務レバレッジ"], answer: 2, explanation: "デュポン分析のROE3分解は「売上高利益率 × 総資産回転率 × 財務レバレッジ」です。限界利益率は含まれません。" },
                { id: "q202_2", type: "choice", question: "総資産回転率を向上させるKPIとして適切なのは？", options: ["粗利率の改善", "在庫回転日数の短縮", "人件費の削減", "借入金の増加"], answer: 1, explanation: "在庫回転日数の短縮は総資産を圧縮し、総資産回転率（売上高÷総資産）を向上させます。" },
                { id: "q202_3", type: "choice", question: "KPIツリー設計で重要なポイントでないものは？", options: ["数値目標と責任者の明確化", "KPI間の因果関係の意識", "できるだけ多くのKPIを設定する", "定期的な妥当性レビュー"], answer: 2, explanation: "KPIは多ければよいわけではなく、重要な指標に絞り込み、因果関係を意識して設計することが重要です。" },
                { id: "q202_4", type: "choice", question: "売上高利益率は何を何で割った指標ですか？", options: ["売上高 ÷ 総資産", "純利益 ÷ 売上高", "営業利益 ÷ 固定費", "限界利益 ÷ 変動費"], answer: 1, explanation: "売上高利益率 = 純利益 ÷ 売上高 であり、「稼ぐ力」を示します。" },
                { id: "q202_5", type: "fill", question: "ROEを3つの要素に分解する手法を何分析と呼びますか？（カタカナで）", answer: "デュポン", explanation: "デュポン分析は、米国のデュポン社が開発したROE分解手法で、経営指標を現場のKPIに落とし込む際の基本フレームワークです。" }
            ]
        }
    ]
};
