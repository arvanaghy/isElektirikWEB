import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Inertia } from "@inertiajs/inertia";

const Clients = ({ auth, clients }) => {


    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this record?')) {
            Inertia.delete(`/delete-clients/${id}`);
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Manage Clients Admin
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-row justify-between items-center  overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Our Clients
                        </div>
                        <div className="p-6 text-gray-900">
                            <Link href="add-clients" className="bg-black hover:bg-green-400 duration-500 active:bg-white  text-white font-bold py-2 px-4 rounded-xl hover:px-8  hover:text-black hover:text-lg">
                                + Add Clients
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10">
                    <div className="flex flex-col justify-between items-center p-10   bg-white shadow-sm sm:rounded-lg">
                        <div className="flex flex-row items-center justify-between w-full border shadow-xl border-green-400 rounded-md text-center p-10 overflow-scroll lg:overflow-hidden">

                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Index</th>
                                        <th className="w-1/2 px-4 py-2">title</th>
                                        <th className="w-1/4 px-4 py-2">image</th>
                                        <th className="w-1/4 px-4 py-2">Opreation</th>
                                    </tr>
                                </thead>
                                <tbody className="shadow-lg">
                                    {
                                        clients.data.map(client => (
                                            <tr key={client.id} >
                                                <td className="border px-4 py-2">{client.id}</td>
                                                <td className="border px-4 py-2">{client.name}</td>
                                                <td className="border px-4 py-2 ">
                                                <img src={`/images/clients/orignial/${client.image_name}`} className="w-20 h-20" alt="" />
                                                </td>
                                                <td className="border px-4 py-2">
                                                    <button onClick={() => handleDelete(client.id)} className="bg-red-400 px-4 py-2 rounded-xl hover:bg-red-200 duration-200">Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-5 flex flex-rew justify-center items-center gap-2 pt-2 w-1/2 " >
                            {clients.links.map((link, idx) => (
                                <Link href={link.url} key={idx} className="bg-gray-200 align-baseline text-center rounded-full py-2 px-4 border border-black hover:bg-black
                                                            hover:text-white duration-200 hover:border-white hover:animate-pulse "
                                >{link.label.replaceAll('&laquo;', '').replaceAll('&raquo;', '')}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Clients;
