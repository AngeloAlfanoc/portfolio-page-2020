import 'react-image-lightbox/style.css';

import BreadcrumbsComponent from './../components/Breadcrumb';
import Footer from '../components/Footer'
import Header from '../components/HeaderSmall'
import {Helmet} from 'react-helmet'
import Lightbox from 'react-image-lightbox';
import LoaderComponent from '../components/Loader';
import ParticleComponent from './../components/ParticleComponent';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios'

class CaseDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: window
                .location
                .pathname
                .slice(10, window.location.pathname.length)
                .replace('_', ' '),
            error: null,
            isLoaded: false,
            data: [],
            projectFound: false,
            photoIndex: 0,
            isOpen: false
        };

    }
    componentDidMount() {
        this.fetch();
    }
    fetch = async () => {
        if (this.state.isLoaded === false) {
            await
                axios
                    .get('https://methods.guru/wp-json/wp/v2/portfolio')
                    .then((result) => {
                        this.setState({ isLoaded: true, data: result.data });
                    }, (error) => {
                        this.setState({ isLoaded: false, error });
                    })
        }

    }

    render() {

        const { isLoaded, data, location, projectFound } = this.state;
        const { photoIndex, isOpen } = this.state;
        if (isLoaded === true) {
            return (
                <React.Fragment>
                          
          
                    <Header />
                    <section className="caseDetail">
                        
                        <main
                            className="bg-white"
                            style={{
                                paddingTop: 50,
                                minHeight: 100 + 'vh'
                            }}>
                            <div className="pl-4">
                                <BreadcrumbsComponent />
                            </div>

                            {data.map((item, i) => {
                           
                                let projectNeeded = item.slug
                                if (location === projectNeeded) {
                                    
                                    let lightBoxImageBranding;
                                    let lightBoxPrintMedia;
                                    // eslint-disable-next-line 
                                   {item.acf.type_of_work_1 === 'Branding' || item.acf.type_of_work_2 === 'Branding' || item.acf.type_of_work_3 === 'Branding' || item.acf.type_of_work_4 === 'Branding'
                                    ? lightBoxImageBranding = item.acf.logo_normal.url : lightBoxImageBranding = null} 
                                     // eslint-disable-next-line 
                                    {item.acf.type_of_work_1 === 'Printmedia' || item.acf.type_of_work_2 === 'Printmedia' || item.acf.type_of_work_3 === 'Printmedia' || item.acf.type_of_work_4 === 'Printmedia'
                                    ? lightBoxPrintMedia = item.acf.printmedia.url : lightBoxPrintMedia = null} 
                                    if (projectFound === false) {
                                        
                                        this.setState({ projectFound: true })
                                        
                                    }
                                  
                                    const images = [item.acf.gallery_pic_1.url, item.acf.gallery_pic_2.url, item.acf.gallery_pic_3.url, lightBoxImageBranding, lightBoxPrintMedia];
                                    return (<section key={i} className="container-fluid">
                                          <Helmet>
                                        <title>methods. - {item.acf.titel}</title>   
                                    </Helmet>

                                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>

                                            <div className="container">
                                                <h2 className="pl-3">{item.acf.titel}</h2>
                                                <div className="divider"></div>


                                            </div>

                                            <div
                                                className="particle-container"
                                                style={{
                                                    maxHeight: 150,
                                                    overflow: 'hidden'
                                                }}>
                                                <ParticleComponent expose={'none'} />
                                                <h4><a className="text-white" href={item
                                                    .acf
                                                    .website}>{item
                                                        .acf
                                                        .website
                                                        .substr(8, item.acf.website.length)}</a></h4>

                                            </div><div className="container py-4"> <small>
                                                <span className="pl-3 d-flex justify-content-start">{item.acf.type_of_work_1}
                                                    {item.acf.type_of_work_2 === 'Null'
                                                        ? ' '
                                                        : ' / ' + item.acf.type_of_work_2}
                                                    {item.acf.type_of_work_3 === 'Null'
                                                        ? ' '
                                                        : ' / ' + item.acf.type_of_work_3}
                                                    {item.acf.type_of_work_4 === 'Null'
                                                        ? ' '
                                                        : ' / ' + item.acf.type_of_work_4}</span></small></div>

                                            <div
                                                className="container pt-1 pb-2"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.acf.Editor
                                                }}></div>
                                            <div className="container py-3">
                                                {item.acf.gallery_pic_1 ? <h3 className="pl-3">WebApp:</h3> : ''}
                                                <div className="d-flex flex-wrap">
                                                    {isOpen && (<Lightbox
                                                        mainSrc={images[photoIndex]}
                                                        nextSrc={images[(photoIndex + 1) % images.length]}
                                                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                                        onMovePrevRequest={() => this.setState({
                                                            photoIndex: (photoIndex + images.length - 1) % images.length
                                                        })}
                                                        onMoveNextRequest={() => this.setState({
                                                            photoIndex: (photoIndex + 1) % images.length
                                                        })} />)}
                                                    {item.acf.gallery_pic_1 ? <div className="col-md-4 col-sm-12 py-3">
                                                        <img
                                                            alt={item.acf.titel + '1'}
                                                            className="img-fluid"
                                                            src={item.acf.gallery_pic_1.sizes.large}
                                                            onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}></img>

                                                    </div> : ''}
                                                    {item.acf.gallery_pic_2 ? <div className="col-md-4 col-sm-12 py-3">
                                                        <img
                                                            alt={item.acf.titel + '2'}
                                                            className="img-fluid"
                                                            src={item.acf.gallery_pic_2.sizes.large}
                                                            onClick={() => this.setState({ isOpen: true, photoIndex: 1})}
                                                        ></img>

                                                    </div> : ''}
                                                    {item.acf.gallery_pic_3 ? <div className="col-md-4 col-sm-12 py-3">
                                                        <img
                                                            alt={item.acf.titel + '3'}
                                                            className="img-fluid"
                                                            src={item.acf.gallery_pic_3.sizes.large}
                                                            onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
                                                            
                                                        ></img>

                                                    </div> : ''}
                                                    {item.acf.type_of_work_1 === 'Branding' || item.acf.type_of_work_2 === 'Branding' || item.acf.type_of_work_3 === 'Branding' || item.acf.type_of_work_4 === 'Branding'
                                                        ? <div className="col-md-12 col-sm-12">
                                                            <h3 className="pt-5 pb-2">Branding:</h3>

                                                            <img width={400} style={{ objectPosition: 'center' }} alt={item.acf.titel} className="img-fluid" src={item.acf.logo_normal.url} onClick={() => this.setState({ isOpen: true, photoIndex: 3 }) } ></img>


                                                        </div>
                                                        : ''}
                                                    {item.acf.type_of_work_1 === 'Printmedia' || item.acf.type_of_work_2 === 'Printmedia' || item.acf.type_of_work_3 === 'Printmedia' || item.acf.type_of_work_4 === 'Printmedia'
                                                        ? <div className="col-md-12 col-sm-12">
                                                            <h3 className="pt-5 pb-2">Printmedia:</h3>

                                                            <img width={400} style={{ objectPosition: 'center' }} alt={item.acf.titel} className="img-fluid" src={item.acf.printmedia.sizes.large} onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} ></img>


                                                        </div>
                                                        : ''}
                                                </div>

                                                <p className="pb-2 pt-5">The complete project can be found here
                                                        <a href={item.acf.website}>
                                                        {' ' + item.acf.website}</a>
                                                </p>
                                            </div>
                                        </ScrollAnimation>

                                    </section>
                                    )
                                } return ('');

                            })}
                        </main>
                    </section>
                    <Footer />
                </React.Fragment>
            );

        } else {
            return <LoaderComponent />
        }
    }
}

export default CaseDetail;