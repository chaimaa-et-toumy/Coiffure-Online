import React from 'react'

export default function Pricing() {

    // Tab Filter
    const pricingTabFilter = () => {
        // get all tab buttons: all pricing, beauty & spa, body treatments, ...
        const tabFilter = document.querySelectorAll('.tab-filter button');
        // get all item cards: hair cutting & fitting, shaving & facial, ...
        const gridList = document.querySelectorAll('.grid-list li');

        // buttons exist
        if (tabFilter) {
            // on each tab button add listener
            tabFilter.forEach((btn) => {
                btn.addEventListener('click', function () {
                    // get the data-filter-btn value of the clicked tab button
                    const filterValue = this.getAttribute('data-filter-btn');

                    // remove the active class from the previous tab button
                    tabFilter.forEach((btn) => {
                        btn.classList.remove('active');
                    });

                    // add active class to "this" tab button that we clicked
                    this.classList.add('active');

                    // search all card items
                    gridList.forEach((item) => {
                        if (filterValue === 'all' || item.getAttribute('data-filter') === filterValue) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
        }
    };

    React.useEffect(() => {
        pricingTabFilter();
    }, []);

    return (
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
                                    <img src="./images/pricing-1.jpg" width={90} height={90}  className="img-cover" alt="img"/>
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
                                    <img src="./images/pricing-2.jpg" width={90} height={90}  className="img-cover" alt="img"/>
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
                                    <img src="./images/pricing-3.jpg" width={90} height={90}  className="img-cover" alt="img"/>
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
                                    <img src="./images/pricing-4.jpg" width={90} height={90}  className="img-cover" alt="img"/>
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
                                    <img src="./images/pricing-5.jpg" width={90} height={90}  className="img-cover" alt="img"/>
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
                                    <img src="./images/pricing-6.jpg" width={90} height={90}  className="img-cover" alt="img" />
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
                                    <img src="./images/pricing-7.jpg" width={90} height={90}  className="img-cover" alt="img" />
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
                                    <img src="./images/pricing-8.jpg" width={90} height={90}  className="img-cover"  alt="img"/>
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
    )
}
