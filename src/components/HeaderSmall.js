import AnchorLink from 'react-anchor-link-smooth-scroll'
import Fb from '../assets/svg/fb.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Insta from '../assets/svg/insta.svg'
import Linked from '../assets/svg/linked.svg'
import Nav from '../components/Nav'
import React from 'react';
import classnames from 'classnames'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from "react-device-detect";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
    handleScroll = () => {
        const { prevScrollpos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > window.pageYOffset;
        if (window.pageYOffset <= 0) {
            this.setState({
                visible: true
            })
        }
        else {
            this.setState({
                prevScrollpos: currentScrollPos,
                visible
            });
        }

    };
    handleToHomePage = (e) => {
        e.preventDefault();
        window.location = '/'
    }
    render() {
        const { visible } = this.state;
        return (
            <header id="head">
                <div className="d-flex justify-content-center">
                    <Nav
                        toggleButtonAnim={
                            visible ?
                                {
                                    top: '0.5rem',
                                    zIndex: 999

                                }
                                : {
                                    top: '-200px',
                                    zIndex: 999
                                }
                        } />
                    <div className={classnames("stick-menu--show shadow-sm", { "sticky-menu": visible })} style={!visible
                        ? {
                            top: '-200px',
                            zIndex: 99
                        }
                        : {
                            top: '0',
                            zIndex: 99
                        }}></div>
                    <div className="socials" style={!visible
                        ? {
                            top: '-200px'
                        }
                        : {
                            top: '.6rem'
                        }}>
                        <a href="https://www.instagram.com/itsmethods/">
                            <img alt="insta-icon" src={Insta}></img>
                        </a>
                        <a href="https://www.linkedin.com/company/methodss">
                            <img alt="linkedin-icon" src={Linked}></img>
                        </a>
                        <a href="https://www.facebook.com/methods.me">
                            <img alt="facebook-icon" src={Fb}></img>
                        </a>
                    </div>
                    <div style={{opacity:this.props.SetLogo}} onClick={e => this.handleToHomePage(e)} className={classnames("logo-small", { "logo-small--shrink": visible })}></div>
                    <AnchorLink href="#head">
                        {isMobile ? <div
                            className={visible ? 'top-the-top border p-1 pr-2 bg-white elem-ease-in' : 'top-the-top border p-1 pr-2 bg-white elem-ease-in top-the-top-anim'}
                            style={visible
                                ? {
                                    bottom: '-200px'
                                }
                                : {
                                    bottom: '5rem',
                                }}>

                            <FontAwesomeIcon style={{ fontSize: '2em', paddingLeft: '5px', color: '#000' }} icon={faChevronUp} />

                        </div> : <div
                            className={visible ? 'top-the-top border p-1 pr-2 bg-white elem-ease-in' : 'top-the-top border p-1 pr-2 bg-white elem-ease-in top-the-top-anim'}
                            style={visible
                                ? {
                                    bottom: '-200px'
                                }
                                : {
                                    bottom: '6rem',
                                }}>

                                <FontAwesomeIcon style={{ fontSize: '2em', paddingLeft: '5px', color: '#000' }} icon={faChevronUp} />

                            </div>}
                    </AnchorLink>
                </div>
            </header>
        );

    }
}

export default Header;
