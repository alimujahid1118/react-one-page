export function Portfolio() {
    return (
        <div id="portfolio" name="portfolio" className="bg-[url('/our-portfolio.jpg')] bg-cover bg-no-repeat bg-center h-full w-full">
            <div className="flex flex-col items-center gap-10 px-20 pb-10 pt-20 max-tablet:px-4 max-tablet:pt-16">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-5xl font-semibold max-tablet:text-4xl max-mobile:text-3xl">OUR PORTFOLIO</h1>
                    <p className="text-gray-200 text-xl max-tablet:text-lg max-mobile:text-base">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
                </div>
                <div className="w-full border-y-[1px] border-gray-400 py-5">
                    <div className="flex flex-wrap items-center justify-center gap-3 text-lg max-tablet:text-sm">
                        <div className="skew-x-[-15deg] bg-[#2bb6b6] px-5 py-2 text-white">
                            <div className="skew-x-[15deg]">All</div>
                        </div>
                        <p className="px-5 py-2">Web Design</p>
                        <p className="px-5 py-2">Photography</p>
                        <p className="px-5 py-2">Illustration</p>
                        <p className="px-5 py-2">Branding</p>
                    </div>
                </div>

                <div className="columns-3 gap-7 max-tablet:columns-1 max-tablet:gap-4">
                    <img src="1.jpg" alt="Portfolio item 1" className="mb-7 w-full" />
                    <img src="2.jpg" alt="Portfolio item 2" className="mb-7 w-full" />
                    <img src="3.jpg" alt="Portfolio item 3" className="mb-7 w-full" />
                    <img src="4.jpg" alt="Portfolio item 4" className="mb-7 w-full" />
                    <img src="5.jpg" alt="Portfolio item 5" className="mb-7 w-full" />
                    <img src="6.jpg" alt="Portfolio item 6" className="mb-7 w-full" />
                    <img src="7.jpg" alt="Portfolio item 7" className="mb-7 w-full" />
                    <img src="8.jpg" alt="Portfolio item 8" className="mb-7 w-full" />
                    <img src="9.jpg" alt="Portfolio item 9" className="mb-7 w-full" />
                    <img src="10.jpg" alt="Portfolio item 10" className="mb-7 w-full" />
                    <img src="11.jpg" alt="Portfolio item 11" className="mb-7 w-full" />
                </div>
            </div>
        </div>
    )
}