import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import svg1 from '../assets/svg/001-coding.svg';
import svg3 from '../assets/svg/012-pixel.svg';

// import svg2 from '../assets/svg/020-document.svg';


class Services extends React.Component {
    render() {
        return (
            <section className="services" id="services">
                <main className="container">
                    <ScrollAnimation  animateIn="fadeIn" duration={1} animateOnce={true}>
                        <h2 className="p-3" id="service">Looking for?</h2>
                        <div className="divider"></div>
                    </ScrollAnimation>
                    <div className="d-flex flex-row flex-wrap">

                        <div
                            className="col-md-6 col-sm-12 d-flex flex-column w-100 align-items-center  text-center">
                            <ScrollAnimation animateIn="zoomInDown" duration={1} animateOnce={true}>
                                <img alt="webdesign" className="my-1" src={svg1} width={75} height={100} />
                                <h3>Webdesign</h3>
                                <p>We offer professional web design services at affordable rates to help your business attract more visitors and keep them on your site!</p>
                            </ScrollAnimation>
                        </div>
                        <div
                            className="col-md-6 col-sm-12 d-flex flex-column w-100 align-items-center  text-center">
                            <ScrollAnimation animateIn="zoomInDown" duration={1.3} animateOnce={true}>
                                <img alt="branding" className="my-1" src={svg3} width={75} height={100} />
                                <h3>Branding</h3>
                                <p>
With our branding expertise, we give body and soul to your brand. We sculpt it in the right form, make sure it has a voice, put it beautifully in the picture and build a fascinating story around it.</p>
                            </ScrollAnimation>
                        </div>
                        {/* <div
                            className="col-md-4 col-sm-12 d-flex flex-column w-100 align-items-center  text-center">
                            <ScrollAnimation animateIn="zoomInDown" duration={1.7} animateOnce={true}>
                                <img alt="print" className="my-1" src={svg2} width={75} height={100} />
                                <h3>SEO</h3>
                                <p>Having a webapp is cool and all but how do you get noticed?</p>
                            </ScrollAnimation>
                        </div> */}

                       
                       
                    
                        
                    </div>

                </main>
            </section>
        );
    }
}

export default Services