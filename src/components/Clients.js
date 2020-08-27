import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "react-slick";
import axios from 'axios'

class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: window.location.pathname,
            isLoaded: false,
            data: []
        }
    }
    componentDidMount() {
        this.fetch()
    }

    fetch = async() => {
        await
        axios
            .get('https://methods.guru/wp-json/wp/v2/partners')
            .then((result) => {
                this.setState({isLoaded: true, data: result.data})
            }, (error) => {
                this.setState({isLoaded: false, error});
            })
    }

    buildPartnerLogo = (data) => {

          return data.map((item, i) => {
            return (
                <div key={i} className="slick-container" style={{height:200}}>
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{height:100+'%'}} onClick={''}>
                        {/* <a href={item.acf.partner_website}> */}
                            <img style={{opacity:.5}} className="img-fluid" width="150px"  alt={item.acf.partner_website} src={item.acf.partner_logo.url}></img>
                        {/* </a> */}
                    </div>
                </div>
            )
        })  
        
    

    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 3200,
            autoplaySpeed: 4500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            pauseOnFocus: true,
            pauseOnHover: false,
            pauseOnDotsHover: false,
            autoplay: true
        };
        const {data, isLoaded} = this.state;
    
        if (isLoaded === true) {
            return (
                <section className="clients">
                    <div className="container">
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <h2 className="p-3">Partners</h2>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" delay={2} animateOnce={true}>
                            <div className="divider"></div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" delay={5} animateOnce={true}>
                            <Slider {...settings}>
                                {this.buildPartnerLogo(data)}
                            </Slider>
                        </ScrollAnimation>
                    </div>

                </section>
            );
        } else {
            return 'loading'
        }

    }
}

export default Services