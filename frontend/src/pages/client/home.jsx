import React from 'react'

function Home() {
    return (
        <div id="top">

            <header className="header">
                <div className="header-top">
                    <div className="container">
                        <ul className="header-top-list">
                            <li className="header-top-item">
                                <ion-icon name="call-outline" aria-hidden="true" />
                                <p className="item-title">Call Us :</p>
                                <a href="tel:01234567895" className="item-link">012 (345) 67 895</a>
                            </li>
                            <li className="header-top-item">
                                <ion-icon name="time-outline" aria-hidden="true" />
                                <p className="item-title">Opening Hour :</p>
                                <p className="item-text">Sunday - Friday, 08 am - 09 pm</p>
                            </li>
                            <li>
                                <ul className="social-list">
                                    <li>
                                        <a href="#" className="social-link">
                                            <ion-icon name="logo-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="social-link">
                                            <ion-icon name="logo-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="social-link">
                                            <ion-icon name="logo-youtube" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="social-link">
                                            <ion-icon name="chatbubble-ellipses-outline" />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-bottom" data-header>
                    <div className="container">
                        <a href="#" className="logo">
                            Barber
                            <span className="span">Hair Salon</span>
                        </a>
                        <nav className="navbar container" data-navbar>
                            <ul className="navbar-list">
                                <li className="navbar-item">
                                    <a href="#home" className="navbar-link" data-nav-link>Home</a>
                                </li>
                                <li className="navbar-item">
                                    <a href="#services" className="navbar-link" data-nav-link>Services</a>
                                </li>
                                <li className="navbar-item">
                                    <a href="#pricing" className="navbar-link" data-nav-link>Pricing</a>
                                </li>
                                <li className="navbar-item">
                                    <a href="#appointment" className="navbar-link" data-nav-link>Appointment</a>
                                </li>
                            </ul>
                        </nav>
                        <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
                            <ion-icon name="menu-outline" aria-hidden="true" />
                        </button>
                        <a href="#" className="btn has-before">
                            <span className="span">Appointment</span>
                            <ion-icon name="arrow-forward" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <article>


                    <section className="section hero has-before has-bg-image" id="home" aria-label="home" style={{ backgroundImage: 'url("./images/hero-banner.jpg")' }}>
                        <div className="container">
                            <h1 className="h1 hero-title">Barbers &amp; Hair Cutting</h1>
                            <p className="hero-text">
                                Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                suspendisse
                                ultrices gravida
                            </p>
                            <a href="#" className="btn has-before">
                                <span className="span">Explore Our Services</span>
                                <ion-icon name="arrow-forward" aria-hidden="true" />
                            </a>
                        </div>
                    </section>

                    {/* service */}

                    <section className="section service" id="services" aria-label="services">
                        <div className="container">
                            <h2 className="h2 section-title text-center">Service We Provide</h2>
                            <p className="section-text text-center">
                                Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
                            </p>
                            <ul className="grid-list">
                                <li>
                                    <div className="service-card">
                                        <div className="card-icon">
                                            <i className="flaticon-salon" />
                                        </div>
                                        <h3 className="h3">
                                            <a href="#" className="card-title">Hair Cutting Style</a>
                                        </h3>
                                        <p className="card-text">
                                            Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <a href="#" className="card-btn" aria-label="more">
                                            <ion-icon name="arrow-forward" aria-hidden="true" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="service-card">
                                        <div className="card-icon">
                                            <i className="flaticon-shampoo" />
                                        </div>
                                        <h3 className="h3">
                                            <a href="#" className="card-title">Hair Washing</a>
                                        </h3>
                                        <p className="card-text">
                                            Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <a href="#" className="card-btn" aria-label="more">
                                            <ion-icon name="arrow-forward" aria-hidden="true" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="service-card">
                                        <div className="card-icon">
                                            <i className="flaticon-hot-stone" />
                                        </div>
                                        <h3 className="h3">
                                            <a href="#" className="card-title">Body Treatments</a>
                                        </h3>
                                        <p className="card-text">
                                            Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <a href="#" className="card-btn" aria-label="more">
                                            <ion-icon name="arrow-forward" aria-hidden="true" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="service-card">
                                        <div className="card-icon">
                                            <i className="flaticon-treatment" />
                                        </div>
                                        <h3 className="h3">
                                            <a href="#" className="card-title">Beauty &amp; Spa</a>
                                        </h3>
                                        <p className="card-text">
                                            Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <a href="#" className="card-btn" aria-label="more">
                                            <ion-icon name="arrow-forward" aria-hidden="true" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="service-card">
                                        <div className="card-icon">
                                            <i className="flaticon-shaving-razor" />
                                        </div>
                                        <h3 className="h3">
                                            <a href="#" className="card-title">Stylist Shaving</a>
                                        </h3>
                                        <p className="card-text">
                                            Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <a href="#" className="card-btn" aria-label="more">
                                            <ion-icon name="arrow-forward" aria-hidden="true" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="service-card">
                                        <div className="card-icon">
                                            <i className="flaticon-hair-dye" />
                                        </div>
                                        <h3 className="h3">
                                            <a href="#" className="card-title">Multi Hair Colors</a>
                                        </h3>
                                        <p className="card-text">
                                            Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <a href="#" className="card-btn" aria-label="more">
                                            <ion-icon name="arrow-forward" aria-hidden="true" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* pricing */}

                    <section className="section pricing has-bg-image has-before" id="pricing" aria-label="pricing" style={{ backgroundImage: 'url("./images/pricing-bg.jpg")' }}>
                        <div className="container">
                            <h2 className="h2 section-title text-center">Awesome Pricing Plan</h2>
                            <p className="section-text text-center">
                                Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
                            </p>
                            <div className="pricing-tab-container">
                                <ul className="tab-filter">
                                    <li>
                                        <button className="filter-btn active" data-filter-btn="all">
                                            <div className="btn-icon">
                                                <i className="flaticon-beauty-salon" aria-hidden="true" />
                                            </div>
                                            <p className="btn-text">All Pricing</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="filter-btn" data-filter-btn="beauty-spa">
                                            <div className="btn-icon">
                                                <i className="flaticon-relax" aria-hidden="true" />
                                            </div>
                                            <p className="btn-text">Beauty &amp; Spa</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="filter-btn" data-filter-btn="body-treatments">
                                            <div className="btn-icon">
                                                <i className="flaticon-massage" aria-hidden="true" />
                                            </div>
                                            <p className="btn-text">Body Treatments</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="filter-btn" data-filter-btn="face-washing">
                                            <div className="btn-icon">
                                                <i className="flaticon-spa" aria-hidden="true" />
                                            </div>
                                            <p className="btn-text">Face Washing</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="filter-btn" data-filter-btn="meditations">
                                            <div className="btn-icon">
                                                <i className="flaticon-yoga" aria-hidden="true" />
                                            </div>
                                            <p className="btn-text">Meditations</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="filter-btn" data-filter-btn="shaving">
                                            <div className="btn-icon">
                                                <i className="flaticon-razor-blade" aria-hidden="true" />
                                            </div>
                                            <p className="btn-text">Shaving</p>
                                        </button>
                                    </li>
                                </ul>
                                <ul className="grid-list">
                                    <li data-filter="shaving">
                                        <div className="pricing-card">
                                            <figure className="card-banner img-holder" style={{ width: 90, height: 90 }}>
                                                <img src="./images/pricing-1.jpg" width={90} height={90} alt="Hair Cutting & Fitting" className="img-cover" />
                                            </figure>
                                            <div className="wrapper">
                                                <h3 className="h3 card-title">Hair Cutting &amp; Fitting</h3>
                                                <p className="card-text">Clean &amp; simple 30-40 minutes</p>
                                            </div>
                                            <data className="card-price" value={89}>$89</data>
                                        </div>
                                    </li>
                                    <li data-filter="shaving">
                                        <div className="pricing-card">
                                            <figure className="card-banner img-holder" style={{ width: 90, height: 90 }}>
                                                <img src="./images/pricing-2.jpg" width={90} height={90} alt="Shaving & Facial" className="img-cover" />
                                            </figure>
                                            <div className="wrapper">
                                                <h3 className="h3 card-title">Shaving &amp; Facial</h3>
                                                <p className="card-text">Clean &amp; simple 30-40 minutes</p>
                                            </div>
                                            <data className="card-price" value={45}>$45</data>
                                        </div>
                                    </li>
                                    <li data-filter="face-washing">
                                        <div className="pricing-card">
                                            <figure className="card-banner img-holder" style={{ width: 90, height: 90 }}>
                                                <img src="./images/pricing-3.jpg" width={90} height={90} alt="Hair Color & Wash" className="img-cover" />
                                            </figure>
                                            <div className="wrapper">
                                                <h3 className="h3 card-title">Hair Color &amp; Wash</h3>
                                                <p className="card-text">Clean &amp; simple 30-40 minutes</p>
                                            </div>
                                            <data className="card-price" value={35}>$35</data>
                                        </div>
                                    </li>
                                    <li data-filter="body-treatments">
                                        <div className="pricing-card">
                                            <figure className="card-banner img-holder" style={{ width: 90, height: 90 }}>
                                                <img src="./images/pricing-4.jpg" width={90} height={90} alt="Body Massage" className="img-cover" />
                                            </figure>
                                            <div className="wrapper">
                                                <h3 className="h3 card-title">Body Massage</h3>
                                                <p className="card-text">Clean &amp; simple 30-40 minutes</p>
                                            </div>
                                            <data className="card-price" value={56}>$56</data>
                                        </div>
                                    </li>
                                    <li data-filter="beauty-spa">
                                        <div className="pricing-card">
                                            <figure className="card-banner img-holder" style={{ width: 90, height: 90 }}>
                                                <img src="./images/pricing-5.jpg" width={90} height={90} alt="Beauty & Spa" className="img-cover" />
                                            </figure>
                                            <div className="wrapper">
                                                <h3 className="h3 card-title">Beauty &amp; Spa</h3>
                                                <p className="card-text">Clean &amp; simple 30-40 minutes</p>
                                            </div>
                                            <data className="card-price" value={27}>$27</data>
                                        </div>
                                    </li>
                                    <li data-filter="face-washing">
                                        <div className="pricing-card">
                                            <figure className="card-banner img-holder" style={{ width: 90, height: 90 }}>
                                                <img src="./images/pricing-6.jpg" width={90} height={90} alt="Facial & Face Wash" className="img-cover" />
                                            </figure>
                                            <div className="wrapper">
                                                <h3 className="h3 card-title">Facial &amp; Face Wash</h3>
                                                <p className="card-text">Clean &amp; simple 30-40 minutes</p>
                                            </div>
                                            <data className="card-price" value={63}>$63</data>
                                        </div>
                                    </li >
                                    <li data-filter="body-treatments">
                                        <div className="pricing-card">
                                            <figure className="card-banner img-holder" style={{ width: 90, height: 90 }}>
                                                <img src="./images/pricing-7.jpg" width={90} height={90} alt="Backbone Massage" className="img-cover" />
                                            </figure>
                                            <div className="wrapper">
                                                <h3 className="h3 card-title">Backbone Massage</h3>
                                                <p className="card-text">Clean &amp; simple 30-40 minutes</p>
                                            </div>
                                            <data className="card-price" value={43}>$43</data>
                                        </div>
                                    </li >
                                    <li data-filter="meditations">
                                        <div className="pricing-card">
                                            <figure className="card-banner img-holder" style={{ width: 90, height: 90 }}>
                                                <img src="./images/pricing-8.jpg" width={90} height={90} alt="Meditation & Massage" className="img-cover" />
                                            </figure>
                                            <div className="wrapper">
                                                <h3 className="h3 card-title">Meditation &amp; Massage</h3>
                                                <p className="card-text">Clean &amp; simple 30-40 minutes</p>
                                            </div>
                                            <data className="card-price" value={74}>$74</data>
                                        </div>
                                    </li >
                                </ul >
                            </div >
                        </div >
                    </section >

                    {/* rendez vous */}
                    <section className="section appoin" id="appointment" aria-label="appointment">
                        <div className="container">
                            <div className="appoin-card">
                                <figure className="card-banner img-holder" style={{ width: 250, height: 774 }}>
                                    <img src="./images/appoin-banner-1.jpg" width={250} height={774} loading="lazy" alt className="img-cover" />
                                </figure>
                                <div className="card-content">
                                    <h2 className="h2 section-title">Make Appointment</h2>
                                    <p className="section-text">
                                        Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua
                                        suspendisse
                                    </p>
                                    <form action className="appoin-form">
                                        <div className="input-wrapper">
                                            <input type="text" name="name" placeholder="Your Full Name" required className="input-field" />
                                            <input type="email" name="email_address" placeholder="Email Address" required className="input-field" />
                                        </div>
                                        <div className="input-wrapper">
                                            <input type="text" name="phone" placeholder="Phone Number" required className="input-field" />
                                            <select name="category" className="input-field">
                                                <option value="Select category">Select category</option>
                                                <option value="Beauty & spa">Beauty &amp; spa</option>
                                                <option value="Body massage">Body massage</option>
                                                <option value="Shaving & Facial">Shaving &amp; Facial</option>
                                                <option value="Hair Color">Hair Color</option>
                                            </select>
                                        </div>
                                        <input type="date" name="date" required className="input-field date" />
                                        <textarea name="message" placeholder="Write Message" required className="input-field" defaultValue={""} />
                                        <button type="submit" className="form-btn">
                                            <span className="span">Appointment Now</span>
                                            <ion-icon name="arrow-forward" aria-hidden="true" />
                                        </button>
                                    </form>
                                </div>
                                <figure className="card-banner img-holder" style={{ width: 250, height: 774 }}>
                                    <img src="./images/appoin-banner-2.jpg" width={250} height={774} loading="lazy" alt className="img-cover" />
                                </figure>
                            </div>
                        </div>
                    </section>
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
                            <form action className="input-wrapper">
                                <input type="email" name="email_address" placeholder="Enter Your Email" required className="email-field" />
                                <button type="submit" style={{backgroundolor :'red'}}>
                                    <span className="span">Subscribe Now</span>
                                    <ion-icon name="arrow-forward" aria-hidden="true" />
                                </button>
                            </form>
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
                                            <img src="./images/footer-blog-1.jpg" width={70} height={75} loading="lazy" alt="The beginners guide to Henna Brows in Brisbane" className="img-cover" />
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
                                            <img src="./images/footer-blog-2.jpg" width={70} height={75} loading="lazy" alt="How do I get rid of unwanted hair on my face?" className="img-cover" />
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
                                        7528 Roberts Ave. Palm Bay, FL 32907
                                    </address>
                                </li>
                                <li className="footer-list-item">
                                    <ion-icon name="call-outline" aria-hidden="true" />
                                    <a href="tel:+0123456789" className="contact-link">+012 (345) 67 89</a>
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


            <a href="#top" class="back-top-btn" aria-label="back to top" data-back-top-btn>
                <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
            </a>



        </div >
    )
}

export default Home