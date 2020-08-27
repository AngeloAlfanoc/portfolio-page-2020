import Footer from '../components/Footer'
import Header from '../components/HeaderSmall'
import ProjectFront from '../components/ProjectFront';
import React from 'react';

class Home extends React.Component {
 

    render() {
        return (
            <div >
                    <Header/>
                    <ProjectFront/>
                    <Footer/>
            </div>
        );
    }
}

export default Home;
