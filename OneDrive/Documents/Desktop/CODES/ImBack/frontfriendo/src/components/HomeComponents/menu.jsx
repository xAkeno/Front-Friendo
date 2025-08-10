import React, { useEffect, useState } from 'react'
import Theme from '../theme';
import Logo from '../../assets/friendo_logo.png';
import LogoutModal from '../LogoutModal';
import { useNavigate } from "react-router-dom";
const menu = (props) => {
    const navigate = useNavigate()
    const [more,setMore] = useState(false)
    const [showLogOut,setShowLogOut] = useState(false)

    const updateModal = (val) => {
        setShowLogOut(val)
    } 
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setMore(true);
            } else {
                setMore(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const link = ["Home","Friends"];
    const imgLink = [
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-contact-icon lucide-contact"><path d="M16 2v2"/><path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><path d="M8 2v2"/><circle cx="12" cy="11" r="3"/><rect x="3" y="4" width="18" height="18" rx="2"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-marked-icon lucide-book-marked"><path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-ellipsis-icon lucide-circle-ellipsis"><circle cx="12" cy="12" r="10"/><path d="M17 12h.01"/><path d="M12 12h.01"/><path d="M7 12h.01"/></svg>
    ];
    
  return (
        <aside className={`${props.Side ? "w-[22%]" : "w-[30%]"} h-full flex flex-col items-center justify-between max-md:fixed
            max-md:w-[100%] 
            max-md:h-auto  max-md:bottom-0 max-md:left-0 
            max-md:z-50 max-md:flex-row max-md:dark:bg-gray-800 max-md:bg-blue-600`}>
        <nav className="flex w-full max-md:relative max-md:w-full">
        <ul className="
            flex flex-col justify-center gap-5 w-[100%] pr-10 pt-9 pl-10
            max-md:grid max-md:grid-cols-5 max-md:gap-4 max-md:place-items-center
            max-md:mx-auto max-md:p-2 max-md:h-auto max-md:pt-0 max-md:pl-0 max-md:pr-0
        ">
                <li className=' max-md:hidden'>
                    <span><img src={Logo} alt="Friendo Logo" title="Back to home?" className='w-43 cursor-pointer' onClick={() => {navigate("/Home")}}/></span>
                </li>
                
                {link.map((item,index) => {
                    return(
                        <li key={index} onClick={() => {navigate("/" + item)}} title={item} className="max-md:items-center max-md:justify-center max-sm:w-full max-md:w-[5%] text-[20px] font-medium flex items-center gap-3 w-full  hover:text-blue-500 cursor-pointer pr-2 pt-1 pl-2 pb-1 rounded-[5px]">
                            <span className='hover:bg-gray-200 p-1 rounded-xl'>{imgLink[index]}</span>
                            <span className='max-md:hidden'>{item}</span>
                        </li>                  
                    );
                })}
                <li onClick={() => {navigate("/chat")}} title="Chat" className="max-md:items-center max-md:justify-center max-sm:w-full max-md:w-[5%] flex text-[20px] font-medium items-center gap-3 w-full  hover:text-blue-500 cursor-pointer pr-2 pt-1 pl-2 pb-1 rounded-[5px]">
                    <span className='hover:bg-gray-200 p-1 rounded-xl'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-more-icon lucide-message-circle-more"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg></span>
                    <span className='max-md:hidden'>Chat</span>
                </li>
                <li onClick={() => {navigate("/Profile/" + props.username)}} title="Profile" className="max-md:items-center max-md:justify-center max-sm:w-full max-md:w-[5%] text-[20px] font-medium flex items-center gap-3 w-full hover:text-blue-500 cursor-pointer pr-2 pt-1 pl-2 pb-1 rounded-[5px]">
                    <span className='hover:bg-gray-200 p-1 rounded-xl'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
                    <span className='max-md:hidden'>Profile</span>
                </li>
                <li onClick={() => {setMore(!more)}} title="More"  className={`${!more ? "hidden" : "flex"} max-md:items-center max-md:justify-center max-sm:w-full max-md:w-[5%] text-[20px] font-medium items-center gap-3 w-full hover:text-blue-500 cursor-pointer pr-2 pt-1 pl-2 pb-1 rounded-[5px]`}>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-ellipsis-icon lucide-circle-ellipsis"><circle cx="12" cy="12" r="10"/><path d="M17 12h.01"/><path d="M12 12h.01"/><path d="M7 12h.01"/></svg></span>
                    <span className='max-md:hidden'>More</span>
                </li>
                {
                    !more && 
                    <>
                        <li onClick={() => {navigate("/Trend")}} title="Trending" className="max-md:items-center max-md:justify-center max-sm:w-full max-md:w-[5%] text-[20px] font-medium flex items-center gap-3 w-full hover:text-blue-500 cursor-pointer pr-2 pt-1 pl-2 pb-1 rounded-[5px]">
                            <span className='hover:bg-gray-200 p-1 rounded-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-decreasing-icon lucide-chart-column-decreasing"><path d="M13 17V9"/><path d="M18 17v-3"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M8 17V5"/></svg>
                            </span>
                            <span className='max-md:hidden'>Trending</span>
                        </li>
                        <li onClick={() => {navigate("/about")}} title="About" className="max-md:items-center max-md:justify-center max-sm:w-full max-md:w-[5%] text-[20px] font-medium flex items-center gap-3 w-full hover:text-blue-500 cursor-pointer pr-2 pt-1 pl-2 pb-1 rounded-[5px]">
                            <span className='hover:bg-gray-200 p-1 rounded-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-a-icon lucide-book-a"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m8 13 4-7 4 7"/><path d="M9.1 11h5.7"/></svg>
                            </span>
                            <span className='max-md:hidden'>About</span>
                        </li>
                        <li onClick={() => {navigate("/faq")}} title="Faq's" className="max-md:items-center max-md:justify-center max-sm:w-full max-md:w-[5%] text-[20px] font-medium flex items-center gap-3 w-full hover:text-blue-500 cursor-pointer pr-2 pt-1 pl-2 pb-1 rounded-[5px]">
                            <span className='hover:bg-gray-200 p-1 rounded-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-question-mark-icon lucide-message-circle-question-mark"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                            </span>
                            <span className='max-md:hidden'>Faq's</span>
                        </li>
                        <li onClick={() => {navigate("/privacy")}} title="Privacy" className="max-md:items-center max-md:justify-center max-sm:w-full max-md:w-[5%] text-[20px] font-medium flex items-center gap-3 w-full hover:text-blue-500 cursor-pointer pr-2 pt-1 pl-2 pb-1 rounded-[5px]">
                            <span className='hover:bg-gray-200 p-1 rounded-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-user-icon lucide-shield-user"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M6.376 18.91a6 6 0 0 1 11.249.003"/><circle cx="12" cy="11" r="4"/></svg>
                            </span>
                            <span className='max-md:hidden'>Privacy</span>
                        </li>
                        <li className="hidden max-lg:flex max-md:mx-auto max-sm:w-full max-md:w-[5%] text-[20px] font-medium items-center justify-center gap-3 w-full hover:text-blue-500 cursor-pointer pr-2 pt-1 pl-2 pb-1 rounded-[5px]">
                            <Theme/>
                        </li>
                        <li title="Log Out" onClick={() => {setShowLogOut(!showLogOut)}} className="max-md:items-center max-md:justify-center max-sm:w-full max-md:w-[5%] text-[20px] font-medium flex items-center gap-3 w-full hover:text-blue-500 cursor-pointer pr-2 pt-1 pl-2 pb-1 rounded-[5px]">
                            {showLogOut && <LogoutModal updateModal={updateModal}/>}
                            <span className='hover:bg-gray-200 p-1 rounded-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
                            </span>
                            <span className='max-md:hidden'>Log-Out</span>
                        </li>
                    </>
                }
                <button type="button" class="max-md:hidden text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer w-full">Spark</button>
            </ul>
        </nav>
    </aside>
  )
}

export default menu
