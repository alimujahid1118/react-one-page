export function Stats() {
    return (
        <div className="flex flex-col items-center text-center gap-10 pb-20 px-4 max-tablet:px-6">
            <div className="flex flex-col gap-1">
                <p className="font-bold text-4xl max-tablet:text-3xl">COMPANY STATS</p>
                <p className="text-gray-500 max-tablet:text-sm">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                <div className="border-[1px] border-gray-300 px-8 py-12 flex flex-col gap-3">
                    <i className="fi fi-rr-flask-potion text-[#2bb6b6] text-4xl"></i>
                    <p className="text-6xl max-tablet:text-5xl max-mobile:text-4xl">
                        956779
                    </p>
                    <p className="text-gray-300 text-xl max-tablet:text-lg">
                        Lines of code written
                    </p>
                </div>
                <div className="border-[1px] border-gray-300 px-8 py-12 flex flex-col gap-3">
                    <i className="fi fi-rr-mug-hot-alt text-[#2bb6b6] text-4xl"></i>
                    <p className="text-6xl max-tablet:text-5xl max-mobile:text-4xl">
                        1479
                    </p>
                    <p className="text-gray-300 text-xl max-tablet:text-lg">
                        Coffe Drinked
                    </p>
                </div>
                <div className="border-[1px] border-gray-300 px-8 py-12 flex flex-col gap-3">
                    <i className="fi fi-rr-user text-[#2bb6b6] text-4xl"></i>
                    <p className="text-6xl max-tablet:text-5xl max-mobile:text-4xl">
                        578
                    </p>
                    <p className="text-gray-300 text-xl max-tablet:text-lg">
                        Happy Clients
                    </p>
                </div>
                <div className="border-[1px] border-gray-300 px-8 py-12 flex flex-col gap-3">
                    <i className="fi fi-rr-briefcase text-[#2bb6b6] text-4xl"></i>
                    <p className="text-6xl max-tablet:text-5xl max-mobile:text-4xl">
                        2178
                    </p>
                    <p className="text-gray-300 text-xl max-tablet:text-lg">
                        Projects Done
                    </p>
                </div>
            </div>
        </div>
    )
}