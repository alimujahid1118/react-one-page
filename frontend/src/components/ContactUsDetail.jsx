import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import axios from "axios"

export function ContactUsDetail () {

    const [form, setForm] = useState([])

    useEffect(() => {
        try {
            const getForm = async () => {
                const response = await axios.get("http://localhost:8000/api/contact-us-info")
                setForm(response.data)
            }

            getForm()
        } catch (err) {
            console.log(err)
        }
    }, [])
    
    return (
        <>
            <Header />
                        <div className="min-h-screen bg-gray-100 py-16 px-6">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    Submitted Forms
                </h1>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {form.map((each) => (
                        <div
                            key={each._id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="bg-[#2bb6b6] text-white px-6 py-4">
                                <h2 className="text-xl font-semibold">
                                    {each.name}
                                </h2>
                            </div>

                            <div className="p-6 space-y-5">

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                                        Email
                                    </p>
                                    <p className="mt-1 text-gray-700 break-words">
                                        {each.email}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                                        Website
                                    </p>
                                    <p className="mt-1 text-blue-600 break-words">
                                        {each.website}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                                        Message
                                    </p>

                                    <div className="mt-2 bg-gray-50 border rounded-lg p-4">
                                        <p className="text-gray-700 break-words whitespace-pre-wrap leading-7">
                                            {each.message}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}