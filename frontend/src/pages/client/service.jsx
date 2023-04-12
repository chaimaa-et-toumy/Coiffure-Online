import React, { useState, useEffect } from 'react'
import Api from '../../Utils/Api'


export default function Service() {
    const [service, setService] = useState([])

    useEffect(() => {

        Api.get('/service/getAll')
            .then(res => {
                setService(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <section className="section service" id="services" aria-label="services">
            <div className="container">
                <h2 className="h2 section-title text-center">Service We Provide</h2>
                <p className="section-text text-center">
                    Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
                </p>
                <ul className="grid-list">
                    {
                        service.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className="service-card">
                                        <div className="card-icon">
                                            <i className="flaticon-salon" />
                                        </div>
                                        <h3 className="h3">
                                            <a href="#" className="card-title">{item.Nom}</a>
                                        </h3>
                                        <p className="card-text">
                                            {item.description}
                                        </p>
                                        <p className="card-text">
                                            Produit Utilisée :  {item.produitUtilise}
                                        </p>
                                        <p className="card-text">
                                            type de categorie :  {item.categorie?.genre}
                                        </p>
                                        <p className="card-text">
                                            Prix :  {item.prix}
                                        </p>
                                        <a href="/#" className="card-btn" aria-label="more">
                                            <ion-icon name="arrow-forward" aria-hidden="true" />
                                        </a>
                                    </div>
                                </li>
                            )
                        }
                        )}
                    {/* // <li>
                    //     <div className="service-card">
                    //         <div className="card-icon">
                    //             <i className="flaticon-salon" />
                    //         </div>
                    //         <h3 className="h3">
                    //             <a href="#" className="card-title">Hair Cutting Style</a>
                    //         </h3>
                    //         <p className="card-text">
                    //             Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    //         </p>
                    //         <a href="#" className="card-btn" aria-label="more">
                    //             <ion-icon name="arrow-forward" aria-hidden="true" />
                    //         </a>
                    //     </div>
                    // </li> */}
                </ul>
            </div>
        </section>
    )
}
