import React, { useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const ContactsAdmin = ({auth}) => {
  const [isRead, setIsRead] = useState(true)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                   Manage Project Admin
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10">
                    <div className="flex flex-row justify-between items-center p-10   bg-white shadow-sm sm:rounded-lg">
                        <div className="flex flex-row items-center justify-between w-full border border-green-400 rounded-md text-center p-10 overflow-scroll lg:overflow-hidden">
                            
                        <table class="table-auto w-full">
                            <thead>
                                <tr>
                                <th class="px-4 py-2">Index</th>
                                <th class="w-1/2 px-4 py-2">Ticket Title</th>
                                <th class="w-1/4 px-4 py-2">Date Created</th>
                                <th class="w-1/4 px-4 py-2">Customer</th>
                                <th class="w-1/4 px-4 py-2">Opreation</th>
                                </tr>
                            </thead>
                            <tbody className="shadow-lg">
                                <tr>
                                <td class="border px-4 py-2">1</td>
                                <td class="border px-4 py-2">Intro to CSS</td>
                                <td class="border px-4 py-2">Adam</td>
                                <td class="border px-4 py-2">858</td>
                                <td class="border px-4 py-2">
                                      {isRead ? <button 
                                        className="bg-green-400 w-full py-2 rounded-lg hover:bg-black duration-200 hover:text-white" 
                                        onClick={()=> setIsRead(prev => !prev)}>
                                        Seen</button> : 
                                        <button onClick={()=> setIsRead(prev => !prev)}  
                                        className="bg-red-400 w-full py-2 rounded-lg hover:bg-black duration-200 hover:text-white"
                                        >See</button>}
                                </td>
                                </tr>
                            </tbody>
                            </table>                   
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ContactsAdmin;