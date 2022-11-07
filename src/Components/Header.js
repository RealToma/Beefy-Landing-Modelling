import React from 'react'
import Loggo from "../assets/img/download.svg"
import Header1 from "../assets/img/header1.png"

const Header = () => {
    return (
        <div className='header'>

            <header className="css-1oci2si evshdie4">
                <div className="css-1o7bzh6 evshdie3">
                    <a
                        aria-current="page"
                        className="evshdie1 css-1ecm1bo e1qosnin1"
                        href="/"
                    >
                        <img
                            src={Loggo}
                            height={40}
                            alt="Beefy"
                            className="css-1kcww0i e1qosnin0"
                        />
                    </a>

                    <div className="evshdie0 css-1kr54hn ewebfd80">
                        <img
                            src={Header1}
                            alt="BIFI"
                            width={24}
                            height={24}
                            className="css-1vj4xb3 ewebfd81"
                        />
                        <div className="css-1im7ki5 ewebfd82">$372.42</div>
                    </div>
                    <a
                        target="_blank"
                        href="https://app.beefy.com/"
                        className="css-17a68hq evshdie2"
                    >
                        Launch App
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Header