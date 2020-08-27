import Fb from '../assets/svg/fb.svg'
import Insta from '../assets/svg/insta.svg'
import Linked from '../assets/svg/linked.svg'
import React from 'react';

class Socials extends React.Component {
    
    render() {

        return (
            <div
            className="socials"
            style={this.props.expose
            ? {
                top: '-200px'
            }
            : {
                top: '.5rem'
            }}>
            <a href="https://www.instagram.com/itsmethods/">
                <img alt="insta-icon" style={{}} src={Insta}></img>
            </a>
            <a href="https://www.linkedin.com/company/methodss">
                <img alt="linkedin-icon" style={{}} src={Linked}></img>
            </a>
            <a href="https://www.facebook.com/methods.me">
                <img alt="facebook-icon" style={{}} src={Fb}></img>
            </a>
        </div>
        );

    }
}

export default Socials;
