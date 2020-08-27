import "animate.css/animate.min.css"

import BreadcrumbsComponent from './Breadcrumb';
import Case from '../components/Case'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';

class ProjectFront extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: window.location.pathname,
            hover: false,
            arrow: false,
            isLoaded: false,
            data: [],
            filterValue: null,
            garbageCollect: [],
            originalData:[],

        }
    }
    setHover = () => {
        this.state.hover === false
            ? this.setState({hover: true})
            : this.setState({hover: false})
    }
    componentDidMount() {
        this.fetch()
    }

    filterChangeHandler = (e) => {
        const {garbageCollect,originalData} = this.state;
        this.setState({filterValue: e.target.value,  garbageCollect:originalData})

        let ifStatement =(data, item) => {
            if (data === e.target.value) {
                z.push(item)
                this.setState({
                    data:z
                })
            }
        }
        
        let z = []
       
            if (e.target.value !== '') {
     
                garbageCollect.forEach((item) => {
                    ifStatement(item.acf.type_of_work_1.toLowerCase(), item)
                    ifStatement(item.acf.type_of_work_2.toLowerCase(), item)
                    ifStatement(item.acf.type_of_work_3.toLowerCase(), item)
                    ifStatement(item.acf.type_of_work_4.toLowerCase(), item)
                return this.setState({data:z})
            })
        } else {
            this.setState({
                data:garbageCollect
            })
        }
        
    

    }
    fetch = async() => {
        await
        axios
            .get('https://methods.guru/wp-json/wp/v2/portfolio')
            .then((result) => {
                this.setState({isLoaded: true, data: result.data,originalData:result.data})
            }, (error) => {
                this.setState({isLoaded: false, error});
            })
    }

    buildCaseFront = () => {
        const {isLoaded, data} = this.state;
        let colProps;
        let animDur;
        if (isLoaded === true) {
            return data.map((item, i) => {
                if (window.location.pathname === '/') {
                    if (i === 0 || i === 4 || i === 8) {
                        colProps = 'project-item col-sm-6 col-md-4'
                        animDur = 1.1
                    } else if (i === 1 || i === 5 || i === 9) {
                        colProps = 'project-item col-sm-6 col-md-8'
                        animDur = 1.2
                    } else if (i === 2 || i === 6 || i === 10) {
                        colProps = 'project-item col-sm-6 col-md-6'
                        animDur = 1.3
                    } else if (i === 3 || i === 7 || i === 11) {
                        colProps = 'project-item col-sm-6 col-md-6'
                        animDur = 1.4
                    }
                    if (i < 4) 
                        return <Case
                            key={i}
                            data={item}
                            style1={colProps}
                            style2='item color-4'
                            animTime={animDur}/>

                } else {
                    if (i === 0) {
                        colProps = 'project-item col-sm-6 col-md-8'
                        animDur = 1.1
                    } else if (i === 1) {
                        colProps = 'project-item col-sm-6 col-md-4'
                        animDur = 1.2
                    } else if (i === 4 || i === 8) {
                        colProps = 'project-item col-sm-6 col-md-4'
                        animDur = 1.3
                    } else if (i === 5 || i === 9) {
                        colProps = 'project-item col-sm-6 col-md-4'
                        animDur = 1.4
                    } else if (i === 2 || i === 6 || i === 10) {
                        colProps = 'project-item col-sm-6 col-md-4'
                        animDur = 1.5
                    } else if (i === 3 || i === 7 || i === 11) {
                        colProps = 'project-item col-sm-6 col-md-4'
                        animDur = 1.6
                    }
                    return <Case
                        key={i}
                        data={item}
                        style1={colProps}
                        style2='item color-4'
                        animTime={animDur}/>

                }
                return ('');
            })
        } else {
            return ''
        }
    }
    render() {
        const {hover, location} = this.state;
        return (
            <section className="projects" id='projects'>

                <main className="container">
                    {location === '/'
                        ? ''
                        : <BreadcrumbsComponent/>}
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        {location === '/'
                            ? <div>
                                    <h2 className="pl-3">Customized realizations, these are our digital solutions ...</h2>
                                </div>

                            : <div>
                                <h2 className="pl-3">Projects</h2>
                            </div>
}

                        <div className="divider"></div>

                        {location === '/'
                            ? ''
                            : <aside className="p-3">
                                <div className="d-flex flex-row">
                                    <span className="pr-2">Filter on
                                    </span>
                                    <select className="select-css"
                                    onClick={this
                                        .filterChangeHandler
                                        .bind(this)}
                                        onChangeCapture={this
                                        .filterChangeHandler
                                        .bind(this)}
                                        id="cars"
                                        name="cars">
                                   
                                        <option value="webapp">WebApp</option>
                                        <option value="layouting">Layouting</option>
                                        <option value="pro-bono">Pro-Bono</option>
                                        <option value="printmedia">Printmedia</option>
                                        <option value="branding">Branding</option>
                                    </select> 
                                        
                                </div>
                            
                            </aside>}
                    </ScrollAnimation>
                    <div className="d-flex flex-wrap">
                        {this.buildCaseFront()}
                    </div>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        {location === '/'
                            ? <a
                                    href='/projects'
                                    onMouseEnter={this.setHover}
                                    onMouseLeave={this.setHover}
                                    className="elem-ease-in text-white p-3 mr-4 float-right d-flex flex-row align-items-center position-relative text-black-50">Discover more projects
                                    <FontAwesomeIcon
                                        style={!hover
                                        ? {
                                            position: 'absolute',
                                            right: -5,
                                            transition: 'all .2s',
                                            fontSize: '1em',
                                            color: "#4d4d4d"
                                        }
                                        : {
                                            right: -10,
                                            position: 'absolute',
                                            transition: 'all .2s',
                                            fontSize: '1em',
                                            marginLeft: 10,
                                            color: "#4d4d4d"
                                        }}
                                        icon={faLongArrowAltRight}/></a>
                            : ''}
                    </ScrollAnimation>

                </main>
            </section>
        );
    }
}

export default ProjectFront