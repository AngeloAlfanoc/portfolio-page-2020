import AnchorLink from 'react-anchor-link-smooth-scroll'
import HeaderSmall from '../components/HeaderSmall'
import ParticleComponent from './ParticleComponent';
import React from 'react';
import methodLogo from '../assets/svg/logo_h.svg'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
            refresh: false,
            setLogo:0,
            location: window.location.pathname
        }
    }
componentWillMount(){
    window.addEventListener('scroll', this.handleScroll, true);
    
}
handleScroll=()=> {
    if (window.pageYOffset >= 800) {
        this.setState({
            setLogo:1
        })
    }
    else{
        this.setState({
            setLogo:0
        })
    }
}
    render() {
  
        const {visible, location, setLogo} = this.state;
        return (
            <header id="head" style={location === '/'
                ? {
                    paddingBottom: 50
                }
                : {
                    paddingBottom: 50
                }}>
                <div className="mast-head">
                    <div
                        className="elem-ease-in"
                        style={visible
                        ? {
                            opacity: .5,
                            width: 100 + 'vw'
                        }
                        : {
                            opacity: 0,
                            display: 'none'
                        }}>
                        <ParticleComponent logo={methodLogo}/>
                    </div>
                    <div
                        style={{
                        height: 100 + 'vh'
                    }}
                        className="d-flex flex-column justify-content-center align-items-center w-100 h-100 text-white">

                        <div className="logo d-flex justify-content-center align-items-center">
                            <img alt="methods.digital" src={methodLogo}></img>
                        </div>
                        <h1 className="logo-name  d-flex justify-content-center">methods.</h1>

                        <AnchorLink
                            className="scroll-link d-flex justify-content-center flex-column align-items-center text-white"
                            href="#services">

                            <svg
                                className="mouse"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 76 130"
                                preserveAspectRatio="xMidYMid meet">
                                <g fill="none" fillRule="evenodd">
                                    <rect
                                        width="70"
                                        height="118"
                                        x="1.5"
                                        y="1.5"
                                        stroke="#FFF"
                                        strokeWidth="3"
                                        rx="36"/>
                                    <circle className="scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF"/>
                                </g>
                            </svg>
                            <span>SCROLL</span>
                        </AnchorLink>
                    </div>
                </div>
                <HeaderSmall SetLogo={setLogo}/>
            </header>
        );

    }
}

export default Header;
