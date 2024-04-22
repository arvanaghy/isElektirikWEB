import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'

export default function EditProject({ auth, project, images }) {


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', title.value);
        formData.append('slug', slug.value);
        formData.append('description_en', descriptionEn.value);
        formData.append('description_tr', descriptionTr.value);
        formData.append('province', province.value);
        formData.append('alley', alley.value);
        formData.append('start_date', startDate.value);
        formData.append('end_date', endDate.value);
        formData.append('location', locationmap.value);

        Inertia.post('/update-project/' + project.id, formData);
    }


    const handleSubmitImages = (e) => {
        e.preventDefault();
        const formData = new FormData();
        const filesInput = document.querySelector('#files');
        Array.from(filesInput.files).forEach((file, index) => {
            formData.append(`images[${index}]`, file);
        });
        Inertia.post('/update-project-images/' + project.id, formData);
    }


    const handleDeleteImages = (e, id) => {
        e.preventDefault();
        Inertia.delete('/delete-project-image/' + id);
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Admin Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-row items-center justify-between overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row justify-between items-center p-10 drop-shadow-lg gap-10  w-full lg:w-1/2'>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor="title">title</label>
                                <input required defaultValue={project.name} className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" id='title' />
                                <label htmlFor="slug">
                                    slug
                                </label>
                                <input required defaultValue={project.slug} className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" id='slug' />
                                <label htmlFor="descriptionEn"> Description EN </label>
                                <textarea required defaultValue={project.description_en} className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" id='descriptionEn' />

                                <label htmlFor="descriptionTr"> Description Tr </label>
                                <textarea required className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" defaultValue={project.description_tr} id='descriptionTr' />

                                <label htmlFor="province">
                                    Province
                                </label>
                                <input required defaultValue={project.province} className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" id='province' />
                                <label htmlFor="alley">
                                    alley
                                </label>
                                <input defaultValue={project.alley} className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" id='alley' />
                                <div className=' w-full flex flex-col lg:flex-row  justify-between items-center'>
                                    <label htmlFor='startDate'>Start Date</label>
                                    <input required defaultValue={project.start_date && project.start_date.slice('0', '10').replaceAll(" ", "")} className='w-full lg:w-1/3 border border-green-500 text-gray-500 rounded-md hover:rounded-xl duration-500' type="date" id="startDate" />
                                    <label htmlFor='endDate'>End Date </label>
                                    <input defaultValue={project.end_date && project.end_date.slice('0', '10').replaceAll(" ", "")} className='w-full lg:w-1/3 border border-green-500 text-gray-500 rounded-md hover:rounded-xl duration-500' type="date" id="endDate" />
                                </div>
                                <label htmlFor="locationmap"> map location </label>
                                <input type="text" defaultValue={project.location} id='locationmap' className='border border-green-400 px-8 py-2 drop-shadow-xl shadow rounded-md hover:rounded-xl duration-500 active:bg-green-500' />
                                <button type='submit' className='border  border-green-400 bg-green-300 hover:border-green-700 hover:scale-110 hover:text-white animate-pulse hover:bg-green-700 px-8 py-2 drop-shadow-xl shadow rounded-md hover:rounded-xl duration-500 active:bg-green-500' >Edit Project</button>
                            </div>
                        </form>
                        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center ">
                            <form onSubmit={handleSubmitImages} >
                                <div className='flex flex-col gap-3 border-b-2 pt-2 w-full pb-6'>
                                    <label htmlFor="files" className='text-xl'>Image</label>
                                    <input required className=' rounded shadow ' type="file" id="files" name="files" multiple />
                                    <button type='submit' className='border  border-green-400 bg-green-300 hover:border-green-700 hover:scale-110 hover:text-white animate-pulse hover:bg-green-700 px-8 py-2 drop-shadow-xl shadow rounded-md hover:rounded-xl duration-500 active:bg-green-500' >Add More Images</button>
                                </div>
                            </form>
                            <div className=" text-xl pt-3 "> Project Images List </div>
                            {images.map((image, index) => (
                                <div key={index} className="w-full flex justify-center items-center m-2 p-2">
                                    <form onSubmit={(e) => handleDeleteImages(e, image.id)} className='flex flex-row justify-around w-full items-center bg-gray-100 rounded-md shadow shadow-gray-400 ' >
                                        <img src={`/images/projects/orignial/${image.name}`} className="w-24 h-24" />
                                        <button type='submit' className='border  border-red-400 bg-red-300 hover:border-red-700 hover:scale-110 hover:text-white animate-pulse hover:bg-red-700 px-8 py-2 drop-shadow-xl shadow rounded-md hover:rounded-xl duration-500 active:bg-red-500' >Delete</button>
                                    </form>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
