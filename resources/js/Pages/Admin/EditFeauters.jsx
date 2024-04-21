import React, { useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Inertia } from "@inertiajs/inertia";

const EditFeauters = ({ auth, feauters_1_text_tr, feauters_1_text_en, feauters_2_text_tr, feauters_2_text_en, feauters_3_text_tr, feauters_3_text_en, feauters_4_text_tr, feauters_4_text_en }) => {

    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append('feauters_1_text_tr', feature_1_tr.value);
        formData.append('feauters_1_text_en', feature_1_en.value);
        formData.append('feauters_2_text_tr', feature_2_tr.value);
        formData.append('feauters_2_text_en', feature_2_en.value);
        formData.append('feauters_3_text_tr', feature_3_tr.value);
        formData.append('feauters_3_text_en', feature_3_en.value);
        formData.append('feauters_4_text_tr', feature_4_tr.value);
        formData.append('feauters_4_text_en', feature_4_en.value);
        Inertia.post('/edit-features', formData);
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    edit features
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10">
                    <form onSubmit={handleSubmit} className="justify-between items-center p-10   bg-white shadow-sm sm:rounded-lg">
                        <div className=" items-center justify-between  w-full border-4  border-green-400 rounded-md rounded-b-none text-center p-10 overflow-scroll lg:overflow-hidden">
                            <div className="flex flex-col lg:flex-row gap-10 ">
                                <div className="flex flex-col w-full">
                                    <label className="text-2xl mb-4 hover:animate-pulse z-10" htmlFor="feature_1_tr">Features #1 TR</label>
                                    <textarea defaultValue={feauters_1_text_tr.general_value} className="z-5 w-full h-48 border-t-4 rounded-lg hover:border-green-400 border-black-400 hover:rounded-xl duration-200" id="feature_1_tr"></textarea>
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-2xl mb-4 hover:animate-pulse z-10" htmlFor="feature_1_en">Features #1 EN</label>
                                    <textarea defaultValue={feauters_1_text_en.general_value} className="z-5 w-full h-48 border-t-4 rounded-lg hover:border-green-400 border-black-400 hover:rounded-xl duration-200" id="feature_1_en"></textarea>
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-10 border-t-2 border-green-400 mt-4 pt-2 ">
                                <div className="flex flex-col w-full">
                                    <label className="text-2xl mb-4 hover:animate-pulse z-10" htmlFor="feature_2_tr">Features #2 TR</label>
                                    <textarea defaultValue={feauters_2_text_tr.general_value} className="z-5 w-full h-48 border-t-4 rounded-lg hover:border-green-400 border-black-400 hover:rounded-xl duration-200" id="feature_2_tr"></textarea>
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-2xl mb-4 hover:animate-pulse z-10" htmlFor="feature_2_en">Features #2 EN</label>
                                    <textarea defaultValue={feauters_2_text_en.general_value} className="z-5 w-full h-48 border-t-4 rounded-lg hover:border-green-400 border-black-400 hover:rounded-xl duration-200" id="feature_2_en"></textarea>
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-10 border-t-2 border-green-400 mt-4 pt-2 ">
                                <div className="flex flex-col w-full">
                                    <label className="text-2xl mb-4 hover:animate-pulse z-10" htmlFor="feature_3_tr">Features #3 TR</label>
                                    <textarea defaultValue={feauters_3_text_tr.general_value} className="z-5 w-full h-48 border-t-4 rounded-lg hover:border-green-400 border-black-400 hover:rounded-xl duration-200" id="feature_3_tr"></textarea>
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-2xl mb-4 hover:animate-pulse z-10" htmlFor="feature_3_en">Features #3 EN</label>
                                    <textarea defaultValue={feauters_3_text_en.general_value} className="z-5 w-full h-48 border-t-4 rounded-lg hover:border-green-400 border-black-400 hover:rounded-xl duration-200" id="feature_3_en"></textarea>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-10 border-t-2 border-green-400 mt-4 pt-2 ">
                                <div className="flex flex-col w-full">
                                    <label className="text-2xl mb-4 hover:animate-pulse z-10" htmlFor="feature_4_tr">Features #4 TR</label>
                                    <textarea defaultValue={feauters_4_text_tr.general_value} className="z-5 w-full h-48 border-t-4 rounded-lg hover:border-green-400 border-black-400 hover:rounded-xl duration-200" id="feature_4_tr"></textarea>
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-2xl mb-4 hover:animate-pulse z-10" htmlFor="feature_4_en">Features #4 EN</label>
                                    <textarea defaultValue={feauters_4_text_en.general_value} className="z-5 w-full h-48 border-t-4 rounded-lg hover:border-green-400 border-black-400 hover:rounded-xl duration-200" id="feature_4_en"></textarea>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="bg-green-400 text-2xl hover:animate-pulse h-12 rounded-b-lg m-auto w-full">Submit</button>
                    </form>

                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditFeauters;
