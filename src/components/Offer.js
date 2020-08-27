import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Offer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location:window.location.pathname,
            isLoaded: false,
            data: []
        }
    }


    handleClick = (e) => {
        e.preventDefault()
        window.location.href = '/contact'
    }

    render() {
        return (
            <section className="offer">
                <div className="bg-methods-grey pb-5">
                    <div className="container d-flex flex-column justify-content-center py-5">
                    <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
                        <h2 className="px-3 text-white">Multimedia for everyone!</h2>
                        <div className="divider"></div>
                        </ScrollAnimation>
                    </div>
                    
                    <div className="container-fluid w-100" >
                        <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
                            <div>
                            <button onClick={e=>this.handleClick(e)} className="btn-methods">Lets chat! 
                            {/* <FontAwesomeIcon
                                    style={!hover
                                        ? {
                                            position: 'absolute',
                                            right: -20,
                                            transition: 'all .2s',
                                            fontSize: '.5em',
                                            color: "#000"
                                        }
                                        : {
                                            right: -25,
                                            position: 'absolute',
                                            transition: 'all .2s',
                                            fontSize: '.5em',
                                            marginLeft: 10,
                                            color: "#000"
                                        }} icon={faChevronRight} /> */}
                                        
                                        </button>
                           
                            </div>
                        </ScrollAnimation>
                    </div>
                  
                </div>
            </section>
        );
    }
}

export default Offer