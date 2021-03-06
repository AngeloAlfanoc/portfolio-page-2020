import Footer from '../components/Footer'
import Header from '../components/HeaderSmall'
import { Helmet } from 'react-helmet'
import React from 'react';

class Cookies extends React.Component {


    render() {
        return (
            <>
                <Helmet>
                    <title>methods. - Cookies NOMNOM</title>
                </Helmet>

                <Header />
                <div className="bg-white">    <div className="container">
                    <div style={{ paddingTop: 100, paddingBottom: 100 }}>
                        <div class="container py-5"><h2>Cookie Policy for methods.digital</h2>
                            <p>This is the Cookie Policy for methods, accessible from methods</p>
                            <p><strong>What Are Cookies</strong></p>
                            <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or ‘break’ certain elements of the sites functionality.</p>
                            <p>For more general information on cookies see the Wikipedia article on HTTP Cookies.</p>
                            <p><strong>How We Use Cookies</strong></p>
                            <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
                            <p><strong>Disabling Cookies</strong></p>
                            <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</p>
                            <p><strong>The Cookies We Set</strong></p>
                            <ul>
                                <li>Forms related cookiesWhen you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</li>
                                <li>Site preferences cookiesIn order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</li>
                            </ul>
                            <p><strong>Third Party Cookies</strong></p>
                            <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
                            <ul>
                                <li>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.For more information on Google Analytics cookies, see the official Google Analytics page.</li>
                                <li>Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.</li>
                                <li>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.</li>
                                <li>We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work the following social media sites including; will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.</li>
                            </ul>
                            <p><strong>More Information</strong></p>
                            <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren’t sure whether you need or not it’s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. This Cookies Policy was created with the help of the<a href="https://www.cookiepolicygenerator.com/">&nbsp;Cookies Policy Template Generator&nbsp;</a>and the<a href="https://www.privacypolicytemplate.net/">&nbsp;Privacy Policy Template Generator&nbsp;</a>.</p>
                            <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>
                            <ul>
                                <li style={{ listStyleType: 'none' }}>
                                    <ul>
                                        <li>Email:&nbsp;<a href="mailto:alfanoangeloc@gmail.com">info@methods.me</a></li>
                                        <li>By visiting this link:&nbsp;<a href="https://www.methods.me">methods</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div></div>
                <Footer />
            </>
        );
    }
}

export default Cookies;
