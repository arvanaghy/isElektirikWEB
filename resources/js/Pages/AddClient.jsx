import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';



export default function AddClient({ auth }) {

    const handleSubmit= (e) => {
        e.preventDefault()
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Manage Clients</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row justify-between items-center p-10 drop-shadow-lg gap-10'>
                            <div className='flex flex-col gap-4 lg:gap-10 w-full lg:w-1/2'>
                           
                           <input  required  className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" placeholder='Client Name' id='client-name'/>
                           
                           <input  required className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" placeholder='Last Login Date' id='last-client-login'/>
                                                       
                           
                           <input required  className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" placeholder='Address' id='project-province'/>

                           <input  required  className='border border-green-400 rounded-md hover:rounded-xl duration-500'type="text" placeholder='Phone' id='project-alley'/>
                            </div>
                            <div className='w-full lg:w-1/2 flex flex-col items-center   gap-5'>
                                <div>
                                    <p className='text-md lg:text-xl pb-4'>Select the Role Of The Client</p>
                                    <div className='flex flex-col'>
                                        <span className='flex flex-row items-center gap-4 py-2 text-sm lg:text-lg'>
                                            <input type="radio" id="admin" name="fav_language" value="Admin"/>
                                            <label for="admin">Admin</label><br/>
                                        </span>
                                        <span className='flex flex-row items-center gap-4 py-2 text-sm lg:text-lg'>
                                            <input type="radio" id="customer" name="fav_language" value="Customer"/>
                                            <label for="customer">Customer</label><br/>
                                        </span>
                                        <span className='flex flex-row items-center gap-4 py-2 text-sm lg:text-lg'>
                                            <input type="radio" id="guest" name="fav_language" value="Guest"/>
                                            <label for="guest">Guest</label><br/>
                                        </span>
                                    </div>
                                </div>
                                <input type="text" placeholder='Location' className='border border-green-400 px-8 py-2 drop-shadow-xl shadow rounded-md hover:rounded-xl duration-500 active:bg-green-500'/>
                                <hr className=''/>
                                <button className='border  border-green-400 bg-green-300 hover:border-green-700 hover:scale-110 hover:text-white animate-pulse hover:bg-green-700 px-8 py-2 drop-shadow-xl shadow rounded-md hover:rounded-xl duration-500 active:bg-green-500' type='submit'>Register Client</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
