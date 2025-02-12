import React from "react";
import logo from "../../images/Logo.png";
import {Link} from "react-router-dom";

const Header = ({showSideCenter}) => {

    const renderSideLeft = () => (
        <div className="headerbar" title={"홈으로 가기"}>
            <nav>
                <ul>
                    <li>
                        <div className={"Header_logo"}>
                            STAR D
                            <div className={"Header_logo_img"}>
                                <img src={logo} width={"60px"}/>
                            </div>
                        </div>

                    </li>
                </ul>
            </nav>
        </div>
    );

    const renderSideCenter = () => (
        <div className="sidebar">
            <nav>
                <ul>
                    <Link
                        to={"/"}
                        style={{textDecoration: "none", color: "inherit"}}>
                        <li>스터디</li>
                    </Link>
                    <Link
                        to={"/"}
                        style={{textDecoration: "none", color: "inherit"}}>
                        <li>커뮤니티</li>
                    </Link>
                    <Link
                        to={"/"}
                        style={{textDecoration: "none", color: "inherit"}}>
                        <li>공지사항</li>
                    </Link>
                    <Link
                        to={"/"}
                        style={{textDecoration: "none", color: "inherit"}}>
                        <li>QNA</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );

    const renderSideRight = () => (
        <div className="headerbar">
            <nav>
                <ul>
                    <li to={"/"}
                        children={"로그인"}
                        style={{textDecoration: "none", color: "inherit"}}
                    />
                    <li to={"/"}
                        children={"회원가입"}
                        style={{textDecoration: "none", color: "inherit"}}
                    />
                </ul>
            </nav>
        </div>
    );

    return (
        <div>
            <div className={"header-wrap"}>
                <header>
                    <div className="head_left">{renderSideLeft()}</div>
                    {showSideCenter ? (
                        <div className="head_text">{renderSideCenter()}</div>
                    ) : (
                        <div className="head_text">{""}</div>
                    )}
                    <div className="head_right">{renderSideRight()}</div>
                </header>
            </div>
        </div>
    );
};

export default React.memo(Header);