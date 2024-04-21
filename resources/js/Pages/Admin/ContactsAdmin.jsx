import React, { useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Inertia } from "@inertiajs/inertia";

const ContactsAdmin = ({ auth, tickets }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Manage Project Admin
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10">
                    <div className="flex flex-row justify-between items-center p-10   bg-white shadow-sm sm:rounded-lg">
                        <div className="flex flex-row items-center justify-between w-full border border-green-400 rounded-md text-center p-10 overflow-scroll lg:overflow-hidden">

                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Index</th>
                                        <th className="w-1/2 px-4 py-2">Ticket Title</th>
                                        <th className="w-1/4 px-4 py-2">message</th>
                                        <th className="w-1/4 px-4 py-2">Customer</th>
                                        <th className="w-1/4 px-4 py-2">Date Created</th>

                                    </tr>
                                </thead>
                                <tbody className="shadow-lg">
                                    {tickets.data.map((ticket) => (
                                        <tr key={ticket.id}>
                                            <td className="border px-4 py-2">{ticket.id}</td>
                                            <td className="border px-4 py-2">{ticket.name}</td>
                                            <td className="border px-4 py-2">{ticket.message}</td>
                                            <td className="border px-4 py-2">{ticket.call_info}</td>
                                            <td className="border px-4 py-2">{ticket.created_at}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>

                        </div>

                    </div>
                    <div className="mt-5 flex bg-white shadow-sm py-2 flex-rew justify-center items-center gap-2 pt-2  " >
                        {tickets.links.map((link, idx) => (
                            <Link href={link.url} key={idx} className="bg-gray-200 align-baseline text-center rounded-full py-2 px-4 border border-black hover:bg-black
                                                            hover:text-white duration-200 hover:border-white hover:animate-pulse "
                            >{link.label}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ContactsAdmin;