import React from 'react'
import github from "../assets/img/github.svg"
import telegram from "../assets/img/telegram.svg"
import invite from "../assets/img/invite.svg"
import twitter from "../assets/img/twitter.svg"
import download1 from "../assets/img/download (1).svg"
const Footer = () => {
    return (
        <div className='footer'>
            <footer className="css-cvbpzn eaedrph5">
                <div className="css-2tr2ip e1adrnnw2">
                    <div className="css-1o90vk6 eaedrph4">
                        <a target="_blank" className="css-e06fal eaedrph0"    >
                            Vote
                        </a>
                        <a target="_blank" className="css-e06fal eaedrph0" >
                            Stats
                        </a>
                        <a className="css-e06fal eaedrph6" href="/articles/">
                            Blog
                        </a>
                        <a target="_blank" className="css-e06fal eaedrph0"  >
                            Docs
                        </a>
                        <a target="_blank" className="css-e06fal eaedrph0"   >
                            Audit
                        </a>
                        <a className="css-e06fal eaedrph6" href="/media-kit/">
                            Media Kit
                        </a>
                    </div>
                    <div className="css-12uumbq eaedrph3">
                        <a target="_blank" className="css-10xmu1k eaedrph2"    >
                            <img
                                src={github}
                                alt="github"
                                className="css-1ncq4tc eaedrph1"
                            />
                        </a>
                        <a target="_blank" className="css-10xmu1k eaedrph2">
                            <img
                                src={telegram}
                                alt="telegram"
                                className="css-1ncq4tc eaedrph1"
                            />
                        </a>
                        <a target="_blank" className="css-10xmu1k eaedrph2"    >
                            <img
                                src={invite}
                                alt="discord"
                                className="css-1ncq4tc eaedrph1"
                            />
                        </a>
                        <a target="_blank" className="css-10xmu1k eaedrph2"  >
                            <img
                                src={twitter}
                                alt="twitter"
                                className="css-1ncq4tc eaedrph1"
                            />
                        </a>
                        <a target="_blank" className="css-10xmu1k eaedrph2"     >
                            <img
                                src={download1}
                                alt="reddit"
                                className="css-1ncq4tc eaedrph1"
                            />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer