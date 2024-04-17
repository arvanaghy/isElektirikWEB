import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const GeneralAdmin = ({auth}) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    General Admin
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            General Section
                        </div>
                        <div className="flex flex-col text-center items-center p-10">
                            <h1 className="text-2xl w-1/2 border-b-[1px] border-green-500 mb-2">About us</h1>
                        <table class="table-auto w-full">
                            <thead>
                                <tr>
                                <th class="w-1/2 px-4 py-2">text tr</th>
                                <th class="w-1/2 px-4 py-2">text en</th>
                                <th class="w-1/4 px-4 py-2">Opreation</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr>
                                <td class="border px-4 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae consequatur commodi adipisci soluta recusandae in suscipit voluptas fugit, doloribus fugiat alias nesciunt dolore consequuntur atque placeat quisquam dignissimos eum.</td>
                                <td class="border px-4 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae consequatur commodi adipisci soluta recusandae in suscipit voluptas fugit, doloribus fugiat alias nesciunt dolore consequuntur atque placeat quisquam dignissimos eum.</td>
                                <td class="border px-4 py-2">
                                <Link href={route('EditAboutUs')} className="bg-[#a89732] w-full p-2 rounded-xl hover:bg-[#c7b23a] duration-200">Modify</Link>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            
                        </div>
                        <div className="flex flex-col text-center items-center p-10">
                            <h1 className="text-2xl w-1/2 border-b-[1px] border-green-500 mb-2">Call info</h1>
                        <table class="table-auto w-full">
                            <thead>
                                <tr>
                                <th class="w-1/2 px-4 py-2">Address</th>
                                <th class="w-1/2 px-4 py-2">phone</th>
                                <th class="w-1/4 px-4 py-2">email</th>
                                <th class="w-1/4 px-4 py-2">insta</th>
                                <th class="w-1/4 px-4 py-2">telegram</th>
                                <th class="w-1/4 px-4 py-2">linkdin</th>
                                <th class="w-1/4 px-4 py-2">operation</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr>
                                <td class="border px-4 py-2"> nesciunt dolore consequuntur atque placeat quisquam dignissimos eum.</td>
                                <td class="border px-4 py-2"> nesciunt dolore consequuntur atque placeat quisquam dignissimos eum.</td>
                                <td class="border px-4 py-2"> nesciunt dolore consequuntur atque placeat quisquam dignissimos eum.</td>
                                <td class="border px-4 py-2"> nesciunt dolore consequuntur atque placeat quisquam dignissimos eum.</td>
                                <td class="border px-4 py-2"> nesciunt dolore consequuntur atque placeat quisquam dignissimos eum.</td>
                                <td class="border px-4 py-2"> nesciunt dolore consequuntur atque placeat quisquam dignissimos eum.</td>
                                <td class="border px-4 py-2">
                                <Link href={route('EditCallInfo')} className="bg-[#a89732] w-full p-2 rounded-xl hover:bg-[#c7b23a] duration-200">Modify</Link>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            
                        </div>
                        <div className="flex flex-col text-center items-center p-10">
                            <h1 className="text-2xl w-1/2 border-b-[1px] border-green-500 mb-2">Hero Section</h1>
                        <table class="table-auto w-full">
                            <thead>
                                <tr>
                                <th class="px-4 py-2">Lang</th>
                                <th class="w-1/2 px-4 py-2">Creator</th>
                                <th class="w-1/4 px-4 py-2">Date Created</th>
                                <th class="w-1/4 px-4 py-2">Date Modified</th>
                                <th class="w-1/4 px-4 py-2">Opreation</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr>
                                <td class="border px-4 py-2">EN</td>
                                <td class="border px-4 py-2">Intro to CSS</td>
                                <td class="border px-4 py-2">Adam</td>
                                <td class="border px-4 py-2">858</td>
                                <td class="border px-4 py-2">
                                <button className="bg-[#a89732] w-full py-2 rounded-xl hover:bg-[#c7b23a] duration-200">Modify</button>
                                </td>

                                </tr>
                                <tr>
                                <td class="border px-4 py-2">TR</td>
                                <td class="border px-4 py-2">Intro to CSS</td>
                                <td class="border px-4 py-2">Adam</td>
                                <td class="border px-4 py-2">858</td>
                                <td class="border px-4 py-2">
                                    <button className="bg-[#a89732] w-full py-2 rounded-xl hover:bg-[#c7b23a] duration-200">Modify</button>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            
                        </div>
                        <div className="flex flex-col text-center items-center p-10">
                            <h1 className="text-2xl w-1/2 border-b-[1px] border-green-500 mb-2">Feauters</h1>
                        <table class="table-auto w-full">
                            <thead>
                                <tr>
                                <th class="px-4 py-2">Lang</th>
                                <th class="w-1/2 px-4 py-2">Creator</th>
                                <th class="w-1/4 px-4 py-2">Date Created</th>
                                <th class="w-1/4 px-4 py-2">Date Modified</th>
                                <th class="w-1/4 px-4 py-2">Opreation</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr>
                                <td class="border px-4 py-2">EN</td>
                                <td class="border px-4 py-2">Intro to CSS</td>
                                <td class="border px-4 py-2">Adam</td>
                                <td class="border px-4 py-2">858</td>
                                <td class="border px-4 py-2">
                                <button className="bg-[#a89732] w-full py-2 rounded-xl hover:bg-[#c7b23a] duration-200">Modify</button>
                                </td>

                                </tr>
                                <tr>
                                <td class="border px-4 py-2">TR</td>
                                <td class="border px-4 py-2">Intro to CSS</td>
                                <td class="border px-4 py-2">Adam</td>
                                <td class="border px-4 py-2">858</td>
                                <td class="border px-4 py-2">
                                    <button className="bg-[#a89732] w-full py-2 rounded-xl hover:bg-[#c7b23a] duration-200">Modify</button>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            
                        </div>
                        <div className="flex flex-col text-center items-center p-10">
                            <h1 className="text-2xl w-1/2 border-b-[1px] border-green-500 mb-2">Projects</h1>
                        <table class="table-auto w-full">
                            <thead>
                                <tr>
                                <th class="px-4 py-2">Lang</th>
                                <th class="w-1/2 px-4 py-2">Creator</th>
                                <th class="w-1/4 px-4 py-2">Date Created</th>
                                <th class="w-1/4 px-4 py-2">Date Modified</th>
                                <th class="w-1/4 px-4 py-2">Opreation</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr>
                                <td class="border px-4 py-2">EN</td>
                                <td class="border px-4 py-2">Intro to CSS</td>
                                <td class="border px-4 py-2">Adam</td>
                                <td class="border px-4 py-2">858</td>
                                <td class="border px-4 py-2">
                                <button className="bg-[#a89732] w-full py-2 rounded-xl hover:bg-[#c7b23a] duration-200">Modify</button>
                                </td>

                                </tr>
                                <tr>
                                <td class="border px-4 py-2">TR</td>
                                <td class="border px-4 py-2">Intro to CSS</td>
                                <td class="border px-4 py-2">Adam</td>
                                <td class="border px-4 py-2">858</td>
                                <td class="border px-4 py-2">
                                    <button className="bg-[#a89732] w-full py-2 rounded-xl hover:bg-[#c7b23a] duration-200">Modify</button>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            
                        </div>
                        <div className="flex flex-col text-center items-center p-10">
                            <h1 className="text-2xl w-1/2 border-b-[1px] border-green-500 mb-2">Footer</h1>
                        <table class="table-auto w-full">
                            <thead>
                                <tr>
                                <th class="px-4 py-2">Lang</th>
                                <th class="w-1/2 px-4 py-2">Creator</th>
                                <th class="w-1/4 px-4 py-2">Date Created</th>
                                <th class="w-1/4 px-4 py-2">Date Modified</th>
                                <th class="w-1/4 px-4 py-2">Opreation</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr>
                                <td class="border px-4 py-2">EN</td>
                                <td class="border px-4 py-2">Intro to CSS</td>
                                <td class="border px-4 py-2">Adam</td>
                                <td class="border px-4 py-2">858</td>
                                <td class="border px-4 py-2">
                                <button className="bg-[#a89732] w-full py-2 rounded-xl hover:bg-[#c7b23a] duration-200">Modify</button>
                                </td>

                                </tr>
                                <tr>
                                <td class="border px-4 py-2">TR</td>
                                <td class="border px-4 py-2">Intro to CSS</td>
                                <td class="border px-4 py-2">Adam</td>
                                <td class="border px-4 py-2">858</td>
                                <td class="border px-4 py-2">
                                    <button className="bg-[#a89732] w-full py-2 rounded-xl hover:bg-[#c7b23a] duration-200">Modify</button>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default GeneralAdmin;
