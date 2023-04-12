import React, { useState, useEffect } from 'react'
import NavBar from '../../../component/navBar'
import SideBar from '../../../component/sideBar'
import AddRendezVous from './addRendezVous'
import EditRendezVous from './editRendezVous'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from '../../../Utils/Api'

export default function Rendez_vous() {

    const [rendezvous, setRendezVous] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {

        Api.get('/rendezvous/getAll')
            .then(res => {
                setRendezVous(res.data)
                // console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [refresh])

    //delete rendez vous
    const deleteRendezVous = (id) => {
        Api.delete(`/rendezvous/delete/${id}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(err => {
                console.log(err)
            })
    }

    // show toast
    const ShowToastMessage = (message) => {
        toast.info(message, {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }


    return (
        <div className="w-full">
            <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
                <NavBar />
                <div className="main-content flex flex-col flex-grow p-4">
                    <ToastContainer />
                    <div className="flex justify-between items-center">
                        <div className="font-bold text-2xl text-gray-700">Rendez vous</div>
                        <div className="p-4 mr-3">
                            <AddRendezVous setRefresh={setRefresh} message={ShowToastMessage} />
                        </div>
                    </div>

                    <div className="rounded-lg border border-gray-200 shadow-md m-3 overflow-x-scroll">
                        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Nom Client</th>
                                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Date</th>
                                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Heure</th>
                                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Type de service</th>
                                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Etat</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                                {
                                    rendezvous.map((data, index) => {

                                        return (
                                            <tr  key={data._id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4">
                                                    <span>{data.client?.fullName}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex gap-2">
                                                        <span>{data.Date}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span>{data.Heure}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span>{data.service?.Nom}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span>{data.Etat}</span>
                                                </td>

                                                <td className="px-6 py-4">
                                                    <div className="flex justify-end gap-4">
                                                        <EditRendezVous id={data._id} setRefresh={setRefresh} message={ShowToastMessage} />

                                                        <button onClick={() => deleteRendezVous(data._id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                                stroke="currentColor" className="h-6 w-6" x-tooltip="tooltip">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )

                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}
