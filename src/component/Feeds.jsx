import React from 'react'

function Feeds({imgUrl, title, desc}) {
    return (
        <div>
            <section className="mw7 center avenir">
                <h2 className="baskerville fw1 ph3 ph0-l">News</h2>
                <article className="bt bb b--black-10">
                    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                        <div className="flex flex-column flex-row-ns">
                            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                <img src={imgUrl} className="db" alt="of a dimly lit room with a computer interface terminal." />
                            </div>
                            <div className="w-100 w-60-ns pl3-ns">
                                <h1 className="f3 fw1 baskerville mt0 lh-title">{title}</h1>
                                <p className="f6 f5-l lh-copy">{desc}</p>
                            </div>
                        </div>
                    </a>
                </article>
            </section>
        </div>
    )
}

export default Feeds