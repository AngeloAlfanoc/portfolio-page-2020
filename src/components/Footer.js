import Logo from '../assets/svg/logo_g.svg'
import React from 'react';
import { isMobile } from "react-device-detect";

class Footer extends React.Component {

    render() {
        return ( <> <footer>
            
            <div className="container bg-white">
                <div className="d-flex flex-row flex-wrap">
                    <div className="d-flex justify-content-center" style={isMobile?{width:100+'%', maxHeight:35+'vh', padding:'2rem 0'}: {width:'unset'}}>
                    <img alt={'Logo'} width={150} src={Logo}></img>
                    </div>
                    <div className="d-flex flex-column p-4 mx-5 menu-footer">
                        <h5 className="text-uppercase">Contact</h5>
                        <div className="d-flex flex-column">
                            <a href="https://goo.gl/maps/ts6GcZaCyGYrLt2f6">
                                <span>Luikerwijk 4, </span>
                                <span>3600 Genk, </span>
                                <span>België</span>
                            </a>
                            <a href='tel:+32468273700'><span>+32 (0) 468 27 37 00</span></a>
                            <a href='mailto:info@methods.me'><span>info@methods.me</span></a>
                        </div>
                    </div>
                    <div className="d-flex flex-column p-4 mx-5  menu-footer">
                        <h5 className="text-uppercase">Legal Info</h5>
                        <div className="d-flex flex-column">
                            <span><a href="/privacy-policy">Privacy Policy</a></span>
                            <span><a href="/cookie-statement">Cookie Statement</a></span>
                            <span><a href="/terms-of-service">Terms Of Service</a></span>
                        </div>
                    </div>
                    <div className="d-flex flex-column p-4 mx-5  menu-footer">
                        <h5 className="text-uppercase">Legal</h5>
                        <div className="d-flex flex-column">
                            <span>BE0743.423.341</span>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
        <div className="bg-white py-1 small" >
            <div className="container">
                <div className="d-flex justify-content-center">
                <div>© 2020 methods. Alle rights reserved</div>
                <div>

                </div>
                </div>
            </div>
        </div>
        </>);
    }
}

export default Footer