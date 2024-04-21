import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'

export default function AddClient({ auth }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', title.value);

        const filesInput = document.querySelector('#files');
        Array.from(filesInput.files).forEach((file, index) => {
            formData.append(`images[${index}]`, file);
        });

        Inertia.post('/add-clients', formData);
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

                        <div className="p-6 text-gray-900"></div>

                        <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row justify-between items-center p-10 drop-shadow-lg gap-10'>
                            <div className='flex flex-col gap-4 lg:gap-10 w-full lg:w-1/2'>
                                <input required className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" placeholder='Client Name' id='title' />
                                <label htmlFor="files">Image</label>
                                <input required className=' rounded shadow ' type="file" id="files" name="files" multiple />

                            </div>
                            <button className='border  border-green-400 bg-green-300 hover:border-green-700 hover:scale-110 hover:text-white animate-pulse hover:bg-green-700 px-8 py-2 drop-shadow-xl shadow rounded-md hover:rounded-xl duration-500 active:bg-green-500' type='submit'>Register Client</button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
