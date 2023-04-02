import React, { useState, useEffect } from "react";
import Input from "../../../component/input";
import axios from 'axios'

export default function AddRendezVous(props) {
    const [showModal, setShowModal] = useState(false);
    const [rendezvous, SetRendezVous] = useState({ Date: "", Heure: "", Etat: "", service: "", client: "" })
    const [errors, setError] = useState("");

    const [client, setClient] = useState([]);
    const [service, setService] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/client/getAll')
            .then((res) => {
                setClient(res.data)
            })
            .catch((err) => { console.log(err.message) })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:8080/api/service/getAll')
            .then((res) => {
                setService(res.data)
            })
            .catch((err) => { console.log(err.message) })
    }, [])

    const handleChange = (e) => {
        SetRendezVous({ ...rendezvous, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/rendezvous/add", rendezvous)
            .then((res) => {
                props.setRefresh(refresh => !refresh)
                props.message(res.data);
                setShowModal(false)
            })
            .catch((err) => {
                console.log(err.response.data);
                setError(err.response.data);

            });
    };




    return (
        <>
            <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => setShowModal(true)}
            >
                Add
            </button>

            <div>
                {showModal ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h5 className="text-center text-2xl font-semibold ">
                                            New Rendez vous
                                        </h5>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    <form className="relative p-6 flex-auto" onSubmit={handleSubmit}>
                                        <div className="my-4 text-slate-500 text-lg leading-relaxed">
                                            <div>
                                                <div className="relative z-0 w-full mb-6 group">
                                                    {
                                                        errors && (
                                                            <div className="text-red-600 mb-4 text-sm text-center">{errors}</div>
                                                        )
                                                    }
                                                    <div className="flex w-100 ">
                                                        <div className="mb-3 xl:w-96">
                                                            <select data-te-select-init style={{ width: '100%' }}
                                                                name="client"
                                                                onChange={handleChange}
                                                            >
                                                                <option value="service" selected disabled>client</option>
                                                                {
                                                                    client.map((client) => (
                                                                        <option value={client._id}>{client.fullName}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="relative z-0 w-full mb-6 group">
                                                    <Input
                                                        type="date"
                                                        name="Date"
                                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                        placeholder=" "
                                                        onChange={handleChange}
                                                    />
                                                    <label
                                                        htmlFor="floating_email"
                                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                    >
                                                        Date de rendez vous
                                                    </label>
                                                </div>
                                                <div className="relative z-0 w-full mb-6 group">
                                                    <Input
                                                        type="time"
                                                        name="Heure"
                                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                        placeholder=" "
                                                        onChange={handleChange}
                                                    />
                                                    <label
                                                        htmlFor="floating_email"
                                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                    >
                                                        temps de rendez vous
                                                    </label>
                                                </div>
                                                <div className="flex w-100 ">
                                                    <div className="mb-3 xl:w-96">
                                                        <select data-te-select-init style={{ width: '100%' }}
                                                            name="service"
                                                            onChange={handleChange}
                                                        >
                                                            <option value="service" selected disabled>Service</option>
                                                            {
                                                                service.map((service) => (
                                                                    <option value={service._id}>{service.Nom}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="flex w-100 ">
                                                    <div className="mb-3 xl:w-96">
                                                        <select data-te-select-init style={{ width: '100%' }}
                                                            name="Etat"
                                                            onChange={handleChange}
                                                        >
                                                            <option value="" selected disabled>Etat</option>
                                                            <option value="en attente">en attente</option>
                                                            <option value="terminé">terminé</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                    <button
                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Close
                                                    </button>
                                                    <button
                                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                        type="submit"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
                <div></div>
            </div>
        </>
    );
}
