import React, { useState } from "react";
import Api from '../../../Utils/Api'


export default function AddCategorie(props) {
    const [showModal, setShowModal] = useState(false);
    const [categorie, setCategorie] = useState({ genre: "" });
    const [errors, setError] = useState("");

    const handleChange = (e) => {
        setCategorie({ ...categorie, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Api.post("/categorie/add", categorie)
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
                                            New Categorie
                                        </h5>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    <div className="relative p-6 flex-auto">
                                        <div className="my-4 text-slate-500 text-lg leading-relaxed">
                                            <form onSubmit={handleSubmit}>
                                                <div className="flex flex-col justify-center items-center">
                                                    {
                                                        errors && (
                                                            <div className="text-red-600 mb-3 text-sm">{errors}</div>
                                                        )
                                                    }
                                                    <div className="flex items-center mb-4">
                                                        <input id="default-checkbox" type="radio" value="femme" name="genre" onChange={handleChange}
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-dark-300">Femme</label>
                                                    </div>
                                                    <div className="flex items-center mb-4">
                                                        <input id="default-checkbox" type="radio" value="homme" name="genre" onChange={handleChange}
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-dark-300">Homme</label>
                                                    </div>
                                                    <div className="flex items-center mb-4">
                                                        <input id="default-checkbox" type="radio" value="tout" name="genre" onChange={handleChange}
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-dark-300">les deux</label>
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
                                            </form>
                                        </div>
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
