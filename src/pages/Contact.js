import Clients from '../components/Clients'
import ContactComponent from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/HeaderSmall'
import {Helmet} from 'react-helmet'
import React from 'react';

class Contact extends React.Component {
 

    render() {
        return (<>
        
            <Helmet>
                <title>methods.contact - Hey you, i like your style, Lets get in touch!</title>   
            </Helmet>
            <Header/>
            <ContactComponent/>
            <Clients/>
            <Footer/>
           </>
        );
    }
}

export default Contact;
