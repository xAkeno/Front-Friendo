import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from "react-router-dom";
const Notify = (props) => {
    const navigate = useNavigate();
    const [show,setShow] = useState(false);
    const url = "http://localhost:8080/auth/check";
    const location = useLocation();

    const isOnRoot = location.pathname === "/";
    const checkAuth = () => {
        axios.get(url,{
            withCredentials:true
        }).then(res => {
            console.log(res.data)
            if(!res.data){
                setShow(true);
            } else {
                setShow(false);
            }
        }).catch(err => {
            if(!isOnRoot){
                setShow(true)
            }
        })
    }
    useEffect(() => {

            checkAuth();
        
    },[])
    return (
    <div id="popup-modal" tabindex="-1" className={`${show ? "flex" : "hidden"} w-full max-[575px]:w-[100%] bg-gray-900/70 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0 h-[calc(100%)] max-h-full`}>
        <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 w-[30%]">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Log in to continue
                </h3>
                {/* <button type="button" onClick={() => (setShow(true))} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button> */}
            </div>
            <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    You need to log in to view this content.
                    Sign in to your account to see more details, interact with other users, and enjoy the full experience.
                </p>
            </div>
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button onClick={() => {
                    navigate("/");
                    setShow(false)

                }} data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Head to login</button>
            </div>
        </div>
    </div>
  )
}

export default Notify
