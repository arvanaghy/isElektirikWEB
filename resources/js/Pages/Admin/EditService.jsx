import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'

export default function EditService({ auth, service }) {


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title_en', titleEn.value);
        formData.append('title_tr', titleTr.value);
        formData.append('description_en', descriptionEn.value);
        formData.append('description_tr', descriptionTr.value);
        formData.append('type', type.value);
        Inertia.post('/update-service/' + service.id, formData);
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
                            <div className='flex flex-col gap-2 w-full w-full'>
                                <div className="text-sm">
                                    title english : (english keyboard) * required
                                </div>
                                <input required defaultValue={service.title_en} className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" id='titleEn' />
                                <div className="text-sm">
                                    title turkish : (turkish keyboard) * required
                                </div>
                                <input required defaultValue={service.title_tr} className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" id='titleTr' />
                                <div className="text-sm">
                                    Description english : (english keyboard) * required
                                </div>
                                <textarea required defaultValue={service.description_en} className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" id='descriptionEn' />
                                <div className="text-sm">
                                    Description turkish : (turkish keyboard) * required
                                </div>
                                <textarea required defaultValue={service.description_tr} className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" id='descriptionTr' />
                                <div className="text-sm flex flex-col">
                                    <label htmlFor="type" className='mb-2'>
                                        Select Type
                                    </label>
                                    <select id='type'>
                                        <option defaultValue="Electrical" selected={service?.type == 'Electrical'}>Electrical</option>
                                        <option defaultValue="Mechanical" selected={service?.type == 'Mechanical'}>Mechanical</option>
                                    </select>
                                </div>

                                <div className='flex flex-col gap-1 justify-center items-center mt-10 w-full'>
                                    <button className='border  border-green-400 bg-green-300 hover:border-green-700 hover:scale-110 hover:text-white animate-pulse hover:bg-green-700 px-8 py-2 drop-shadow-xl shadow rounded-md hover:rounded-xl duration-500 active:bg-green-500' type='submit'>Update Service</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
