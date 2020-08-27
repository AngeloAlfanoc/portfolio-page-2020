import Logo from '../assets/svg/logo.svg'
import React from 'react';

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: window.location.pathname
        }
    }

    render() {
        return (
            <div className="parent-load">
                <div className="container d-flex flex-column justify-content-center align-items-center h-100 w-100">
                    <div className="loader">
                        <img alt={'Logo'} src={Logo} width={220} height={220}></img>
                    </div>
                    <h1 className="loader-name"><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></h1>
                </div>
            </div>
        )

    }
}

export default Loader;
