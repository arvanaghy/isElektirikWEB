import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'

export default function AddProject({ auth }) {


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title.value);
        formData.append('slug', slug.value);
        formData.append('descriptionEn', descriptionEn.value);
        formData.append('descriptionTr', descriptionTr.value);
        formData.append('province', province.value);
        formData.append('alley', alley.value);
        formData.append('startDate', startDate.value);
        formData.append('endDate', endDate.value);
        formData.append('location', locationmap.value);

        const filesInput = document.querySelector('#files');
        Array.from(filesInput.files).forEach((file, index) => {
            formData.append(`images[${index}]`, file);
        });

        Inertia.post('/submit-project', formData);
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Admin Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row justify-between items-center p-10 drop-shadow-lg gap-10'>
                            <div className='flex flex-col gap-3 w-full lg:w-1/2'>

                                <input required className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" placeholder='Name' id='title' />

                                <input required className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" placeholder='Slug' id='slug' />

                                <textarea required className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" placeholder='Description EN' id='descriptionEn' />

                                <textarea required className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" placeholder='Description TR' id='descriptionTr' />

                                <input required className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" placeholder='Province' id='province' />

                                <input required className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" placeholder='Alley' id='alley' />
                            </div>
                            <div className='w-full lg:w-1/2 flex flex-col items-center   gap-5'>
                                <div className=' w-full flex flex-col lg:flex-row  justify-between items-center'>
                                    <label htmlFor='startDate'>Start Date</label>
                                    <input required placeholder='Select Start Date' className='w-full lg:w-1/3 border border-green-500 text-gray-500 rounded-md hover:rounded-xl duration-500' type="date" id="startDate" />
                                    <label htmlFor='endDate'>End Date</label>
                                    <input required placeholder='Select Start Date' className='w-full lg:w-1/3 border border-green-500 text-gray-500 rounded-md hover:rounded-xl duration-500' type="date" id="endDate" />
                                </div>
                                <div className='flex flex-row gap-1 justify-center items-center w-full'>
                                    <label htmlFor="files">Images</label>
                                    <input required className=' rounded shadow ' type="file" id="files" name="files" multiple />
                                    <br />
                                </div>
                                <input type="text" placeholder='Location' id='locationmap' className='border border-green-400 px-8 py-2 drop-shadow-xl shadow rounded-md hover:rounded-xl duration-500 active:bg-green-500' />
                                <hr className='' />
                                <button className='border  border-green-400 bg-green-300 hover:border-green-700 hover:scale-110 hover:text-white animate-pulse hover:bg-green-700 px-8 py-2 drop-shadow-xl shadow rounded-md hover:rounded-xl duration-500 active:bg-green-500' type='submit'>Register Project</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
