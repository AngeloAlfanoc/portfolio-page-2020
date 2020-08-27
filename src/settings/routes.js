import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CaseDetail from '../pages/CaseDetail'
import Contact from '../pages/Contact'
import Cookies from '../pages/Cookies'
import Error from '../pages/Error'
import Home from '../pages/Home'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Projects from '../pages/Projects'
import React from 'react';
import ScrollMemory from 'react-router-scroll-memory';
import TermsOfService from '../pages/Terms'
import axios from 'axios'

class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        }
    }
    componentDidMount() {
        this.fetch()
    }

    fetch = async () => {
        axios
            .get('https://methods.guru/wp-json/wp/v2/portfolio')
            .then((result) => {
                this.setState({ isLoaded: true, data: result.data })
            }, (error) => {
                this.setState({ isLoaded: false, error });
            })
    }
    render() {
        const { data, isLoaded } = this.state;
        if (isLoaded === true) {

            return (<>
                <BrowserRouter>
                    <div>
                        <ScrollMemory />
                        <Switch>
                            <Route exact path="/" render={() => <Home />} />
                            <Route exact path="/contact" render={() => <Contact />} />
                            <Route exact path="/projects" render={() => <Projects />} />
                            <Route exact path="/privacy-policy" render={() => <PrivacyPolicy />} />
                            <Route exact path="/cookie-statement" render={() => <Cookies />} />
                            <Route exact path="/terms-of-service" render={() => <TermsOfService />} />
                            {data.map((project, i) => {
                                return <Route
                                    exact
                                    key={i}
                                    path={'/projects/' + project.acf.permalink}
                                    component={CaseDetail} />
                            })}
                            <Route component={Error} />
                        </Switch>
                    </div>
                </BrowserRouter> </>
            );
        }
        else { return '' }


    }
}

export default Routes;