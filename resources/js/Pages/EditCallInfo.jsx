import React, { useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const EditCallInfo = ({auth}) => {

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
                    <div className="flex flex-row justify-between items-center p-10   bg-white shadow-sm sm:rounded-lg">
                        <div className="flex flex-row items-center justify-between w-full border border-green-400 rounded-md text-center p-10 overflow-scroll lg:overflow-hidden">
                            
                 
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditCallInfo;