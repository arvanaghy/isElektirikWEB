import React, { useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Inertia } from "@inertiajs/inertia";

const EditSlogan = ({ auth, slogan_en, slogan_tr }) => {


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('slogan_en', slogan_en_text.value);
        formData.append('slogan_tr', slogan_tr_text.value);
        Inertia.post('/edit-slogan', formData);
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    edit about us
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10">
                    <form onSubmit={(e) => handleSubmit(e)} className="justify-between items-center p-10   bg-white shadow-sm sm:rounded-lg">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full border-4  border-green-400 rounded-md rounded-b-none text-center p-10 overflow-scroll lg:overflow-hidden">

                            <div className="flex flex-col w-full">
                                <label className="text-2xl mb-4 hover:animate-pulse z-10" htmlFor="slogan_tr">Slogan TR</label>
                                <textarea defaultValue={slogan_tr.general_value} className="z-5 w-full h-48 border-t-4 rounded-lg hover:border-green-400 border-black-400 hover:rounded-xl duration-200" id="slogan_tr_text"></textarea>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-2xl mb-4 hover:animate-pulse z-10" htmlFor="slogan_en">Slogan EN</label>
                                <textarea defaultValue={slogan_en.general_value} className="z-5 w-full h-48 border-t-4 rounded-lg hover:border-green-400 border-black-400 hover:rounded-xl duration-200" id="slogan_en_text"></textarea>
                            </div>

                        </div>
                        <button type="submit" className="bg-green-400 text-2xl hover:animate-pulse h-12 rounded-b-lg m-auto w-full">Submit</button>
                    </form>

                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditSlogan;