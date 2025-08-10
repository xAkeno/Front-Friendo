import React, { useState } from 'react'

const FaqBody = () => {
    const [show1,setShow1] = useState(false);
    const [show2,setShow2] = useState(false);
    const [show3,setShow3] = useState(false);
    const [show4,setShow4] = useState(false);
  return (
    <div className='w-[60%] max-md:w-[85%] block mx-auto mt-5 mb-5 max-md:mb-20 text-black'>
        <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
            <h2 id="accordion-color-heading-1">
                <button type="button" onClick={() => {setShow1(!show1)}} className="cursor-pointer flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                <span>What is Friendo?</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-color-body-1" className={`${show1 ? "flex" : "hidden"}`} aria-labelledby="accordion-color-heading-1">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 w-[100%]">
                <p className="mb-2 text-gray-900 dark:text-gray-400">Friendo is a real-time chat app built to showcase my skills in web development.</p>
                </div>
            </div>
            <h2 id="accordion-color-heading-2">
                <button type="button" onClick={() => {setShow2(!show2)}} className="cursor-pointer flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                <span>What is it for?</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-color-body-1" className={`${show2 ? "flex" : "hidden"}`} aria-labelledby="accordion-color-heading-1">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 w-[100%]">
                <p className="mb-2 text-gray-900 dark:text-gray-400">It’s a demo to show how secure, interactive chat systems work. It’s not a real social platform, so please avoid sharing personal information.</p>
                </div>
            </div>
            <h2 id="accordion-color-heading-2">
                <button type="button" onClick={() => {setShow3(!show3)}} className="cursor-pointer flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                <span>What is it made with?</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-color-body-1" className={`${show3 ? "flex" : "hidden"}`} aria-labelledby="accordion-color-heading-1">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 w-[100%]">
                    <div className="mb-2 text-gray-900 dark:text-gray-400 [&>ul]:list-disc [&>ul]:p-2 [&>h2]:font-bold">
                        <h2>Backend:</h2>
                        <ul>
                            <li>Spring Boot (Java)</li>
                            <li>WebSocket with SockJS and STOMP for real-time messaging</li>
                            <li>REST API endpoints for additional data handling</li>
                        </ul>

                        <h2>Frontend:</h2>
                        <ul>
                            <li>React for building the user interface</li>
                            <li>Tailwind CSS for a clean, responsive design</li>
                            <li>Axios for making REST API calls to backend services</li>
                        </ul>

                        <h2>Authentication &amp; Security:</h2>
                        <ul>
                            <li>JWT tokens stored securely in HTTP-only cookies to protect against XSS attacks</li>
                            <li>Spring Security integrated to safeguard backend endpoints and WebSocket connections</li>
                            <li>CORS and CSRF protections configured for safe cross-origin requests</li>
                            <li>Encrypted communication via HTTPS enforced in deployment</li>
                        </ul>

                        <h2>Database:</h2>
                        <ul>
                            <li>MySQL for storing user data and chat messages</li>
                        </ul>

                        <h2>Deployment:</h2>
                        <ul>
                            <li>Frontend and backend deployed on Azure</li>
                            <li>Static assets served via Azure Blob Storage for scalable, fast content delivery</li>
                        </ul>
                        <h2>Testing &amp; Development Tools:</h2>
                        <ul>
                            <li>Docker for containerized development and testing</li>
                            <li>Postman for API testing and debugging</li>
                            <li>XAMPP for local MySQL and Apache server setup during development</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
                <button type="button" onClick={() => {setShow4(!show4)}} class="cursor-pointer flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                <span>How can we contact you?</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-3" className={`${show4 ? "flex" : "hidden"}`} aria-labelledby="accordion-collapse-heading-3">
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 w-[100%]">
                <p className="mb-2 text-gray-900 dark:text-gray-400">If you have any questions, feedback, or want to connect, feel free to reach out! You can contact me via:   </p>
                <ul className='[&>li]:list-disc px-6'>
                    <li>Email: <a href='mailto:clarkkentraguhos@gmail.com' className='text-blue-400'>clarkkentraguhos@gmail.com</a></li>
                    <li>Linkedln: <a href='https://www.linkedin.com/in/clark-kent-199247314/' className='text-blue-400'>https://www.linkedin.com/in/clark-kent-199247314/</a></li>
                    <li>Upwork: <a href='https://www.upwork.com/freelancers/~0107eac498e102a86e?mp_source=share' className='text-blue-400'>https://www.upwork.com/freelancers/~0107eac498e102a86e?mp_source=share</a></li>
                    <li>GitHub: <a href="https://github.com/xAkeno" className='text-blue-400'>https://github.com/xAkeno</a></li>
                </ul>
                <p className="mt-2 text-gray-900 dark:text-gray-400">I’m always happy to chat about this project or collaborate on new ideas!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FaqBody
