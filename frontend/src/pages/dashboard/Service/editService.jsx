import React, { useState, useEffect } from "react";
import Input from "../../../component/input";
import Api from '../../../Utils/Api'


export default function EditService(props) {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({ Nom: "", prix: "", produitUtilise: "", categorie: "", description: "" });
    const [errors, setError] = useState("");
    const [currentId, setCurrentId] = useState(null);
    const [Categorie, setCategories] = useState([]);


    useEffect(() => {
        Api.get('/categorie/getAll')
            .then((res) => {
                setCategories(res.data)
            })
            .catch((err) => { console.log(err.message) })
    }, [])

    function getOneService(id) {
        Api.get(`/service/getById/${id}`)
            .then((res) => {
                setData(res.data);
                setCurrentId(id)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Api.put(`/service/update/${currentId}`, data)
            .then((res) => {
                props.setRefresh(refresh => !refresh)
                props.message(res.data);
                setShowModal(false)
            })
            .catch((err) => {
                console.log(err.response.data);
                setError(err.response.data);
            });
    }

    return (
        <>
            <button onClick={() => { setShowModal(true); getOneService(props.id) }} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="h-6 w-6" x-tooltip="tooltip">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
            </button>

            <div>
                {showModal ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h5 className="text-center text-2xl font-semibold ">
                                            Edit Service
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
                                    <div className="relative p-6 flex-auto">
                                        <form className="my-4 text-slate-500 text-lg leading-relaxed" onSubmit={handleSubmit}>
                                            <div>
                                                <div className="grid md:grid-cols-2 md:gap-6">
                                                    <div className="relative z-0 w-full mb-6 group">
                                                        <Input
                                                            type="text"
                                                            name="Nom"
                                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                            placeholder=" "
                                                            value={data.Nom}
                                                            onChange={handleChange}
                                                        />

                                                        <label
                                                            htmlFor="floating_phone"
                                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                        >
                                                            Nom de Service
                                                        </label>
                                                    </div>
                                                    <div className="relative z-0 w-full mb-6 group">
                                                        <Input

                                                            type="text"
                                                            name="prix"
                                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                            placeholder=" "
                                                            value={data.prix}
                                                            onChange={handleChange}
                                                        />

                                                        <label
                                                            htmlFor="floating_phone"
                                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                        >
                                                            prix
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="relative z-0 w-full mb-6 group">
                                                    <Input
                                                        type="text"
                                                        name="produitUtilise"
                                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                        placeholder=" "
                                                        value={data.produitUtilise}
                                                        onChange={handleChange}
                                                    />
                                                    <label
                                                        htmlFor="floating_email"
                                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                    >
                                                        Produit Utilisée
                                                    </label>
                                                </div>
                                                <div className="relative z-0 w-full mb-6 group">
                                                    <Input
                                                        type="text"
                                                        name="description"
                                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                        placeholder=" "
                                                        value={data.description}
                                                        onChange={handleChange}
                                                    />
                                                    <label
                                                        htmlFor="floating_email"
                                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                    >
                                                        Description
                                                    </label>
                                                </div>
                                                <div className="flex w-100 ">
                                                    <div className="mb-3 xl:w-96">
                                                        <select data-te-select-init style={{ width: '100%' }}
                                                            name="categorie"
                                                            value={data.categorie._id}
                                                            onChange={handleChange}>
                                                            {
                                                                Categorie.map((categorie, index) => (
                                                                    <option key={index} value={categorie._id}>{categorie.genre}</option>
                                                                ))
                                                            }
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
                                                        Edit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
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
