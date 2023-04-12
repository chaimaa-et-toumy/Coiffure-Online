import React from 'react'
import Header from './navBar'
import Main from './main'
import Service from './service'
import Pricing from './pricing'
import Rendezvous from './rendezvous'

function Home() {
    return (

        <div id="top" className='body'>

            <Header />

            <main>
                <article>
                    <Main />

                    <Service />

                    <Pricing />

                    <Rendezvous />
                </article >
            </main >

            {/* footer */}
            <footer className="footer has-bg-image" style={{ backgroundImage: 'url("./images/footer-bg.png")' }}>
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <a href="#" className="logo">
                                Barber
                                <span className="span">Hair Salon</span>
                            </a>
                        </div>
                        <div className="footer-link-box">
                            <ul className="footer-list">
                                <li>
                                    <p className="footer-list-title">Quick Links</p>
                                </li>
                                <li>
                                    <a href="#" className="footer-link has-before">Our Services</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link has-before">Meet Our Team</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link has-before">Our Portfolio</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link has-before">Need A Career?</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link has-before">News &amp; Blog</a>
                                </li>
                            </ul>
                            <ul className="footer-list">
                                <li>
                                    <p className="footer-list-title">Services</p>
                                </li>
                                <li>
                                    <a href="#" className="footer-link has-before">Hair Cutting</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link has-before">Shaving &amp; Design</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link has-before">Hair Colors</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link has-before">Beauty &amp; Spa</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link has-before">Body Massages</a>
                                </li>
                            </ul>
                            <ul className="footer-list">
                                <li>
                                    <p className="footer-list-title">Recent News</p>
                                </li>
                                <li>
                                    <div className="blog-card">
                                        <figure className="card-banner img-holder" style={{ width: 70, height: 75 }}>
                                            <img src="./images/footer-blog-1.jpg" width={70} height={75} loading="lazy" alt="img" className="img-cover" />
                                        </figure>
                                        <div className="card-content">
                                            <h3>
                                                <a href="#" className="card-title">The beginners guide to Henna Brows in Brisbane</a>
                                            </h3>
                                            <div className="card-date">
                                                <ion-icon name="calendar-outline" aria-hidden="true" />
                                                <time dateTime="2022-08-25">25 August 2022</time>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="blog-card">
                                        <figure className="card-banner img-holder" style={{ width: 70, height: 75 }}>
                                            <img src="./images/footer-blog-2.jpg" width={70} height={75} loading="lazy" alt="img" className="img-cover" />
                                        </figure>
                                        <div className="card-content">
                                            <h3>
                                                <a href="#" className="card-title">How do I get rid of unwanted hair on my face?</a>
                                            </h3>
                                            <div className="card-date">
                                                <ion-icon name="calendar-outline" aria-hidden="true" />
                                                <time dateTime="2022-08-25">25 August 2022</time>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="footer-list">
                                <li>
                                    <p className="footer-list-title">Contact Us</p>
                                </li>
                                <li className="footer-list-item">
                                    <ion-icon name="location-outline" aria-hidden="true" />
                                    <address className="contact-link">
                                        1234 Lala Meryem, Casablanca, Maroc
                                    </address>
                                </li>
                                <li className="footer-list-item">
                                    <ion-icon name="call-outline" aria-hidden="true" />
                                    <a href="tel:+0123456789" className="contact-link">+212 6 67 67 78 76</a>
                                </li>
                                <li className="footer-list-item">
                                    <ion-icon name="time-outline" aria-hidden="true" />
                                    <span className="contact-link">Sun - Friday, 08 am - 09 pm</span>
                                </li>
                                <li className="footer-list-item">
                                    <ion-icon name="mail-outline" aria-hidden="true" />
                                    <a href="mailto:support@gmail.com" className="contact-link">support@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div >
                    <div className="footer-bottom">
                        <p className="copyright">
                            © 2022 <a href="#" className="copyright-link">codewithsadee</a>. All Rights Reserved.
                        </p>
                    </div>
                </div >
            </footer >


            <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn>
                <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
            </a>



        </div >
    )
}

export default Home