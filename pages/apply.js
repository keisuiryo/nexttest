import Wrapper from './modules/wrapper'

export const config= {
  unstable_runtimeJS: true
}
export default function Home() {
    return (
        <Wrapper id="apply" title="募集要項" desc="東北大学YMCA渓水寮は東北大学に通う男子・女子の新入寮生を募集しています。お気軽に寮までご連絡ください。">
            <div className="apply-main-container">
            {/*<!--<h2 className="contents-title">はじめに</h2>
                <div className="desc-plain">
                    <p>東北大学YMCA渓水寮に興味を持っていただきありがとうございます。</p>
                    <p>渓水寮では仙台市の大学に通う大学生・大学院生を受け入れています。</p>
                    <p> クリスチャンかどうかに関わらず入寮できますし、中途入寮や３年次編入・大学院からの入寮も受け付けております。</p>-->
            <!--<p>質問や見学の申し込み等ありましたらお気軽にご質問ください。</p>
            <p>なお、Twitterにも生活の様子をのせています。よろしければどうぞ。</p>
            <a href="https://twitter.com/keisuiryo" className="btn-fab btn">Twitter →</a>-->
            <!--</div>-->
            <!--<div className="important">

                <h3><span>i</span>入寮募集について<br>(3/22更新)</h3>
                <p>今年度の入寮募集は終了いたしました。たくさんのご応募ありがとうございました。</p>
                <!--table>
                    <tr>
                        <td>連絡〆切</td>
                        <td>3/20(日)</td>
                    </tr>
                    <tr>
                        <td>見学・面接可能最終日</td>
                        <td>3/21(火)</td>
                    </tr>
                    <tr>
                        <td>入寮可否通知</td>
                        <td>3/22(水)</td>
                    </tr>
                </table>
    </div>
            <h2 className="contents-title">連絡先</h2>

            <p className="contents-desc">質問や入寮希望を受け付けています。メールもしくは公式LINEでご連絡ください。</p>
            <div className="link-box">
                <a href="https://lin.ee/6XMmw9l"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                        alt="友だち追加" height="36" border="0"></a>
                <a className="link icon-text" href="mailto:ryo@keisuiryo.jp"><svg className="link-icon">
                        <use href="#svg-email" />
                    </svg>ryo@keisuiryo.jp</a>
                <a className="link icon-text" href="tel:+810202293564"><svg className="link-icon">
                        <use href="#svg-tel" />
                    </svg>022-249-3564</a>
    </div>-->*/}
            <h2 className="contents-title apply-contents-title">入寮の流れ</h2>
            <div className="flaw-box">
                <h4 className="flaw-title"><span className="flaw-num">1</span>見学</h4>
                <p className="flaw-text">渓水寮での生活について対面もしくはオンラインでご説明します。お気軽に公式LINEもしくはメールでご連絡ください。受験当日の見学・直前の見学の連絡にも対応できます。</p>
                <a href="https://lin.ee/6XMmw9l"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                    alt="友だち追加" height="36" border="0" /></a>
                <a className="link icon-text" href="mailto:ryo@keisuiryo.jp"><svg className="link-icon">
                    <use href="#svg-email" />
                </svg>ryo@keisuiryo.jp</a>
                <a className="link icon-text" href="tel:+810202293564"><svg className="link-icon">
                    <use href="#svg-tel" />
                </svg>022-249-3564</a>
                <h4 className="flaw-title"><span className="flaw-num">2</span>入寮申し込み</h4>
                <p className="flaw-text">申し込み用紙・面接用事前質問シートを公式LINE・メールもしくは郵送で送ってください。見学の際に手渡しでも大丈夫です。</p>
                <div className="files-box">
                    {/*<!--<a href="/apply/assets/渓水寮応募用紙.pdf" className="icon-text file-link" download="渓水寮応募用紙.pdf"><svg
                            className="link-icon">
                            <use href="#svg-pdf" />
    </svg>応募用紙</a>-->*/}
                    <a href="/apply/assets/渓水寮応募用紙.docx" className="icon-text file-link" download="渓水寮応募用紙.docx"><svg
                        className="link-icon">
                        <use href="#svg-docx" />
                    </svg>応募用紙</a>
                    {/*<!--<a href="/apply/assets/渓水寮質問シート.pdf" className="icon-text file-link" download="渓水寮質問シート.pdf"><svg
                            className="link-icon">
                            <use href="#svg-pdf" />
</svg>質問シート</a>-->*/}
                    <a href="/apply/assets/渓水寮質問シート.docx" className="icon-text file-link" download="渓水寮質問シート.docx"><svg
                        className="link-icon">
                        <use href="#svg-docx" />
                    </svg>質問シート</a>
                </div>
                <h4 className="flaw-title"><span className="flaw-num">3</span>面接</h4>
                <p className="flaw-text">
                    在寮生が面接を行います。オンラインでの面接や見学後その場で面接を行うこともできます。
                </p>
                <h4 className="flaw-title"><span className="flaw-num">4</span>入寮</h4>
                <p className="flaw-text">春から一緒に生活できるのを楽しみにしています。
                </p>
            </div>
            <h2 className="contents-title apply-contents-title">アクセス</h2>
            <p className="contents-desc">
                地下鉄『仙台駅』４番線より東西線に乗り終点『八木山動物公園』で下車。<br />市バス『八木山動物公園駅』３番のりばより、４５系統・７０５系統「緑ヶ丘三丁目」行き、<br />または４０系統「緑ヶ丘三丁目・長町駅東口・市立病院」行きに乗車。<br />『青葉苑団地前』停留所で降車後、徒歩４０秒、ローソン右隣の建物です。
            </p>
            {/*<!--<h2 className="contents-title">募集要項</h2>
            <p>対象:仙台市の大学に通う大学生<br>
                募集人数:3名<br>
                選抜方法:面接による<br>
                日程:AO2、AO3、前・後期入寮受付中です
            </p>-->*/}
            </div>
        </Wrapper>
    )
}