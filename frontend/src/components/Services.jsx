export function Services () {
    return (
    <div id="services" name="services" className="flex flex-col items-center py-20 gap-10 mx-16">
        <div className="flex flex-col items-center gap-2">
            <h2 className="text-5xl font-semibold">OUR SERVICES</h2>
            <p className="text-gray-400 text-xl">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
        </div>
        <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-row items-center gap-8">
                <div className="px-4 py-8 bg-[#2bb6b6] text-white skew-x-[-15deg] hover:skew-x-0 transition-transform">
                    <i className="fi fi-rr-megaphone text-2xl"></i>
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className="text-lg text-gray-600">WEB DESIGN</p>
                    <p className="text-md text-gray-400">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-8">
                <div className="px-4 py-8 bg-[#2bb6b6] text-white skew-x-[-15deg] hover:skew-x-0 transition-transform">
                    <i className="fi fi-rr-plane-alt text-2xl"></i>
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className="text-lg text-gray-600">PHOTOGRAPHY</p>
                    <p className="text-md text-gray-400">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-8">
                <div className="px-4 py-8 bg-[#2bb6b6] text-white skew-x-[-15deg] hover:skew-x-0 transition-transform">
                    <i className="fi fi-rr-plane-alt text-2xl"></i>
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className="text-lg text-gray-600">HTML5</p>
                    <p className="text-md text-gray-400">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-8">
                <div className="px-4 py-8 bg-[#2bb6b6] text-white skew-x-[-15deg] hover:skew-x-0 transition-transform">
                    <i className="fi fi-rr-plane-alt text-2xl"></i>
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className="text-lg text-gray-600">JQUERY</p>
                    <p className="text-md text-gray-400">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-8">
                <div className="px-4 py-8 bg-[#2bb6b6] text-white skew-x-[-15deg] hover:skew-x-0 transition-transform">
                    <i className="fi fi-rr-plane-alt text-2xl"></i>
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className="text-lg text-gray-600">SEO</p>
                    <p className="text-md text-gray-400">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-8">
                <div className="px-4 py-8 bg-[#2bb6b6] text-white skew-x-[-15deg] hover:skew-x-0 transition-transform">
                    <i className="fi fi-rr-plane-alt text-2xl"></i>
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className="text-lg text-gray-600">CSS3</p>
                    <p className="text-md text-gray-400">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
                </div>
            </div>
        </div>
        <img src="our-services.png" className="pt-10" />
    </div>
    )
}