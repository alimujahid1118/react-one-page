import { useState } from "react"
import axios from "axios"

const backend_url = import.meta.env.VITE_BACKEND_URL

export function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(`${backend_url}/api/contact-us`, formData)
            setFormData(response.data)
            setFormData({
                name: "",
                email: "",
                website: "",
                message: "",
            })

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div id="contactus" className="bg-zinc-800 flex flex-col items-center text-center gap-10 py-20 px-4 max-tablet:px-6">
            <div className="text-white flex flex-col gap-2">
                <h2 className="text-4xl text-gray-100 font-semibold max-tablet:text-3xl">GET IN TOUCH!</h2>
                <p className="text-lg max-tablet:text-base">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
            </div>
            <div className="flex flex-col gap-8 w-full lg:mx-14 lg:flex-row">
                <div className="text-white w-full flex flex-col justify-start text-start gap-4 lg:w-1/2">
                    <h3 className="text-3xl max-tablet:text-2xl">Contact info</h3>
                    <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.</p>
                    <p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperd iet nisi. Proin condimentum</p>
                    <p className="bg-gray-400 h-[1px] w-full"></p>
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <div className="flex flex-row gap-2 items-center">
                            <i className="fi fi-rr-house-chimney mt-1"></i>
                            <p>lorem ipsum street</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <i className="fi fi-rr-phone-flip mt-1"></i>
                            <p>+399 (500) 321 9548</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <i className="fi fi-rr-envelope mt-1"></i>
                            <p>info@domain.com</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 lg:w-1/2 lg:flex-row">
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex flex-row">
                            <div className="bg-white px-4 py-4 border-gray-300 border-r-[1px]">
                                <i className="fi fi-rr-user px-2 py-1 w-6 rounded-full border-[1px] border-black"></i>
                            </div>
                            <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name" className="pl-3 w-full" />
                        </div>
                        <div className="flex flex-row">
                            <div className="bg-white px-4 py-4 border-gray-300 border-r-[1px]">
                                <i className="fi fi-rr-user px-2 py-1 w-6 rounded-full border-[1px] border-black"></i>
                            </div>
                            <input name="email" value={formData.email} onChange={handleChange} type="text" placeholder="e-mail" className="pl-3 w-full" />
                        </div>
                        <div className="flex flex-row">
                            <div className="bg-white px-4 py-4 border-gray-300 border-r-[1px]">
                                <i className="fi fi-rr-user px-2 py-1 w-6 rounded-full border-[1px] border-black"></i>
                            </div>
                            <input name="website" value={formData.website} onChange={handleChange} type="text" placeholder="website" className="pl-3 w-full" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="h-32 pt-4 pl-4 w-full"></textarea>
                        <button type="submit" className="bg-[#2bb6b6] text-white py-[14px] px-4 rounded hover:bg-[#229393] transition duration-300">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
        </div>
    )
}