import React, { useState, useEffect } from "react";
import Api from "../../Utils/Api";
import Input from "../../component/input";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Rendezvous() {
    const [rendezvous, SetRendezVous] = useState({ Date: "", Heure: "", service: "", fullName: "", phoneNumber: "" });
    const [errors, setError] = useState("");
    const [service, setService] = useState([])

    useEffect(() => {
        Api.get('/service/getAll')
            .then((res) => {
                setService(res.data)
            })
            .catch((err) => { console.log(err.message) })
    }, [])

    const handleChange = (e) => {
        SetRendezVous({ ...rendezvous, [e.target.name]: e.target.value });
    };

    function isFutureDate(dateString) {
        const inputDate = new Date(dateString);
        const currentDate = new Date();
        return inputDate < currentDate;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!/^[a-zA-Z\s]+$/.test(rendezvous.fullName)) {
            return setError("Please enter a valid full name");
        } else if (!/^[0-9]+$/.test(rendezvous.phoneNumber)) {
            return setError("Please enter a valid phone number");
        } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(rendezvous.email)) {
            return setError("Please enter a valid email");
        } else if (isFutureDate(rendezvous.Date)) {
            return setError("Please enter a valid date");
        }

        Api.post("/rendezvous/addClientRendez", rendezvous)
            .then((res) => {
                toast.info(res.data, {
                    position: "top-right",
                    autoClose: 6000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch((err) => {
                console.log(err.response.data);
                setError(err.response.data);

            });
    };

    return (
        <section className="section appoin" id="appointment" aria-label="appointment">
            <div className="container">
                <div className="appoin-card">
                    <figure className="card-banner img-holder" style={{ width: 250, height: 774 }}>
                        <img src="./images/appoin-banner-1.jpg" width={250} height={774} loading="lazy" className="img-cover" alt="img"/>
                    </figure>
                    <div className="card-content">
                        <h2 className="h2 section-title">Make Appointment</h2>
                        <p className="section-text">
                            Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua
                            suspendisse
                        </p>

                        {
                            errors && (
                                <div className="text-red-600 mb-4  text-center">{errors}</div>
                            )
                        }

                        <form className="appoin-form" onSubmit={handleSubmit}>
                            <div className="input-wrapper">
                                <Input
                                    type="text"
                                    name="fullName"
                                    className="input-field"
                                    placeholder="Your Full Name"
                                    onChange={handleChange}
                                />
                                <Input
                                    type="text"
                                    name="phoneNumber"
                                    className="input-field"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-wrapper">
                                <Input
                                    type="time"
                                    name="Heure"
                                    className="input-field"
                                    placeholder="Time"
                                    onChange={handleChange}
                                />
                                <Input
                                    type="date"
                                    name="Date"
                                    className="input-field date"
                                    placeholder="Date"
                                    onChange={handleChange}
                                />
                            </div>
                            <Input
                                type="email"
                                name="email"
                                className="input-field"
                                placeholder="your Email"
                                onChange={handleChange}
                            />
                            <select name="service" className="input-field" onChange={handleChange}>
                                <option value="service">Select category</option>
                                {
                                    service.map((service) => (
                                        <option key={service._id} value={service._id}>{service.Nom}</option>
                                    ))
                                }
                            </select>
                            <button type="submit" className="form-btn">
                                <span className="span">Appointment Now</span>
                                <ion-icon name="arrow-forward" aria-hidden="true" />
                            </button>
                        </form>
                        <ToastContainer />
                    </div>
                    <figure className="card-banner img-holder" style={{ width: 250, height: 774 }}>
                        <img src="./images/appoin-banner-2.jpg" width={250} height={774} loading="lazy" alt="img" className="img-cover" />
                    </figure>
                </div>
            </div>
        </section>
    )
}
