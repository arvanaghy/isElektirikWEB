import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia'


const ProjectsAdmin = ({ auth, catalog_list }) => {


    const handeleDeleteProject = (id) => {
            if (window.confirm('Are you sure you want to delete this record?')) {
                Inertia.delete(`/delete-catalog/${id}`);
            }        
    }

        return (
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Manage Catalog Admin
                    </h2>
                }
            >
                <Head title="Dashboard" />

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex flex-row justify-between items-center  overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                Catalog List
                            </div>
                            <div className="p-6 text-gray-900">
                                <Link href="add-catalog" className="bg-black hover:bg-green-400 duration-500 active:bg-white  text-white font-bold py-2 px-4 rounded-xl hover:px-8  hover:text-black hover:text-lg">
                                    + Add catalog
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
                                            <th className="w-1/4 px-4 py-2">descrption</th>
                                            <th className="w-1/4 px-4 py-2">Opreation</th>
                                        </tr>
                                    </thead>
                                    <tbody className="shadow-lg">
                                        {catalog_list.data.map((project, idx) => (

                                            <tr key={idx}>
                                                <td className="border px-4 py-2">{project.id}</td>
                                                <td className="border px-4 py-2">{project.title}</td>
                                                <td className="border px-4 py-2">{project.description}</td>
                                                <td className="border px-4 py-2">
                                                    <div className="flex flex-row items-center justify-between gap-4">
                                                        <button className="bg-red-400 px-4 py-2 rounded-xl text-white hover:text-black hover:bg-red-200 duration-200"
                                                            onClick={() => handeleDeleteProject(project.id)}>
                                                            Delete
                                                        </button>
                                                        <Link href={`/edit-catalog/${project.id}`} className="bg-green-400 px-4 py-2 rounded-xl hover:bg-green-200 duration-200">Modify</Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                        )}
                                    </tbody>
                                </table>

                            </div>

                            <div className="mt-5 flex flex-rew justify-center items-center gap-2 pt-2 w-1/2 " >
                                {catalog_list.links.map((link, idx) => (
                                    <Link href={link.url} key={idx} className="bg-gray-200 align-baseline text-center rounded-full py-2 px-4 border border-black hover:bg-black
                                                            hover:text-white duration-200 hover:border-white hover:animate-pulse "
                                    >{link.label}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    };

    export default ProjectsAdmin;
