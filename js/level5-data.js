const LEVEL5_DATA = {
    id: 5,
    title: "導入ロードマップと実践",
    icon: "🚀",
    description: "管理会計の導入計画と経営課題への処方箋を学ぶ",
    modules: [
        {
            id: 501,
            title: "管理会計導入のロードマップ",
            duration: "15分",
            content: `
                <h2>フェーズ別アプローチ</h2>
                <p>管理会計の導入は一度に全てを実装するのではなく、段階的に進めることが成功の鍵です。</p>

                <h3>Phase 1（0〜3ヶ月）：基盤構築</h3>
                <div class="info-box success">
                    <div class="info-box-title">Phase 1 の取り組み</div>
                    <ul>
                        <li>変動費/固定費の分解と整理</li>
                        <li>損益分岐点分析の実施</li>
                        <li>月次での限界利益レポートの作成</li>
                    </ul>
                </div>

                <h3>Phase 2（3〜6ヶ月）：可視化と分析の高度化</h3>
                <div class="info-box tip">
                    <div class="info-box-title">Phase 2 の取り組み</div>
                    <ul>
                        <li>部門別採算の可視化</li>
                        <li>KPIツリーの設計・運用開始</li>
                        <li>予実差異分析の高度化</li>
                        <li>原価企画の試行</li>
                    </ul>
                </div>

                <h3>Phase 3（6〜12ヶ月〜）：経営基盤としての定着</h3>
                <div class="info-box warning">
                    <div class="info-box-title">Phase 3 の取り組み</div>
                    <ul>
                        <li>ROIC経営の導入</li>
                        <li>ローリングフォーキャストの開始</li>
                        <li>経営ダッシュボードの構築</li>
                        <li>投資評価基準の標準化</li>
                    </ul>
                </div>

                <h2>導入成功のための条件</h2>
                <table>
                    <thead>
                        <tr><th>条件</th><th>説明</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>経営トップのコミットメント</strong></td><td>トップが「数字で経営する」姿勢を示すことが不可欠</td></tr>
                        <tr><td><strong>段階的な導入</strong></td><td>一度に全てを導入せず、成果を見せながら広げる</td></tr>
                        <tr><td><strong>現場の巻き込み</strong></td><td>経理部門だけでなく、営業・製造も当事者意識を持つ</td></tr>
                        <tr><td><strong>ITインフラの整備</strong></td><td>データの収集・加工・可視化を効率化するツールの導入</td></tr>
                        <tr><td><strong>人材育成</strong></td><td>管理会計の考え方を理解する人材を組織的に育てる</td></tr>
                    </tbody>
                </table>
            `,
            quiz: [
                { id: "q501_1", type: "choice", question: "管理会計導入のPhase 1で取り組むべきことは？", options: ["ROIC経営の導入", "変動費/固定費の分解と損益分岐点分析", "ローリングフォーキャスト", "経営ダッシュボードの構築"], answer: 1, explanation: "Phase 1ではまず基盤として、費用の分解と損益分岐点分析から始めます。" },
                { id: "q501_2", type: "choice", question: "管理会計導入の成功条件として最も重要なのは？", options: ["高価なシステムの導入", "経営トップのコミットメント", "外部コンサルの活用", "完璧なデータの準備"], answer: 1, explanation: "トップが「数字で経営する」姿勢を示すことが、管理会計を組織に定着させる最も重要な条件です。" },
                { id: "q501_3", type: "choice", question: "Phase 2で取り組むべき内容に含まれないのは？", options: ["部門別採算の可視化", "KPIツリーの設計", "ROIC経営の導入", "予実差異分析の高度化"], answer: 2, explanation: "ROIC経営の導入はPhase 3の取り組みです。Phase 2では可視化と分析の高度化に集中します。" },
                { id: "q501_4", type: "choice", question: "管理会計の導入で正しいアプローチは？", options: ["一度に全てを導入する", "段階的に成果を見せながら広げる", "経理部門だけで完結させる", "IT投資は後回しにする"], answer: 1, explanation: "段階的に導入し、各フェーズで成果を見せることで組織の理解と協力を得ながら進めることが重要です。" },
                { id: "q501_5", type: "fill", question: "管理会計導入のPhase 3で導入するのはROIC経営とローリング何ですか？（カタカナ7文字）", answer: "フォーキャスト", explanation: "Phase 3ではローリングフォーキャスト（常に先の見通しを更新する予算管理手法）を導入します。" }
            ]
        },
        {
            id: 502,
            title: "経営課題と管理会計の処方箋",
            duration: "15分",
            content: `
                <h2>よくある経営課題への処方箋</h2>
                <p>経営者が抱える典型的な課題に対して、管理会計はどのようなソリューションを提供できるのかを見ていきましょう。</p>

                <table>
                    <thead>
                        <tr><th>経営課題</th><th>管理会計の処方箋</th><th>期待効果</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>「売上は伸びてるのに利益が出ない」</td><td>限界利益分析 → 不採算取引の特定</td><td>利益率改善</td></tr>
                        <tr><td>「どの事業に投資すべきかわからない」</td><td>部門別ROIC + NPV分析</td><td>投資判断の精度向上</td></tr>
                        <tr><td>「予算を作っても形骸化する」</td><td>ローリングフォーキャスト導入</td><td>予算の実効性向上</td></tr>
                        <tr><td>「在庫が膨らんで資金繰りが苦しい」</td><td>CCC分析 + 在庫回転管理</td><td>運転資本の最適化</td></tr>
                        <tr><td>「値引き要請にどこまで応じるべきか」</td><td>限界利益ベースの受注判断基準</td><td>利益を守る価格交渉</td></tr>
                        <tr><td>「現場にコスト意識がない」</td><td>KPIツリーで全社→部門→個人に分解</td><td>数字で語る組織文化</td></tr>
                    </tbody>
                </table>

                <h2>管理会計が変える経営の景色</h2>
                <div class="info-box success">
                    <div class="info-box-title">感覚の経営から数字の経営へ</div>
                    <ul>
                        <li><strong>「なんとなく儲かっている」</strong> → どの事業が、なぜ、いくら稼いでいるか</li>
                        <li><strong>「売上至上主義」</strong> → 利益とROICで真の収益性を評価</li>
                        <li><strong>「過去の延長で計画」</strong> → データに基づく未来志向の意思決定</li>
                    </ul>
                </div>

                <h3>値引き判断の具体例</h3>
                <div class="info-box tip">
                    <div class="info-box-title">限界利益ベースの受注判断</div>
                    <p>顧客から「20%値引きしてくれたら大量発注する」と言われた場合：</p>
                    <ul>
                        <li>値引き後の限界利益がプラスなら → 固定費回収に貢献するため<strong>受注すべき</strong></li>
                        <li>値引き後の限界利益がマイナスなら → 受注するほど赤字が拡大するため<strong>断るべき</strong></li>
                        <li>ただし、将来の取引拡大や戦略的意味がある場合は<strong>総合判断</strong>が必要</li>
                    </ul>
                </div>

                <h2>管理会計は「経営の共通言語」</h2>
                <p>管理会計とは、組織全体が<strong>数字で語り、数字で決め、数字で検証する</strong>ための仕組みです。</p>
                <p>その仕組みが整えば、感覚に頼った経営から脱却し、企業の競争力を根本から変えることができます。</p>
            `,
            quiz: [
                { id: "q502_1", type: "choice", question: "「売上は伸びてるのに利益が出ない」場合の処方箋は？", options: ["売上をさらに伸ばす", "限界利益分析で不採算取引を特定する", "固定費を全て削る", "値上げする"], answer: 1, explanation: "売上増でも利益が出ない場合、限界利益分析で不採算取引（変動費率が高い取引）を特定し、改善・撤退することが有効です。" },
                { id: "q502_2", type: "choice", question: "値引き後の限界利益がプラスの場合、どう判断すべきですか？", options: ["必ず断るべき", "固定費回収に貢献するため受注すべき", "さらなる値引きを要求すべき", "判断できない"], answer: 1, explanation: "限界利益がプラスなら、固定費の回収に貢献するため、基本的には受注すべきと判断できます。" },
                { id: "q502_3", type: "choice", question: "「現場にコスト意識がない」場合の処方箋は？", options: ["罰則を設ける", "人員を削減する", "KPIツリーで全社→部門→個人に分解する", "外部コンサルに任せる"], answer: 2, explanation: "KPIツリーで経営指標を現場レベルに分解し、各人が追うべき数字を明確にすることでコスト意識を醸成します。" },
                { id: "q502_4", type: "choice", question: "管理会計が目指す経営の姿として正しいのは？", options: ["売上至上主義", "感覚に基づく意思決定", "数字で語り、数字で決め、数字で検証する", "コスト削減だけを追求する"], answer: 2, explanation: "管理会計は「経営の共通言語」として、数字に基づく合理的な意思決定を組織に根付かせることを目指します。" },
                { id: "q502_5", type: "fill", question: "管理会計は経営の何と呼ばれますか？（漢字4文字）", answer: "共通言語", explanation: "管理会計は組織全体が数字で対話するための「経営の共通言語」です。" }
            ]
        }
    ]
};
