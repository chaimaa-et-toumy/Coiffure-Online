import React, { useState, useEffect } from 'react'
import NavBar from '../../component/navBar'
import Api from '../../Utils/Api'

export default function Commantaire() {

    const [commantaire, setCommantaire] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {

        Api.get('/commentaire/getAll')
            .then(res => {
                setCommantaire(res.data)
                // console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [refresh])

    //delete commentaire
    const deleteCommantaire = (id) => {
        Api.delete(`/commentaire/delete/${id}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="w-full">
            <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
                <NavBar />
                <div className="main-content flex flex-col flex-grow p-4">
                    <h1 className="font-bold text-2xl text-gray-700">Commantaire</h1>

                    <div className="rounded-lg border border-gray-200 shadow-md m-3 overflow-x-scroll">
                        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Nom</th>
                                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Feedback</th>
                                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Review</th>
                                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">type de service</th>
                                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">date</th>

                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 border-t border-gray-100">

                                {
                                    commantaire.map((Commente, index) => {
                                        return (
                                            <tr key={Commente._id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4">
                                                    <span>{Commente.Name}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex gap-2">
                                                        <span>{Commente.Commentair}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span>{Commente.Review}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span>{Commente.service.Nom}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span>{Commente.date.split('T')[0]}</span>
                                                </td>

                                                <td className="px-6 py-4">
                                                    <div className="flex justify-end gap-4">
                                                        <button onClick={() => deleteCommantaire(Commente._id)}>
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
