import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const GeneralAdmin = ({ auth, slogan_tr, slogan_en, feauters_1_text_tr, feauters_1_text_en,
    feauters_2_text_tr, feauters_2_text_en, feauters_3_text_tr, feauters_3_text_en, feauters_4_text_tr, feauters_4_text_en,
    address, phone, email, telegram, instagram, linkedin, about_us_text_en, about_us_text_tr, hero_section_text_en, hero_section_text_tr
}) => {
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
                        {/* slogan section */}
                        <div className="flex flex-col text-center items-center p-10">
                            <h1 className="text-2xl w-1/2 border-b-[1px] border-green-500 mb-2">Slogan</h1>
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="w-1/2 px-4 py-2">text tr</th>
                                        <th className="w-1/2 px-4 py-2">text en</th>
                                        <th className="w-1/4 px-4 py-2">Opreation</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr>
                                        <td className="border px-4 py-2">{slogan_tr?.general_value}</td>
                                        <td className="border px-4 py-2">{slogan_en?.general_value}</td>
                                        <td className="border px-4 py-2">
                                            <Link href={route('EditSlogan')} className="bg-[#a89732] w-full p-2 rounded-xl hover:bg-[#c7b23a] duration-200">Modify</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        {/* about us */}
                        <div className="flex flex-col text-center items-center p-10">
                            <h1 className="text-2xl w-1/2 border-b-[1px] border-green-500 mb-2">About us</h1>
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="w-1/2 px-4 py-2">text tr</th>
                                        <th className="w-1/2 px-4 py-2">text en</th>
                                        <th className="w-1/4 px-4 py-2">Opreation</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr>
                                        <td className="border px-4 py-2">{about_us_text_en?.general_value}</td>
                                        <td className="border px-4 py-2">{about_us_text_tr?.general_value}</td>
                                        <td className="border px-4 py-2">
                                            <Link href={route('EditAboutUs')} className="bg-[#a89732] w-full p-2 rounded-xl hover:bg-[#c7b23a] duration-200">Modify</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        {/* call info */}
                        <div className="flex flex-col text-center items-center p-10">
                            <h1 className="text-2xl w-1/2 border-b-[1px] border-green-500 mb-2">Call info</h1>
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="w-1/2 px-4 py-2">address</th>
                                        <th className="w-1/2 px-4 py-2">phone</th>
                                        <th className="w-1/4 px-4 py-2">email</th>
                                        {/* <th className="w-1/4 px-4 py-2">instagram</th>
                                        <th className="w-1/4 px-4 py-2">telegram</th>
                                        <th className="w-1/4 px-4 py-2">whatsapp</th> */}
                                        <th className="w-1/4 px-4 py-2">operation</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr>
                                        <td className="border px-4 py-2"> {address?.general_value}</td>
                                        <td className="border px-4 py-2"> {phone?.general_value}</td>
                                        <td className="border px-4 py-2"> {email?.general_value} </td>
                                        {/* <td className="border px-4 py-2">{instagram?.general_value} </td>
                                        <td className="border px-4 py-2"> {telegram?.general_value}</td>
                                        <td className="border px-4 py-2"> {linkedin?.general_value} </td> */}
                                        <td className="border px-4 py-2">
                                            <Link href={route('EditCallInfo')} className="bg-[#a89732] w-full p-2 rounded-xl hover:bg-[#c7b23a] duration-200">Modify</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        {/* hero section */}
                        <div className="flex flex-col text-center items-center p-10">
                            <h1 className="text-2xl w-1/2 border-b-[1px] border-green-500 mb-2">Hero Section</h1>
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="w-1/2 px-4 py-2">text tr</th>
                                        <th className="w-1/2 px-4 py-2">text en</th>
                                        <th className="w-1/4 px-4 py-2">Opreation</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr>
                                        <td className="border px-4 py-2">{hero_section_text_en?.general_value}</td>
                                        <td className="border px-4 py-2">{hero_section_text_tr?.general_value}</td>
                                        <td className="border px-4 py-2">
                                            <Link href={route('EditHero')} className="bg-[#a89732] w-full p-2 rounded-xl hover:bg-[#c7b23a] duration-200">Modify</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        {/* features section */}
                        {/* <div className="flex flex-col text-center items-center p-10">
                            <h1 className="text-2xl w-1/2 border-b-[1px] border-green-500 mb-2">Feauters</h1>
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Text EN</th>
                                        <th className="w-1/2 px-4 py-2">Text TR</th>
                                        <th className=" px-4 py-2">Opreation</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr>
                                        <td className="border px-4 py-2">{feauters_1_text_en?.general_value}</td>
                                        <td className="border px-4 py-2">{feauters_1_text_tr?.general_value}</td>
                                        <td rowSpan={4} className="border px-4 py-2">
                                            <Link href={route('EditFeatures')} className="bg-[#a89732] w-full p-2 rounded-xl hover:bg-[#c7b23a] duration-200">Modify</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">{feauters_2_text_en?.general_value}</td>
                                        <td className="border px-4 py-2">{feauters_2_text_tr?.general_value}</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">{feauters_3_text_en?.general_value}</td>
                                        <td className="border px-4 py-2"> {feauters_3_text_tr?.general_value} </td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">{feauters_4_text_en?.general_value}</td>
                                        <td className="border px-4 py-2">{feauters_4_text_tr?.general_value}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div> */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default GeneralAdmin;
