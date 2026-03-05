const LEVEL6_DATA = {
    id: 6,
    title: "総合演習と経営課題の処方箋",
    icon: "🏆",
    description: "経営課題への管理会計活用と総まとめ",
    modules: [
        {
            id: 601,
            title: "経営課題と管理会計の処方箋",
            duration: "15分",
            content: `
<h2>よくある経営課題への処方箋</h2>
<p>実際のビジネス現場でよくある悩みに対して、管理会計がどう解決策を提供するかを見ていきます。</p>

<table>
<thead><tr><th>経営課題</th><th>管理会計の処方箋</th><th>期待効果</th></tr></thead>
<tbody>
<tr><td><strong>売上は伸びてるのに利益が出ない</strong></td><td>限界利益分析で不採算取引を特定</td><td>利益率改善</td></tr>
<tr><td><strong>どの事業に投資すべきかわからない</strong></td><td>部門別ROIC + NPV分析</td><td>投資判断の精度向上</td></tr>
<tr><td><strong>予算を作っても形骸化する</strong></td><td>ローリングフォーキャスト導入</td><td>予算の実効性向上</td></tr>
<tr><td><strong>在庫が膨らんで資金繰りが苦しい</strong></td><td>CCC分析 + 在庫回転管理</td><td>運転資本の最適化</td></tr>
<tr><td><strong>値引き要請にどこまで応じるべきか</strong></td><td>限界利益ベースの受注判断基準</td><td>利益を守る価格交渉</td></tr>
<tr><td><strong>現場にコスト意識がない</strong></td><td>KPIツリーで全社→部門→個人に分解</td><td>数字で語る組織文化</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
管理会計は「答え」を出すものではなく「問いを正しく立てる」ためのツールです。課題を数字で可視化することで、的確な意思決定ができるようになります。
</div>
`,
            quiz: [
                {
                    id: "q601_1",
                    type: "choice",
                    question: "「売上は伸びているのに利益が出ない」という課題に最適な管理会計手法は？",
                    options: ["ローリングフォーキャスト", "限界利益分析", "CCC分析", "NPV分析"],
                    answer: 1,
                    explanation: "限界利益分析により、不採算取引を特定し、利益率の改善につなげることができます。"
                },
                {
                    id: "q601_2",
                    type: "choice",
                    question: "予算が形骸化する問題への処方箋として適切なものは？",
                    options: ["部門別ROIC分析", "在庫回転管理", "ローリングフォーキャスト", "KPIツリー"],
                    answer: 2,
                    explanation: "ローリングフォーキャストは、固定的な年度予算ではなく常にアップデートされる予測を行う手法で、予算の実効性を高めます。"
                },
                {
                    id: "q601_3",
                    type: "choice",
                    question: "現場のコスト意識を高めるために有効な手法は？",
                    options: ["NPV分析", "CCC分析", "KPIツリー", "限界利益分析"],
                    answer: 2,
                    explanation: "KPIツリーにより全社目標を部門→個人レベルに分解することで、各自が数字を意識する組織文化を作れます。"
                }
            ]
        },
        {
            id: 602,
            title: "感覚の経営から数字の経営へ",
            duration: "15分",
            content: `
<h2>管理会計が変える経営の景色</h2>
<p>管理会計を導入することで、企業の経営スタイルは根本的に変わります。</p>

<table>
<thead><tr><th>Before（感覚の経営）</th><th>After（数字の経営）</th></tr></thead>
<tbody>
<tr><td>なんとなく儲かっている</td><td><strong>どの事業が、なぜ、いくら稼いでいるか</strong>が明確</td></tr>
<tr><td>売上至上主義</td><td><strong>利益とROIC</strong>で真の収益性を評価</td></tr>
<tr><td>過去の延長で計画</td><td><strong>データに基づく未来志向</strong>の意思決定</td></tr>
<tr><td>コスト削減=一律カット</td><td><strong>戦略的コストマネジメント</strong>（投資すべきところに投資）</td></tr>
</tbody>
</table>

<div class="info-box success">
<div class="info-box-title">管理会計は「経営の共通言語」</div>
数字で語り、数字で決め、数字で検証する。その仕組みが、企業の競争力を根本から変えます。
</div>

<h2>管理会計の5つの原則</h2>
<ol>
<li><strong>タイムリーに</strong>：月次ではなく週次・日次で数字を見る</li>
<li><strong>セグメント別に</strong>：全社一括ではなく部門・製品・顧客別に分析</li>
<li><strong>未来志向で</strong>：過去の集計ではなく将来の予測と意思決定に活用</li>
<li><strong>アクションにつなげる</strong>：分析結果を具体的な施策に落とし込む</li>
<li><strong>継続的に改善する</strong>：PDCAサイクルを回し続ける</li>
</ol>
`,
            quiz: [
                {
                    id: "q602_1",
                    type: "choice",
                    question: "管理会計導入後の「数字の経営」の特徴として正しいものは？",
                    options: ["売上高のみで業績を評価する", "年度予算は一度作ったら変更しない", "利益とROICで真の収益性を評価する", "コスト削減は一律カットで行う"],
                    answer: 2,
                    explanation: "数字の経営では、売上だけでなく利益とROIC（投下資本利益率）で真の収益性を評価します。"
                },
                {
                    id: "q602_2",
                    type: "choice",
                    question: "管理会計の原則として最も適切なものは？",
                    options: ["年次で数字を確認すれば十分", "全社一括で分析すべき", "過去の実績を正確に記録することが最重要", "分析結果を具体的なアクションにつなげる"],
                    answer: 3,
                    explanation: "管理会計は分析のための分析ではなく、具体的な施策やアクションにつなげることが重要です。"
                },
                {
                    id: "q602_3",
                    type: "choice",
                    question: "管理会計が「経営の共通言語」と呼ばれる理由は？",
                    options: ["英語で記述するため国際共通", "数字で語り、数字で決め、数字で検証するから", "法律で定められた形式だから", "全社員が同じソフトウェアを使うから"],
                    answer: 1,
                    explanation: "管理会計は組織全体が共通の数字を使ってコミュニケーションする仕組みであり、それが「経営の共通言語」と呼ばれる所以です。"
                }
            ]
        },
        {
            id: 603,
            title: "総合確認テスト",
            duration: "20分",
            content: `
<h2>管理会計アカデミー 総合確認</h2>
<p>これまで学んだ全レベルの内容を振り返り、知識を定着させましょう。</p>

<h3>学習内容の振り返り</h3>
<table>
<thead><tr><th>レベル</th><th>学んだこと</th><th>キーワード</th></tr></thead>
<tbody>
<tr><td>Level 1</td><td>管理会計の基礎</td><td>変動費・固定費、損益分岐点、限界利益</td></tr>
<tr><td>Level 2</td><td>原価計算と利益管理</td><td>直接原価計算、全部原価計算、CVP分析</td></tr>
<tr><td>Level 3</td><td>意思決定のための分析</td><td>部門別採算、セグメント分析、投資判断</td></tr>
<tr><td>Level 4</td><td>予算と業績管理</td><td>予実差異分析、KPI、ROIC、BSC</td></tr>
<tr><td>Level 5</td><td>導入ロードマップ</td><td>段階的導入、Phase 1/2/3</td></tr>
<tr><td>Level 6</td><td>経営課題と処方箋</td><td>課題→手法→効果のマッピング</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 次のステップ</div>
<ul>
<li>自社（または仮想企業）で損益分岐点を計算してみる</li>
<li>月次の限界利益レポートを作成してみる</li>
<li>部門別のKPIツリーを設計してみる</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q603_1",
                    type: "choice",
                    question: "損益分岐点売上高の計算式として正しいものは？",
                    options: ["固定費 ÷ 変動費率", "固定費 ÷ 限界利益率", "変動費 ÷ 固定費率", "売上高 × 変動費率"],
                    answer: 1,
                    explanation: "損益分岐点売上高 = 固定費 ÷ 限界利益率 です。限界利益率 = 1 - 変動費率 = 限界利益 ÷ 売上高 です。"
                },
                {
                    id: "q603_2",
                    type: "choice",
                    question: "ROICの計算式として正しいものは？",
                    options: ["営業利益 ÷ 売上高", "営業利益 ÷ 投下資本", "純利益 ÷ 総資産", "売上高 ÷ 総資産"],
                    answer: 1,
                    explanation: "ROIC（投下資本利益率）= 税引後営業利益（NOPAT）÷ 投下資本 です。事業に投入した資本の効率性を測る指標です。"
                },
                {
                    id: "q603_3",
                    type: "choice",
                    question: "管理会計と財務会計の最大の違いは？",
                    options: ["使用する通貨が異なる", "作成が義務か任意か", "数字の正確性の基準", "使用するソフトウェア"],
                    answer: 1,
                    explanation: "財務会計は法律で作成が義務付けられていますが、管理会計は社内の意思決定のために任意で作成するものです。"
                }
            ]
        }
    ]
};
