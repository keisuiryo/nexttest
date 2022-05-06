import Stack from './modules/stack'
import Wrapper from './modules/wrapper'

export const config= {
  unstable_runtimeJS: true
}
export default function Home() {
    function distance(location, distance) {
        return (
            <div className="distance-box">
                <p className="icon-text location-icon-text"><svg className="svg-icon location-svg-icon">
                    <use href="#svg-walk" />
                </svg>{distance}</p>
                <p className="icon-text location-icon-text"><svg className="svg-icon location-svg-icon">
                    <use href="#svg-location" />
                </svg>{location}</p>
            </div>);
    }
    return (
        <Wrapper id="location" title="立地・周辺施設" desc="東北大学YMCA渓水寮は東北大学から4kmほど距離があるため、バスや地下鉄、原付で登校する寮生が多いです。バス停やコンビニ、ドラッグストア、スーパーなど必要なお店は全て徒歩圏内にあります。">
            <section>
                <h2 className="contents-title">通学</h2>
                <div className="commute-box">
                    <div className="icon-text commute-point commute-dorm"><svg xmlns="http://www.w3.org/2000/svg"
                        height="32px" viewBox="0 0 24 24" width="32px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                    </svg>渓水寮</div>
                    <div className="icon-text commute-point commute-univ"><svg xmlns="http://www.w3.org/2000/svg"
                        height="32px" viewBox="0 0 24 24" width="32px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                    </svg>東北大学</div>
                    <div className="icon-text commute-point commute-station">動物公園駅</div>
                    <div className="commute-line commute-bus-line"></div>
                    <div className="commute-line commute-walk-line"></div>
                    <div className="commute-line commute-train-line"></div>
                    <div className="commute-line commute-bike-line"></div>
                    <div className="icon-text commute-descr commute-bus-descr"><svg xmlns="http://www.w3.org/2000/svg"
                        height="32px" viewBox="0 0 24 24" width="32px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M12 2c-4.42 0-8 .5-8 4v10c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4zm5.66 2.99H6.34C6.89 4.46 8.31 4 12 4s5.11.46 5.66.99zm.34 2V10H6V6.99h12zm-.34 9.74l-.29.27H6.63l-.29-.27C6.21 16.62 6 16.37 6 16v-4h12v4c0 .37-.21.62-.34.73z" />
                        <circle cx="8.5" cy="14.5" r="1.5" />
                        <circle cx="15.5" cy="14.5" r="1.5" />
                    </svg>10分</div>
                    <div className="icon-text commute-descr commute-walk-descr"><svg xmlns="http://www.w3.org/2000/svg"
                        height="32px" viewBox="0 0 24 24" width="32px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.56-.89-1.68-1.25-2.65-.84L6 8.3V13h2V9.6l1.8-.7" />
                    </svg>20分</div>
                    <div className="icon-text commute-descr commute-bike-descr"><svg xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 20 20" height="32px" viewBox="0 0 20 20" width="32px"
                        fill="#000000">
                        <g>
                            <rect fill="none" height="20" width="20" x="0" y="0" />
                            <path
                                d="M14.5,9c-0.16,0-0.31,0.02-0.45,0.05L13,8h1.5V6.5l-2,1L11,6H9.01v1h1.58l1,1H9.5L7,9L6,8H3v1h2.5C4.12,9,3,10.12,3,11.5 C3,12.88,4.12,14,5.5,14c1.23,0,2.24-0.88,2.45-2.05L9,13h1.5l2.03-4.06l0.52,0.52C12.42,9.92,12,10.66,12,11.5 c0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5C17,10.12,15.88,9,14.5,9z M5.5,13C4.67,13,4,12.33,4,11.5S4.67,10,5.5,10 S7,10.67,7,11.5S6.33,13,5.5,13z M14.5,13c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S15.33,13,14.5,13z" />
                        </g>
                    </svg>10分</div>
                    <div className="icon-text commute-descr commute-train-descr"><svg xmlns="http://www.w3.org/2000/svg"
                        height="32px" viewBox="0 0 24 24" width="32px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M17.8 2.8C16 2.09 13.86 2 12 2s-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zM9.17 20l1.5-1.5h2.66l1.5 1.5H9.17zm-2.16-6V9h10v5h-10zm9.49 2c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-8-1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM20 20h-3.5v-.38l-1.15-1.16c1.49-.17 2.65-1.42 2.65-2.96V9c0-2.63-3-3-6-3s-6 .37-6 3v6.5c0 1.54 1.16 2.79 2.65 2.96L7.5 19.62V20H4V8.86c0-2 1.01-3.45 2.93-4.2C8.41 4.08 10.32 4 12 4s3.59.08 5.07.66c1.92.75 2.93 2.2 2.93 4.2V20z" />
                    </svg>10分</div>
                </div>
                <p className="">寮の目の前に、最寄りのバス停があります。</p>
            </section>
            <div id="map-box">
                <iframe title="渓水寮の周辺地図" width="400" height="600" loading="lazy" allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?q=%E6%9D%B1%E5%8C%97%E5%A4%A7%E5%AD%A6YMCA&key=AIzaSyA8C83iekU00w03u-J8Y-E52oCcyD-10jU"></iframe>
            </div>
            <h2 className="contents-title">周辺施設</h2>
            <p></p>
            <div className="stack-container">
                <Stack title="ローソン" imageSrc="/location/lawson.webp" imageAlt="渓水寮の隣にあるローソン">
                    {distance("寮のとなり", "30秒")}
                </Stack>
                <Stack title="ツルハドラッグ" imageSrc="/location/turuha.webp" imageAlt="東北大学YMCA渓水寮の斜め前にあるドラッグストア">
                    {distance("寮の斜め前", "90秒")}
                    <p className="contents-desc">野菜やお肉などの生鮮食品も置いてあります。</p>
                </Stack>
                <Stack title="郵便局" imageSrc="/location/post.webp" imageAlt="渓水寮の２軒隣にある郵便局">
                    {distance("寮の2軒となり", "45秒")}
                </Stack>
                <Stack title="大波医院" imageSrc="/location/hospital.webp" imageAlt="渓水寮の3けん隣にある病院、内科や消化器内科が専門">
                    {distance("寮の3軒となり", "60秒")}
                    <p>内科・消化器内科・皮膚科のお医者さんです。</p>
                </Stack>
                <Stack title="スーパー" imageSrc="/location/super.webp" imageAlt="渓水寮から徒歩１０分程度で着くヨークベニマル">
                    {distance("10分", "5分")}
                </Stack>
            </div>
            {/*<section>
                        <h2 className="contents-title">周辺施設</h2>
                        <p></p>
                        <div className="stack-container">
                            <div className="stack-box">
                                <img loading="lazy" width="400" height="300" className="image" src="/location/assets/lawson.webp"
                                    alt="渓水寮の隣にあるローソン">
                                    <p className="contents-title-small">ローソン</p>
                                    <div className="distance-box">
                                        <p className="icon-text"><svg className="svg-icon">
                                            <use href="#svg-walk" />
                                        </svg>３０秒</p>
                                        <p className="icon-text"><svg className="svg-icon">
                                            <use href="#svg-location" />
                                        </svg>寮のとなり</p>
                                    </div>
                            </div>
                            <div className="stack-box">

                                <img loading="lazy" width="400" height="300" className="image" src="/location/assets/turuha.webp"
                                    alt="東北大学YMCA渓水寮の斜め前にあるドラッグストア">
                                    <p className="contents-title-small">ドラッグストア</p>
                                    <div className="distance-box">
                                        <p className="icon-text"><svg className="svg-icon">
                                            <use href="#svg-walk" />
                                        </svg>９０秒</p>
                                        <p className="icon-text"><svg className="svg-icon">
                                            <use href="#svg-location" />
                                        </svg>寮のななめまえ</p>

                                    </div>
                                    <p className="contents-desc">野菜やお肉などの生鮮食品も置いてあります。</p>
                            </div>
                            <div className="stack-box">

                                <img loading="lazy" width="400" height="300" className="image" src="/location/assets/post.webp"
                                    alt="渓水寮の２軒隣にある郵便局">
                                    <p className="contents-title-small">郵便局</p>
                                    <div className="distance-box">

                                        <p className="icon-text"><svg className="svg-icon">
                                            <use href="#svg-walk" />
                                        </svg>４５秒</p>
                                        <p className="icon-text"><svg className="svg-icon">
                                            <use href="#svg-location" />
                                        </svg>となりのとなり</p>
                                    </div>
                                    <!--<p className="contents-desc">ATMは平日は９時から５時半まで、休日は９時から５時まで使えます</p>-->
                            </div>
                            <div className="stack-box">

                                <img loading="lazy" width="400" height="300" className="image" src="/location/assets/hospital.webp"
                                    alt="渓水寮の3けん隣にある病院、内科や消化器内科が専門">
                                    <p className="contents-title-small">病院</p>
                                    <div className="distance-box">
                                        <p className="icon-text"><svg className="svg-icon">
                                            <use href="#svg-walk" />
                                        </svg>６０秒</p>
                                        <p className="icon-text"><svg className="svg-icon">
                                            <use href="#svg-location" />
                                        </svg>３軒となり</p>
                                    </div>
                                    <p className="contents-desc"></p>
                                    <!--<div className="person-box" id="person-box-l1">
                                        <p className="person-name-small">佐藤（４年）
                                        </p>
                                        <p className="message-text">
                                            毎年、花粉症のお薬でお世話になっています。
                                        </p>
                                    </div>-->
                            </div>
                            <div className="stack-box">

                                <img loading="lazy" width="400" height="300" className="image" src="/location/assets/york.webp"
                                    alt="渓水寮から徒歩１０分程度で着くヨークベニマル">
                                    <p className="contents-title-small">スーパー</p>
                                    <div className="distance-box">
                                        <p className="icon-text"><svg className="svg-icon">
                                            <use href="#svg-walk" />
                                        </svg>１０分</p>
                                        <p className="icon-text"><svg className="svg-icon">
                                            <use href="#svg-bike" />
                                        </svg>５分</p>

                                    </div>
                                    <!--<p className="contents-desc">食品などが置いてあるスーパーです</p>-->
                                    <!--<div className="person-box" id="person-box-l1">
                                        <p className="person-name-small">倉本（1年）
                                        </p>
                                        <p className="message-text">
                                            土日は食事が出ないので買い物に出かけます
                                        </p>
                                    </div>-->
                            </div>
                            <!--<div className="stack-box">

                                <img loading="lazy" width="400" height="300" className="image" src="/location/assets/coop.webp" alt="東北大学への通学路の近くにある生協">
                                    <p className="contents-title-small">生協</p>
                                    <div className="distance-box">
                                        <p className="icon-text"><svg className="svg-icon">
                                            <use href="#svg-location" />
                                        </svg>通学路の近く</p>
                                    </div>
                                    <p className="contents-desc">食品から日用品まである程度置いてます</p>
                                    <div className="person-box" id="person-box-l1">
                                        <p className="person-name-small">倉本（1年）
                                        </p>
                                        <p className="message-text">
                                            通学路の近くにあるので、帰り際に寄ることが多いです
                                        </p>
                                    </div>
                            </div>-->

                        </div>
    </section>*/}

        </Wrapper>
    )
}