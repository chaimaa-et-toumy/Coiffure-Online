import React from 'react'
import NavBar from '../../component/navBar'
import SideBar from '../../component/sideBar'
import { BsFillMenuButtonWideFill, BsFillChatQuoteFill, BsCalendar2Month, BsFillPeopleFill } from "react-icons/bs";


export default function Dashboard() {
  return (
    <>
     <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <SideBar />
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
          <NavBar />
          <div className="main-content flex flex-col flex-grow p-4">
            <h1 className="font-bold text-2xl text-gray-700">Dashboard</h1>

            <div className="flex items-center text-gray-800">
              <div className="p-4 w-full">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 sm:col-span-6 md:col-span-3">
                    <div className="flex flex-row bg-white shadow-sm rounded p-4">
                      <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500">
                        <BsFillPeopleFill size={22}/>
                      </div>
                      <div className="flex flex-col flex-grow ml-4">
                        <div className="text-sm text-gray-500">Users</div>
                        <div className="font-bold text-lg">65</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 md:col-span-3">
                    <div className="flex flex-row bg-white shadow-sm rounded p-4">
                      <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500">
                        <BsFillMenuButtonWideFill size={22}/>
                      </div>
                      <div className="flex flex-col flex-grow ml-4">
                        <div className="text-sm text-gray-500">Service</div>
                        <div className="font-bold text-lg">54</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 md:col-span-3">
                    <div className="flex flex-row bg-white shadow-sm rounded p-4">
                      <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-violet-100 text-violet-500">
                        <BsCalendar2Month size={22}/>
                      </div>
                      <div className="flex flex-col flex-grow ml-4">
                        <div className="text-sm text-gray-500">Rendez vous</div>
                        <div className="font-bold text-lg">54</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 md:col-span-3">
                    <div className="flex flex-row bg-white shadow-sm rounded p-4">
                      <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                        <BsFillChatQuoteFill  size={22}/>
                      </div>
                      <div className="flex flex-col flex-grow ml-4">
                        <div className="text-sm text-gray-500">Commantaire</div>
                        <div className="font-bold text-lg">54</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
