import Particles from 'react-tsparticles';
import React from 'react';

class ParticleComponent extends React.Component {
    render() {
        let typeOfStyle = 'image'
        if (this.props.expose === 'none') {
            typeOfStyle = 'circle'
        }
        else{
            typeOfStyle = 'image'
        }
        return (<Particles
                    params={{
                        background: {
                          color: {
                            value: "transparant"
                          }
                        },
                        fpsLimit: 120,
                        interactivity: {
                          detectsOn: "canvas",
                          events: {
                            onClick: {
                              enable: true,
                              mode: "push"
                            },
                            onHover: {
                              enable: true,
                              mode: "repulse"
                            },
                            resize: true
                          },
                          modes: {
                            push: {
                              quantity: 1
                            },
                            repulse: {
                                distance: 100,
                                duration: 1,
                                opacity:0
                            }
                          }
                        },
                        particles: {
                          color: {
                            value: "#ffffff"
                          },
                          links: {
                            enable: false,
                          },
                          collisions: {
                            enable: false
                          },
                          move: {
                            direction: "random",
                            enable: true,
                            outMode: "bounce",
                            random: true,
                            speed: .5,
                            straight: false
                          },
                          number: {
                            density: {
                              enable: false,
                              value_area: 800
                            },
                            value: 15
                          },
                          opacity: {
                            value: 0.5
                          },
                          shape: {
                            type: typeOfStyle,
                            image:{
                                src: this.props.logo,
                                width:150,
                                height:125
                            }
                          },
                          size: {
                            random: true,
                            value: 15,
                            anim : {
                                speed:22,
                                size_min:4
                            }
                          }
                        },
                        detectRetina: true
                      }}/>
                   
               
        );

    }
}

export default ParticleComponent;
