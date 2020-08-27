import "animate.css/animate.min.css"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';

class Case extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            arrow:false
        }
    }

    setHover = () => {
        this.state.hover === false
            ? this.setState({hover: true})
            : this.setState({hover: false})
    }
    setArrow = () => {
        this.state.arrow === false? this.setState({arrow: true}): this.setState({arrow: false})
    }
    setCase = () => {
        
    }
    

    render() {
        const {hover,arrow} = this.state;
       
        return (
            <div
                onMouseEnter={this.setHover}
                onMouseLeave={this.setHover}
                className={this.props.style1}>
                 
                <a href={'projects/' +this.props.data.acf.permalink}>
        
                    <ScrollAnimation  animateIn="fadeIn" duration={this.props.animTime} animateOnce={true}>
                        <div className={this.props.style2}>
                            <div className="asset-img-wrapper">
                           
                                {/* Renders picture if full pic + styling options */}
                                {this.props.data.acf.full_pic ?<img alt={this.props.data.acf.titel} style={hover ? { height: 105 + "%", left:-45, } : { height: 100 + "%" }} className="asset-image"src={this.props.data.acf.foto.sizes.large}></img> : ''}
                               
                                {/* Renders picture if only png + styling options */}
                                {this.props.data.acf.png ?<img alt={this.props.data.acf.titel} style={hover ? { height: 120 + "%", left:-30, bottom:-50,transform: 'rotate(20deg)' } : { height: 100 + "%" }} className="asset-image"src={this.props.data.acf.foto.sizes.large}></img> : ''}
                                
                                {/* Renders picture if slider + styling options */}
                                {this.props.data.acf.slider ?<img alt={this.props.data.acf.titel} style={hover ? { height: 100 + "%", left:-150} : { height: 100 + "%", left:0 }} className="asset-image"src={this.props.data.acf.foto.sizes.large}></img> : ''}
                      
                            
                            </div>
                            <div className="text-overlay d-flex flex-column">
                                <img className="asset-logo" alt={this.props.data.acf.titel} src={this.props.data.acf.logo_white.url}></img>
                                <h3 className="title">{this.props.data.acf.titel}</h3>
                                <button
        
                        onMouseEnter={this.setArrow}
                        onMouseLeave={this.setArrow}
                        style={{left:0}}
                        className="elem-ease-in position-relative d-flex align-items-center justify-content-start">Discover this project
                        <FontAwesomeIcon
                            style={!arrow
                            ? {
                                marginLeft:5,
                                transition: 'all .2s',
                                fontSize: '1em',
                                color: '#fff !important'
                            }
                            : {
                                transition: 'all .2s',
                                fontSize: '1em',
                                color: '#fff !important',
                                marginLeft: 10
                            }} icon={faLongArrowAltRight}/></button>
                              

                            </div>

                        </div>
                    </ScrollAnimation>
                </a>
            </div>
        );
    }
}

export default Case