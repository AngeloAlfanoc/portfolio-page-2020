import CookieConsent from "react-cookie-consent";
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Helmet } from 'react-helmet'
import Offer from '../components/Offer'
import ProjectFront from '../components/ProjectFront';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Services from '../components/Services'

class Home extends React.Component {
    render() {
        return (
            <div >
                <Helmet>
                    <title>methods - creating value for clients & consumers.</title>
                </Helmet>
                <ScrollAnimation animateIn="zoomIn" animateOnce={true} duration={.2}>
                    <Header />
                    <Services />
                    <ProjectFront />
                    <Offer />
                    <Footer />
                </ScrollAnimation>

                <CookieConsent
                    buttonText="I understand."
                    cookieName="GDPR_COOKIE"
                    expires={150}
                    buttonStyle={{
                        backgroundColor: "#FFFFFF",
                        fontSize: "13px",
                        borderRadius: "4px"
                    }}>
                    This website uses cookies to enhance your experience click
                    <a href='/cookies'>
                        {' '}here{' '}
                    </a>
                    for more info.
                </CookieConsent>
            </div>
        );
    }
}

export default Home;
