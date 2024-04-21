import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'

export default function CreateCatalog({ auth }) {


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title.value);
        formData.append('description', description.value);
        const filesInput = document.querySelector('#files');
        Array.from(filesInput.files).forEach((file, index) => {
            formData.append(`images[${index}]`, file);
        });

        Inertia.post('/submit-catalog', formData);
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Admin Dashboard</h2>}
        >
            <Head title="Dashboard" />


            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white  py-3 px-2 shadow-sm sm:rounded-lg">
                        <h2>
                            Create Catalog
                        </h2>
                    </div>
                </div>
            </div>


            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row justify-between items-center p-10 drop-shadow-lg gap-10'>
                            <div className='flex flex-col gap-3 w-full '>

                                <input required className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" placeholder='Name' id='title' />

                                <textarea required className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" placeholder='description' id='description' />

                                <div className='flex flex-row gap-1 justify-center items-center w-full '>
                                    <label htmlFor="files">file</label>
                                    <input required className=' rounded shadow ' type="file" id="files" name="files"  />
                                    <br />
                                </div>

                                <button className='border  border-green-400 bg-green-300 hover:border-green-700 hover:scale-110 hover:text-white animate-pulse hover:bg-green-700 px-8 py-2 drop-shadow-xl shadow rounded-md hover:rounded-xl duration-500 active:bg-green-500' type='submit'>Register Catalog</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
