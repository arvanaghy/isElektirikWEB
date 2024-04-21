import React, { useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Inertia } from "@inertiajs/inertia";

const EditCallInfo = ({ auth, address, phone, email, telegram, linkdin, insta }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('address', address_s.value);
        formData.append('phone', phone_s.value);
        formData.append('email', email_s.value);
        formData.append('telegram', telegram_s.value);
        formData.append('linkdin', linkdin_s.value);
        formData.append('insta', insta_s.value);
        Inertia.post('/edit-call-info', formData);

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
                        <form  onSubmit={handleSubmit} className="flex flex-row items-center justify-between w-full border rounded-b-none border-green-400 rounded-md text-center p-10 overflow-scroll lg:overflow-hidden">
                            <div className="flex flex-col lg:flex-row gap-4 lg:gap-48 justify-between items-center w-full">
                                <div className="w-full flex flex-col gap-4">
                                    <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                                        <label htmlFor="address_s">Address: </label>
                                        <input defaultValue={address.general_value} className="border-4 rounded-md border-green-400" type="text" id="address_s" />
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-between items-center">
                                        <label htmlFor="phone_s">Phone: </label>
                                        <input defaultValue={phone.general_value} className="border-4 rounded-md border-green-400" type="text" id="phone_s" />
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-between items-center">
                                        <label htmlFor="email_s">Email: </label>
                                        <input defaultValue={email.general_value} className="border-4 rounded-md border-green-400" type="email" id="email_s" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-4">
                                    <div className="flex flex-col lg:flex-row justify-between items-center" >
                                        <label htmlFor="insta_s">Instagram: </label>
                                        <input defaultValue={insta.general_value} className="border-4 rounded-md border-green-400" type="text" id="insta_s" />
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-between items-center" >
                                        <label htmlFor="telegram_s">Telegram: </label>
                                        <input defaultValue={telegram.general_value} className="border-4 rounded-md border-green-400" type="text" id="telegram_s" />
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-between items-center" >
                                        <label htmlFor="linkdin_s">LinkedIn: </label>
                                        <input defaultValue={linkdin.general_value} className="border-4 rounded-md border-green-400" type="text" id="linkdin_s" />
                                    </div>

                                </div>
                                <button type="submit" className="flex flex-roe items-center justify-center bg-green-400 text-2xl hover:animate-pulse h-12 rounded-b-lg m-auto w-full">Submit</button>
                            </div>


                        </form>

                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditCallInfo;