import BreadcrumbsComponent from '../components/Breadcrumb';
import ReCAPTCHA from "react-google-recaptcha";
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios'

class ContactComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            user: '',
            email: '',
            message: '',
            phone: '',
            checkbox_1: null,
            checkbox_2: null,
            checkbox_3: null,
            checkbox_4: null,
            checkbox_5: null,
            checkbox_6: null,
            confirmationMessage: '',
        };
        this._reCaptchaRef = React.createRef();
    }
    componentDidMount() {
        this.fetch();
    }
    fetch = async() => {
        await axios
            .get('')
            .then((result) => {
                this.setState({isLoaded: true, data: result.data});
            }, (error) => {
                this.setState({isLoaded: false, error});
            })
    }
    handleSubmit = async(e) => {
        e.preventDefault();
        this._reCaptchaRef.current.execute()
        const {user, email, message, phone, checkbox_1, checkbox_2, checkbox_3, checkbox_4, checkbox_5, checkbox_6} = this.state;
        let bodyFormData = new FormData();
        bodyFormData.set('user', user);
        bodyFormData.set('email', email);
        bodyFormData.set('message', message);
        bodyFormData.set('phone', phone);
        bodyFormData.set('checkbox-252', checkbox_1);
        bodyFormData.set('checkbox-253', checkbox_2);
        bodyFormData.set('checkbox-254', checkbox_3);
        bodyFormData.set('checkbox-255', checkbox_4);
        bodyFormData.set('checkbox-256', checkbox_5);
        bodyFormData.set('checkbox-257', checkbox_6);
        await axios({
            method: 'post',
            url: 'https://methods.guru/wp-json/contact-form-7/v1/contact-forms/600/feedback',
            data: bodyFormData,
            headers: {
                'content-type': 'application/json'
            }
        }).then(() => {
            
           this.setState({
               confirmationMessage: 'Your message has been sent succesfully!'
           })
        }).catch(()=>{
            this.setState({
                confirmationMessage: 'There was a problem sending your message, please try again!'
            })
        })
    }
    resetForm = () => {
        this.setState({user: '', phone: '', email: '', message: ''})
    }
    render() {
        return (
            <section className="contact">
                <main className="container bg-white">

                    <BreadcrumbsComponent/>
                    <ScrollAnimation animateIn="fadeIn">
                        <h2 className="pl-3">Take a seat</h2>
                        <div className="divider"></div>
                        <div className="d-flex w-100">
                            <div className="col-md-12">
                                We would love to hear about the ideas & projects that you have in mind!
                            </div>
                        </div>
                        <div className="d-flex w-100 flex-wrap">
                            <div className="col-md-4 col-sm-12 pt-4">
                                <h3>Reachable on:</h3>
                                <ul>
                                    <li>
                                        <a href="tel:+32468273700">+32 468 27 37 00</a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@methods.me">info@methods.me</a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/methods.digital.agency/">Linkedin</a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/methods.me">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/methods.digital.agency/">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="http://methods.me/">methods.me</a>
                                    </li>
                                </ul>

                                <h3>Info:</h3>
                                <p>methods is being run by one person:
                                    <a href="https://www.linkedin.com/in/angeloalfanocal/"> Alfano Angelo</a>. Therefore
                                    if you are trying to reach out & you are not able to please fill in the form or click the chat bubble in the bottom right corner!</p>
                            </div>
                            <div className="col-md-7 pt-4">
                                <h3>Specific Question? Already have an idea on what we can do together?
                                </h3>
                                <form
                                    style={{
                                    outline: 0
                                }}
                                    onSubmit={this
                                    .handleSubmit
                                    .bind(this)}
                                    method="POST">
                                    <div className="d-flex flex-row justify-content-between my-4">
                                        <input
                                           
                                            required
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            value={this.state.user}
                                            onChange={this
                                            .onUserChange
                                            .bind(this)}
                                            placeholder="Name*"
                                            maxLength={15}
                                            ></input>
                                        <input
                                           
                                            required
                                            type="phone"
                                            className="form-control"
                                            id="phone"
                                            aria-describedby="phoneHelp"
                                            value={this.state.phone}
                                            onChange={this
                                            .onPhoneChange
                                            .bind(this)}
                                            placeholder="Phone*"
                                            maxLength={15}></input>
                                    </div>
                                    <div>
                                        <input
                                            placeholder="E-mail*"
                                            type="email"
                                            className="form-control w-100"
                                            id="email"
                                            aria-describedby="emailHelp"
                                            onChange={this
                                            .onEmailChange
                                            .bind(this)}
                                            value={this.state.email}
                                            maxLength={15}/>
                                    </div>
                                    <div
                                        style={{
                                        userSelect: "none"
                                    }}
                                        className="d-flex align-items-center align-content-center justify-content-start flex-wrap pt-2">
                                        <div
                                            className="d-flex align-items-center align-content-center justify-content-center mx-2">
                                            <input
                                                onClick={this
                                                .onWebsiteCheckChange
                                                .bind(this)}
                                                value={this.state.checkbox_1}
                                                type="checkbox"
                                                id="website"
                                                name="website"
                                             
                                                ></input>
                                            <label className="pt-2" htmlFor="website">Website</label>
                                        </div>
                                        <div
                                            className="d-flex align-items-center align-content-center justify-content-center mx-2">
                                            <input
                                                onClick={this
                                                .onWebshopCheckChange
                                                .bind(this)}
                                                value={this.state.checkbox_2}
                                                type="checkbox"
                                                id="webshop"
                                                name="webshop"></input>
                                            <label className="pt-2" htmlFor="webshop">Webshop</label>
                                        </div>
                                        <div
                                            className="d-flex align-items-center align-content-center justify-content-center mx-2">
                                            <input
                                                onClick={this
                                                .onAppCheckChange
                                                .bind(this)}
                                                value={this.state.checkbox_3}
                                                type="checkbox"
                                                id="app"
                                                name="app"></input>
                                            <label className="pt-2" htmlFor="app">App</label>
                                        </div>
                                        <div
                                            className="d-flex align-items-center align-content-center justify-content-center mx-2">
                                            <input
                                                onClick={this
                                                .onLogoCheckChange
                                                .bind(this)}
                                                value={this.state.checkbox_4}
                                                type="checkbox"
                                                id="logo"
                                                name="logo"></input>
                                            <label className="pt-2" htmlFor="logo">Logo</label>
                                        </div>
                                        <div
                                            className="d-flex align-items-center align-content-center justify-content-center mx-2">
                                            <input
                                                onClick={this
                                                .on3DCheckChange
                                                .bind(this)}
                                                value={this.state.checkbox_5}
                                                type="checkbox"
                                                id="3D"
                                                name="3D"></input>
                                            <label className="pt-2" htmlFor="3D">3D</label>
                                        </div>
                                        <div
                                            className="d-flex align-items-center align-content-center justify-content-center mx-2">
                                            <input
                                                onClick={this
                                                .onOtherCheckChange
                                                .bind(this)}
                                                value={this.state.checkbox_6}
                                                type="checkbox"
                                                id="other"
                                                name="other"></input>
                                            <label className="pt-2" htmlFor="other">Other</label>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                        <label value="test" className="pt-5 text-muted">
                                            <small>Questions/Comments?</small>
                                        </label>
                                        <textarea
                                            placeholder='Message'
                                            className="form-control mt-4"
                                            rows="3"
                                            id="message"
                                            value={this.state.message}
                                            onChange={this
                                            .onMessageChange
                                            .bind(this)}
                                            maxLength={250}
                                            />
                                    </div>
                                    <div className="d-flex flex-row justify-content-end my-5">
                                        <button className="btn-form">Send</button>
                                    </div>
                                    {this.state.confirmationMessage}
                                  
                                    <ReCAPTCHA style={{ display: "none" }} ref={this._reCaptchaRef} size="invisible" sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA} onChange={this.handleChange} />
                                </form>
                            </div>
                        </div>
                    </ScrollAnimation>
                </main>
            </section>
        );

    }
    onWebsiteCheckChange(event) {
        this.setState({
            checkbox_1: event.target.checked
        })
    }
    onWebshopCheckChange(event) {
        this.setState({
            checkbox_2: event.target.checked
        })
    }
    onAppCheckChange(event) {
        this.setState({
            checkbox_3: event.target.checked
        })
    }
    onLogoCheckChange(event) {
        this.setState({
            checkbox_4: event.target.checked
        })
    }
    on3DCheckChange(event) {
        this.setState({
            checkbox_5: event.target.checked
        })
    }
    onOtherCheckChange(event) {
        this.setState({
            checkbox_6: event.target.checked
        })
    }
    onUserChange(event) {
        this.setState({user: event.target.value})
    }
    onPhoneChange(event) {
        this.setState({phone: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
}

export default ContactComponent;