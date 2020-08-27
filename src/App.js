import React, {Component} from 'react';

import Loader from './components/Loader'
import Routes from './settings/routes'
import WebFont from 'webfontloader';
import axios from 'axios'
import firebase from 'firebase/app'
import { firebaseConfig } from './settings/firebase'

// import DataContext from './context/DataContext';
const dataURL = 'https://methods.guru/wp-json/wp/v2/portfolio'

class App extends Component {
    // static contextType = DataContext
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            isLoadedDom:false,
            location: window.location.pathname,
            data: []
        }
    }

    componentDidMount() {
        this.fetch();
        setInterval(()=>{ this.boot(); }, 50);
        WebFont.load({
            google: {
                families: ['Raleway:300,400,700,900', 'sans-serif',]
            }
        });
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        
    }

    fetch = async () => {
        const {isLoaded} = this.state;
        if (isLoaded === false) {
            await
                axios
                    .get(dataURL)
                    .then((result) => {
                        this.setState({ isLoaded: true, data: result.data });
                    }, (error) => {
                        this.setState({ isLoaded: false, error });
                    })
        }
    }

    boot = () => {
        switch (document.readyState) {
            case "loading":
                break;
            case "interactive":
                break;
            case "complete":
                clearInterval(this.interval)
                setTimeout(() => {
                     this.setState({ isLoadedDOM: true })
                    });
                break;
            default:
        }

    }

    render() {

        const { isLoaded, location, isLoadedDOM } = this.state;
        if (isLoaded === true && isLoadedDOM === true) {
            return (<>
                <Routes>
                
                </Routes>

            </>);
        } else {
            if (location !== '/') {
                return (<>
                   <Routes>
                  
                    </Routes>
                </>);
            }
            else {
                return <Loader  />
            }

        }

    }
}

export default App;