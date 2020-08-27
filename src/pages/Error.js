import Footer from '../components/Footer'
import Header from '../components/HeaderSmall'
import {Helmet} from 'react-helmet'
import React from 'react';

class Routes extends React.Component {


  goBack = (e) =>{
    e.preventDefault()
    window.history.go(-1)
  }

  render() {
          return (
            <div>
               <Helmet>
                    <title>methods. - Hey you! This page does not exist</title>
                </Helmet>
                <Header />
                <section style={{minHeight:100+'vh', paddingTop:250}} className="bg-white"> 
                <div style={{width:100+'%'}} className="text-center container d-flex flex-column justify-content-center w-100">
                 
                  
                  <h1 style={{fontSize:8+'rem'}}>404</h1>
                  <h2>You are in the wrong place</h2>
      
                 
                  <button style={{border:0, backgroundColor:'white'}} onClick={e=>this.goBack(e)}>Take me back!</button>
                  </div>
                 
                 
                 </section>
              
                <Footer/>
            </div>
    );

  }
}

export default Routes;
