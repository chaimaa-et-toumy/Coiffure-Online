import React from 'react'

export default function Main() {
  return (
    <section className="section hero has-before has-bg-image" id="home" aria-label="home" style={{ backgroundImage: 'url("./images/hero-banner.jpg")' }}>
      <div className="container">
        <h1 className="h1 hero-title">Barbers &amp; Hair Cutting</h1>
        <p className="hero-text">
          Transform your hair and indulge in a luxurious styling experience at our hair salon
          and Discover your perfect look with our expert hair stylists at our salon.
        </p>
        <a href="#" className="btn has-before">
          <span className="span">Explore Our Services</span>
          <ion-icon name="arrow-forward" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
