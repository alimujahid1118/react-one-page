export function Portfolio() {
    return (
        <div id="portfolio" name="portfolio" className="bg-[url('/our-portfolio.jpg')] bg-cover bg-no-repeat bg-center h-full w-full">
            <div className="flex flex-col items-center pt-20 pb-10 gap-10 mx-20">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-5xl font-semibold">OUR PORTFOLIO</h1>
                    <p className="text-gray-200 text-xl">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
                </div>
                <div className="w-full py-5 border-y-[1px] border-gray-400">
                    <div className="flex flex-row items-center text-center justify-center gap-3 text-lg">
                        <p className="px-5 py-2 skew-x-[-15deg] bg-[#2bb6b6] text-white">
                            <p className="skew-x-[15deg]">All</p>
                        </p>
                        <p className="px-5 py-2">Web Design</p>
                        <p className="px-5 py-2">Photography</p>
                        <p className="px-5 py-2">Illustration</p>
                        <p className="px-5 py-2">Branding</p>
                    </div>
                </div>
                
                <div className="columns-3 gap-7">
                    <img src="1.jpg" className="mb-7" />
                    <img src="2.jpg" className="mb-7" />
                    <img src="3.jpg" className="mb-7" />
                    <img src="4.jpg" className="mb-7" />
                    <img src="5.jpg" className="mb-7" />
                    <img src="6.jpg" className="mb-7" />
                    <img src="7.jpg" className="mb-7" />
                    <img src="8.jpg" className="mb-7" />
                    <img src="9.jpg" className="mb-7" />
                    <img src="10.jpg" className="mb-7" />
                    <img src="11.jpg" className="mb-7" />
                </div>
            </div>
        </div>
    )
}