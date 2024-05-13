import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function AddService({ auth }) {

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'image'],
            ['clean'],
        ],
    };

    const [contentEN, setContentEN] = useState('');
    const [contentTR, setContentTR] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title_en', titleEn.value);
        formData.append('title_tr', titleTr.value);
        formData.append('description_en', contentEN);
        formData.append('description_tr', contentTR);
        formData.append('type', type.value);
        Inertia.post('/submit-services', formData);
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
                                <input required className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" id='titleEn' />
                                <div className="text-sm">
                                    title turkish : (turkish keyboard) * required
                                </div>
                                <input required className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" id='titleTr' />
                                <div className="text-sm">
                                    Description english : (english keyboard) * required
                                </div>
                                <ReactQuill theme="snow" modules={modules} value={contentEN} onChange={setContentEN} className=" p-2.5 w-full text-sm text-gray-900 h-64   rounded-md hover:rounded-xl duration-500 " />
                                <div className="text-sm mt-10 ">
                                    Description turkish : (turkish keyboard) * required
                                </div>

                                <ReactQuill theme="snow" modules={modules} value={contentTR} onChange={setContentTR} className=" p-2.5 w-full text-sm text-gray-900 h-64   rounded-md hover:rounded-xl duration-500 " />

                                <div className="text-sm flex flex-col mt-10">
                                    <label htmlFor="type" className='mb-2'>
                                        Select Type
                                    </label>
                                    <select id='type'>
                                        <option defaultValue="electrical" >Electrical</option>
                                        <option defaultValue="mechanical">Mechanical</option>
                                    </select>
                                </div>

                                <div className='flex flex-col gap-1 justify-center items-center mt-10 w-full'>
                                    <button className='border  border-green-400 bg-green-300 hover:border-green-700 hover:scale-110 hover:text-white animate-pulse hover:bg-green-700 px-8 py-2 drop-shadow-xl shadow rounded-md hover:rounded-xl duration-500 active:bg-green-500' type='submit'>Register Service</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
