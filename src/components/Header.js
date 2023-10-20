import React from 'react';
import headerBackground from '../assets/images/HeaderBackgroundMobile.png';

export const Header = (props) => {

    function actionLink(e) {
        props.changePage(e.target.id);
    }

    return (
        <div className="headercontainer">
            <img className="header-background" src={headerBackground} alt="headerbackground" />
            <div className="navbar">
                <div className="logo">
                    C<span className="logotexthighlight">H</span>
                </div>
                <div className="links">
                    <div className="home" id="home" onClick={actionLink}>HOME</div>
                    <div className="portfolio" id="portfolio" onClick={actionLink}>PLAYGROUND</div>
                </div>
            </div>
        </div>
    )

}