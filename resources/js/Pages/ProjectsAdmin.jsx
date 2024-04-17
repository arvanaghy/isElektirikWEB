import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const ProjectsAdmin = ({auth}) => {
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
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-row justify-between items-center  overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Our Projects 
                        </div>
                        <div className="p-6 text-gray-900">
                            <Link href="add-project" className="bg-black hover:bg-green-400 duration-500 active:bg-white  text-white font-bold py-2 px-4 rounded-xl hover:px-8  hover:text-black hover:text-lg">
                               + Add Project
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10">
                    <div className="flex flex-col justify-between items-center p-10   bg-white shadow-sm sm:rounded-lg">
                        <div className="flex flex-row items-center justify-between w-full border shadow-xl border-green-400 rounded-md text-center p-10 overflow-scroll lg:overflow-hidden">
                            
                        <table class="table-auto w-full">
                            <thead>
                                <tr>
                                <th class="px-4 py-2">Index</th>
                                <th class="w-1/2 px-4 py-2">Name</th>
                                <th class="w-1/4 px-4 py-2">Date Created</th>
                                <th class="w-1/4 px-4 py-2">Province</th>
                                <th class="w-1/4 px-4 py-2">Opreation</th>
                                </tr>
                            </thead>
                            <tbody className="shadow-lg">
                                <tr>
                                <td class="border px-4 py-2">1</td>
                                <td class="border px-4 py-2">Intro to CSS</td>
                                <td class="border px-4 py-2">Adam</td>
                                <td class="border px-4 py-2">858</td>
                                <td class="border px-4 py-2">
                                    <div className="flex flex-row items-center justify-between gap-4">
                                        <button className="bg-red-400 px-4 py-2 rounded-xl hover:bg-red-200 duration-200">Delete</button>
                                        <button className="bg-green-400 px-4 py-2 rounded-xl hover:bg-green-200 duration-200">Modify</button>
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                            </table> 
                                      
                        </div>
                        <div className="mt-5 flex flex-rew justify-center items-center gap-2 pt-2 w-1/2 " >
                            <button className="bg-gray-200 align-baseline text-center rounded-full py-2 px-4 border border-black hover:bg-black
                             hover:text-white duration-200 hover:border-white hover:animate-pulse " 
                             >1</button>
                            <button className="bg-gray-200 align-baseline text-center rounded-full py-2 px-4 border border-black hover:bg-black
                             hover:text-white duration-200 hover:border-white hover:animate-pulse " 
                             >2</button>
                            <button className="bg-gray-200 align-baseline text-center rounded-full py-2 px-4 border border-black hover:bg-black
                             hover:text-white duration-200 hover:border-white hover:animate-pulse " 
                             >3</button>
                            <button className="bg-gray-200 align-baseline text-center rounded-full py-2 px-4 border border-black hover:bg-black
                             hover:text-white duration-200 hover:border-white hover:animate-pulse " 
                             >4</button>
                             <button className="bg-gray-200 align-baseline text-center rounded-full py-2 px-4 border border-black hover:bg-black
                             hover:text-white duration-200 hover:border-white hover:animate-pulse " 
                             >..</button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ProjectsAdmin;
