export function ContactUs () {
    return(
        <div id="contactus" className="bg-zinc-800 flex flex-col items-center text-center gap-10 py-20">
            <div className="text-white flex flex-col gap-2">
                <h2 className="text-4xl text-gray-100 font-semibold">GET IN TOUCH!</h2>
                <p className="text-lg space-">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
            </div>
            <div className="flex flex-row gap-8 mx-14">
                <div className="text-white w-1/2 flex flex-col justify-start text-start gap-4">
                    <h3 className="text-3xl">Contact info</h3>
                    <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.</p>
                    <p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperd iet nisi. Proin condimentum</p>
                    <p className="bg-gray-400 h-[1px] w-full"></p>
                    <div className="flex flex-row gap-4">
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
                <div className="w-1/2 flex flex-row gap-4">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row">
                            <div className="bg-white px-4 py-4 border-gray-300 border-r-[1px]">
                                <i className="fi fi-rr-user px-2 py-1 w-6 rounded-full border-[1px] border-black"></i>
                            </div>
                            <input type="text" placeholder="Name" className="pl-3" />
                        </div>
                        <div className="flex flex-row">
                            <div className="bg-white px-4 py-4 border-gray-300 border-r-[1px]">
                                <i className="fi fi-rr-user px-2 py-1 w-6 rounded-full border-[1px] border-black"></i>
                            </div>
                            <input type="text" placeholder="e-mail" className="pl-3" />
                        </div>
                        <div className="flex flex-row">
                            <div className="bg-white px-4 py-4 border-gray-300 border-r-[1px]">
                                <i className="fi fi-rr-user px-2 py-1 w-6 rounded-full border-[1px] border-black"></i>
                            </div>
                            <input type="text" placeholder="website" className="pl-3" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <textarea placeholder="Message" className="h-32 pt-4 pl-4"></textarea>
                        <button className="bg-[#2bb6b6] text-white py-[14px] px-4 rounded hover:bg-[#229393] transition duration-300">SEND MESSAGE</button>
                    </div>
                    
                </div>
            </div>
        </div>
    ) 
}