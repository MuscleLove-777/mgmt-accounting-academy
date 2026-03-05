const LEVEL4_DATA = {
    id: 4,
    title: "原価管理と経営ダッシュボード",
    icon: "🏭",
    description: "原価企画・コストマネジメントとROIC経営を理解する",
    modules: [
        {
            id: 401,
            title: "原価企画（ターゲットコスティング）",
            duration: "15分",
            content: `
                <h2>原価企画の考え方</h2>
                <p>従来のコスト管理と原価企画では、発想が根本的に異なります。</p>

                <table>
                    <thead>
                        <tr><th></th><th>従来のコスト管理</th><th>原価企画</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>アプローチ</strong></td><td>コストプラス方式</td><td>マーケットマイナス方式</td></tr>
                        <tr><td><strong>計算式</strong></td><td>原価 + 利益 = 価格</td><td>価格 - 目標利益 = 許容原価</td></tr>
                        <tr><td><strong>発想の起点</strong></td><td>製造原価を積み上げる</td><td>市場価格から逆算する</td></tr>
                        <tr><td><strong>問題点</strong></td><td>市場で売れない価格になる可能性</td><td>設計段階でのコスト削減努力が必要</td></tr>
                        <tr><td><strong>成果</strong></td><td>原価に利益を乗せるだけ</td><td>競争力のある価格で利益を確保</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">ポイント</div>
                    <p>原価企画は「作ってからコストを下げる」のではなく、「設計段階でコストを作り込む」考え方です。製品コストの80%は設計段階で決まると言われています。</p>
                </div>

                <h2>コスト削減の4つのレバー</h2>
                <table>
                    <thead>
                        <tr><th>レバー</th><th>手法</th><th>特徴</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>1. 設計変更</strong></td><td>VE/VA、部品共通化</td><td>効果が最も大きい</td></tr>
                        <tr><td><strong>2. 調達改善</strong></td><td>相見積、集中購買</td><td>即効性がある</td></tr>
                        <tr><td><strong>3. 工程改善</strong></td><td>リーン生産、自動化</td><td>継続的な改善</td></tr>
                        <tr><td><strong>4. 規模効果</strong></td><td>量産効果、稼働率UP</td><td>中長期で効果発揮</td></tr>
                    </tbody>
                </table>

                <h3>VE（Value Engineering）とは</h3>
                <p>機能を維持しながらコストを下げる、または同じコストで機能を向上させる体系的手法です。</p>
                <p><strong>価値 ＝ 機能 ÷ コスト</strong></p>
                <ul>
                    <li>機能を維持してコストを下げる → 価値UP</li>
                    <li>コストを維持して機能を上げる → 価値UP</li>
                    <li>機能をわずかに下げてコストを大幅に下げる → 価値UP</li>
                </ul>
            `,
            quiz: [
                { id: "q401_1", type: "choice", question: "原価企画（ターゲットコスティング）の計算式は？", options: ["原価 + 利益 = 価格", "価格 - 目標利益 = 許容原価", "売上 - 変動費 = 限界利益", "固定費 ÷ 限界利益率 = BEP"], answer: 1, explanation: "原価企画は市場価格から目標利益を差し引いて許容原価を求める「マーケットマイナス」方式です。" },
                { id: "q401_2", type: "choice", question: "製品コストの約何%が設計段階で決まると言われていますか？", options: ["20%", "50%", "80%", "95%"], answer: 2, explanation: "製品コストの約80%は設計段階で決まるため、原価企画では設計段階でのコスト作り込みが重要です。" },
                { id: "q401_3", type: "choice", question: "コスト削減の4つのレバーで最も効果が大きいのは？", options: ["設計変更", "調達改善", "工程改善", "規模効果"], answer: 0, explanation: "設計変更（VE/VA、部品共通化）は製品の根本からコストを見直すため、最も大きな削減効果が期待できます。" },
                { id: "q401_4", type: "choice", question: "VEの価値の公式は？", options: ["価値 = コスト × 機能", "価値 = 機能 ÷ コスト", "価値 = コスト ÷ 機能", "価値 = 機能 - コスト"], answer: 1, explanation: "VEでは「価値 = 機能 ÷ コスト」と定義し、機能を維持しつつコストを下げることで価値を高めます。" },
                { id: "q401_5", type: "fill", question: "機能を維持しながらコストを下げる体系的手法をアルファベット2文字で何と呼びますか？", answer: "VE", explanation: "VE（Value Engineering）は、機能とコストの最適バランスを追求する手法です。" }
            ]
        },
        {
            id: 402,
            title: "経営ダッシュボードとROIC経営",
            duration: "15分",
            content: `
                <h2>役員が毎月見るべき7つの数字</h2>
                <table>
                    <thead>
                        <tr><th>#</th><th>指標</th><th>見るポイント</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td><strong>売上高</strong></td><td>予実・前年比</td></tr>
                        <tr><td>2</td><td><strong>限界利益率</strong></td><td>収益構造の変化</td></tr>
                        <tr><td>3</td><td><strong>営業利益</strong></td><td>予実差異分析</td></tr>
                        <tr><td>4</td><td><strong>ROIC</strong></td><td>投下資本利益率</td></tr>
                        <tr><td>5</td><td><strong>営業CF</strong></td><td>キャッシュの流れ</td></tr>
                        <tr><td>6</td><td><strong>運転資本回転日数</strong></td><td>資金効率</td></tr>
                        <tr><td>7</td><td><strong>受注残・パイプライン</strong></td><td>将来の売上見通し</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">信号機表示の基準</div>
                    <p>計画比 95%以上 → 正常（緑）<br>
                    計画比 90〜95% → 注意（黄）<br>
                    計画比 90%未満 → 警告（赤）</p>
                </div>

                <h2>ROIC経営の導入</h2>
                <p><strong>ROIC（投下資本利益率）</strong>＝ 税引後営業利益 ÷ 投下資本</p>
                <p>ROICはROEよりも事業の実力を正確に測る指標として注目されています。</p>

                <h3>ROICを分解して改善する</h3>
                <table>
                    <thead>
                        <tr><th>改善の方向</th><th>具体的施策</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>利益率の改善</strong></td><td>売上増・コスト減、高付加価値化、不採算事業の整理</td></tr>
                        <tr><td><strong>資本効率の改善</strong></td><td>在庫削減、遊休資産売却、CCC（キャッシュ・コンバージョン・サイクル）短縮</td></tr>
                    </tbody>
                </table>

                <h3>ROEからROICへ</h3>
                <p>ROEは財務レバレッジ（借入）で水増しできますが、ROICは投下資本に対する事業の本質的な収益性を測ります。</p>
                <ul>
                    <li>ROICは<strong>部門別に計算</strong>できるため、事業ごとの資本効率を比較できる</li>
                    <li>ROIC > WACC なら、その事業は<strong>企業価値を創造</strong>している</li>
                    <li>ROIC < WACC なら、その事業は<strong>企業価値を毀損</strong>している</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">トレンドワード</div>
                    <p>「ROEからROICへ。投下資本に対するリターンを部門別に可視化することで、"稼ぐ力"と"資本の使い方"の両面から経営を評価できます。」</p>
                </div>
            `,
            quiz: [
                { id: "q402_1", type: "choice", question: "ROICの計算式は？", options: ["純利益 ÷ 自己資本", "税引後営業利益 ÷ 投下資本", "営業利益 ÷ 売上高", "売上高 ÷ 総資産"], answer: 1, explanation: "ROIC = 税引後営業利益 ÷ 投下資本 です。事業の本質的な収益性を測ります。" },
                { id: "q402_2", type: "choice", question: "ROIC < WACC の事業は何を意味しますか？", options: ["企業価値を創造している", "企業価値を毀損している", "損益分岐点にある", "成長段階にある"], answer: 1, explanation: "ROICがWACCを下回る事業は、資本コスト以上のリターンを生んでおらず、企業価値を毀損しています。" },
                { id: "q402_3", type: "choice", question: "経営ダッシュボードで「黄色信号」となる基準は？", options: ["計画比95%以上", "計画比90〜95%", "計画比90%未満", "計画比80%未満"], answer: 1, explanation: "計画比90〜95%は注意レベル（黄色）で、改善のアクションを検討すべき段階です。" },
                { id: "q402_4", type: "choice", question: "ROEに対するROICの優位点は何ですか？", options: ["計算が簡単", "財務レバレッジの影響を排除して事業の実力を測れる", "株主にとってわかりやすい", "国際比較がしやすい"], answer: 1, explanation: "ROICは借入（レバレッジ）の影響を排除して、事業に投下した資本に対する収益性を純粋に測定できます。" },
                { id: "q402_5", type: "fill", question: "キャッシュの回収にかかる日数を示す指標の英語略称は？（アルファベット3文字）", answer: "CCC", explanation: "CCC（Cash Conversion Cycle）はキャッシュ・コンバージョン・サイクルの略で、仕入から現金回収までの日数を示します。" }
            ]
        }
    ]
};
