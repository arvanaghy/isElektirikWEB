import React, { useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const EditSlogan = ({auth}) => {

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
                    <div className="justify-between items-center p-10   bg-white shadow-sm sm:rounded-lg">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full border-4  border-green-400 rounded-md rounded-b-none text-center p-10 overflow-scroll lg:overflow-hidden"> 
                            
                            <div className="flex flex-col w-full">
                                <label className="text-2xl mb-4 hover:animate-pulse z-10" htmlFor="tr-about-us">Slogan TR</label>
                                <textarea placeholder="lorem" name="tr-about-us" className="z-5 w-full h-48 border-t-4 rounded-lg hover:border-green-400 border-black-400 hover:rounded-xl duration-200" id="tr-about-us"></textarea>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-2xl mb-4 hover:animate-pulse z-10" htmlFor="tr-about-us">Slogan EN</label>
                                <textarea placeholder="lorem" name="tr-about-us" className="z-5 w-full h-48 border-t-4 rounded-lg hover:border-green-400 border-black-400 hover:rounded-xl duration-200" id="tr-about-us"></textarea>
                            </div>
                            
                        </div>
                        <button className="bg-green-400 text-2xl hover:animate-pulse h-12 rounded-b-lg m-auto w-full">Submit</button>
                    </div>
                
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditSlogan;