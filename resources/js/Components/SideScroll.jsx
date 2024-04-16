import React from 'react'

const SideScroll = () => {
    return (
        <div className='hidden fixed top-[40%] left-4 text-green-500 z-[999] lg:flex flex-col space-y-3'>
            <button onClick={() => window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
            }>
                <svg className='w-6 h-6 hover:scale-105 duration-300 hover:animate-pulse' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
            <span>
                <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Line_Xl"> <path id="Vector" d="M12 21V3" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
            </span>
            <button onClick={() => window.scrollTo({
                top: document.body.scrollHeight / 4,
                behavior: "smooth",
            })
            }>
                <svg className='w-6 h-6 hover:scale-150 duration-300 hover:animate-pulse' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#22c55e"></path> </g></svg>
            </button>
            <span>
                <svg className='w-6 h-6 hover:scale-105 duration-300 hover:animate-pulse' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Line_Xl"> <path id="Vector" d="M12 21V3" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
            </span>
            <button onClick={() => window.scrollTo({
                top: document.body.scrollHeight / 2,
                behavior: "smooth",
            })
            }>
                <svg className='w-6 h-6 hover:scale-105 duration-300 hover:animate-pulse' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
            <span>
                <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Line_Xl"> <path id="Vector" d="M12 21V3" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
            </span>
            <button onClick={() => window.scrollTo({
                top: document.body.scrollHeight * 3 / 4,
                behavior: "smooth",
            })
            }>
                <svg className='w-6 h-6 hover:scale-150 duration-300 hover:animate-pulse' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#22c55e"></path> </g></svg>
            </button>
            <span>
                <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Line_Xl"> <path id="Vector" d="M12 21V3" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
            </span>
            <button
                onClick={() => window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                })
                }
            >
                <svg className='w-6 h-6 hover:scale-105 duration-300 hover:animate-pulse' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
        </div >
    )
}

export default SideScroll