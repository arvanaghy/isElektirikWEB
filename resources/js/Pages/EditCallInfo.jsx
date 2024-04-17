import React, { useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const EditCallInfo = ({auth}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                   edit call info
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10">
                    <div className=" justify-between items-center p-10   bg-white shadow-sm sm:rounded-lg">
                        <div className="flex flex-row items-center justify-between w-full border rounded-b-none border-green-400 rounded-md text-center p-10 overflow-scroll lg:overflow-hidden">
                            <form className="flex flex-col lg:flex-row gap-4 lg:gap-48 justify-between items-center w-full" onSubmit={handleSubmit}>
                                <div className="w-full flex flex-col gap-4">
                                    <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                                        <label htmlFor="address">Address: </label>
                                        <input placeholder="Address" className="border-4 rounded-md border-green-400" type="text" id="address" />
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-between items-center">
                                        <label htmlFor="phone">Phone: </label>
                                        <input placeholder="Phone" className="border-4 rounded-md border-green-400" type="number" id="phone" />
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-between items-center">
                                        <label htmlFor="email">Email: </label>
                                        <input placeholder="Email" className="border-4 rounded-md border-green-400" type="email" id="email" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-4">
                                    <div className="flex flex-col lg:flex-row justify-between items-center" >
                                        <label htmlFor="insta">Instagram: </label>
                                        <input placeholder="Instagram" className="border-4 rounded-md border-green-400" type="text" id="insta" />
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-between items-center" >
                                        <label htmlFor="telegram">Telegram: </label>
                                        <input placeholder="Telegram" className="border-4 rounded-md border-green-400" type="text" id="telegram" />
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-between items-center" >
                                        <label htmlFor="linkedin">LinkedIn: </label>
                                        <input placeholder="LinkedIn" className="border-4 rounded-md border-green-400" type="text" id="linkedin" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <button type="submit" className="bg-green-400 text-2xl hover:animate-pulse h-12 rounded-b-lg m-auto w-full">Submit</button>
                    </div>
            
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditCallInfo;