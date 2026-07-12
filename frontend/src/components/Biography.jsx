export function Biography() {
    return (
        <div id="about" name="about" className="flex flex-row mx-14 py-20">
            <div className="flex flex-col w-1/2 gap-12">
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-bold">
                        COMPANY BIOGRAPHY
                    </h2>
                    <p className="bg-[#2bb6b6] w-48 text-white text-center">
                        SHORT STORY ABOUT US
                    </p>
                </div>
                <div className="mr-20 flex flex-col gap-4 text-gray-500 text-xl">
                    <p>
                        This is <span className="text-[#2bb6b6] font-bold">Photoshop's</span> version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                    </p>
                    <p>
                        Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.<span className="text-[#2bb6b6] font-bold"> Class aptent taciti </span> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <p>
                        Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non
                    </p>
                </div>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-bold">
                        OUR CLIENTS
                    </h2>
                    <p className="bg-[#2bb6b6] w-48 text-white text-center">
                        WE LOVE OUR CLIENTS
                    </p>
                </div>
                <div className="flex flex-row gap-3 justify-end">
                    <p className="bg-gray-300 border-[1px] w-4 h-4 rounded-full"></p>
                    <p className="border-[1px] border-gray-300 w-4 h-4 rounded-full"></p>
                    <p className="border-[1px] border-gray-300 w-4 h-4 rounded-full"></p>
                    <p className="border-[1px] border-gray-300 w-4 h-4 rounded-full"></p>
                </div>
                <div className="grid grid-cols-2">
                    <img src="our-clients1.png" className="bg-[#2bb6b6] py-12 px-14 mb-6" />
                    <img src="our-clients2.png" className="bg-[#2bb6b6] py-12 px-24" />
                    <img src="our-clients3.png" className="bg-[#2bb6b6] py-14 px-8" />
                    <img src="our-clients4.png" className="bg-[#2bb6b6] py-[60px] px-14" />
                </div>
            </div>
        </div>
    )
}