export function Biography() {
    return (
        <div id="about" name="about" className="mx-4 py-12 lg:mx-14 lg:py-20">
            <div className="flex flex-col gap-10 lg:flex-row">
                <div className="flex flex-col w-full gap-8 lg:w-1/2 lg:gap-12">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-bold max-tablet:text-2xl">
                            COMPANY BIOGRAPHY
                        </h2>
                        <p className="bg-[#2bb6b6] w-48 text-white text-center">
                            SHORT STORY ABOUT US
                        </p>
                    </div>
                    <div className="mr-0 flex flex-col gap-4 text-gray-500 text-lg lg:mr-20 lg:text-xl">
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
                <div className="w-full flex flex-col gap-4 lg:w-1/2">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-bold max-tablet:text-2xl">
                            OUR CLIENTS
                        </h2>
                        <p className="bg-[#2bb6b6] w-48 text-white text-center">
                            WE LOVE OUR CLIENTS
                        </p>
                    </div>
                    <div className="flex flex-row gap-3 justify-start lg:justify-end">
                        <p className="bg-gray-300 border-[1px] w-4 h-4 rounded-full"></p>
                        <p className="border-[1px] border-gray-300 w-4 h-4 rounded-full"></p>
                        <p className="border-[1px] border-gray-300 w-4 h-4 rounded-full"></p>
                        <p className="border-[1px] border-gray-300 w-4 h-4 rounded-full"></p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-tablet:gap-3">
                        <img src="our-clients1.png" alt="Our client 1" className="w-full h-auto bg-[#2bb6b6] py-10 px-8" />
                        <img src="our-clients2.png" alt="Our client 2" className="w-full h-auto bg-[#2bb6b6] py-10 px-8" />
                        <img src="our-clients3.png" alt="Our client 3" className="w-full h-auto bg-[#2bb6b6] py-10 px-8" />
                        <img src="our-clients4.png" alt="Our client 4" className="w-full h-auto bg-[#2bb6b6] py-10 px-8" />
                    </div>
                </div>
            </div>
        </div>
    )
}