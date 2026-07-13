export function Team() {
    return (
        <div id="team" name="team" className="flex flex-col items-center gap-12 bg-[url('/meet-the-team.png')] bg-no-repeat bg-center bg-cover py-16 px-8 max-tablet:px-4">
            <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="text-5xl font-semibold text-white max-tablet:text-4xl max-mobile:text-3xl">MEET THE TEAM</h2>
                <p className="text-gray-400 text-xl max-tablet:text-lg max-mobile:text-base">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                <div className="flex flex-col">
                    <img src="person1.png" alt="Team member Owen Miller" className="w-full" />
                    <div className="w-full flex flex-col bg-black py-2 text-left">
                        <p className="text-white font-bold text-lg ml-4">Owen Miller</p>
                        <p className="text-gray-300 ml-4">developer</p>
                    </div>
                    <div className="bg-[#2bb6b6] w-full flex flex-row px-4 py-4">
                        <div className="flex flex-row flex-wrap items-center gap-2 text-white">
                            <i className="fi fi-brands-facebook text-2xl"></i>
                            <i className="fi fi-rr-wifi text-2xl"></i>
                            <i className="fi fi-rr-circle-g text-2xl"></i>
                            <i className="fi fi-rr-wifi text-2xl"></i>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src="person2.png" alt="Team member Mike William" className="w-full" />
                    <div className="w-full flex flex-col bg-black py-2 text-left">
                        <p className="text-white font-bold text-lg ml-4">Mike William</p>
                        <p className="text-gray-300 ml-4">developer</p>
                    </div>
                    <div className="bg-[#2bb6b6] w-full flex flex-row px-4 py-4">
                        <div className="flex flex-row flex-wrap items-center gap-2 text-white">
                            <i className="fi fi-brands-facebook text-2xl"></i>
                            <i className="fi fi-rr-wifi text-2xl"></i>
                            <i className="fi fi-rr-circle-g text-2xl"></i>
                            <i className="fi fi-rr-wifi text-2xl"></i>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src="person3.png" alt="Team member Besim Dauti" className="w-full" />
                    <div className="w-full flex flex-col bg-black py-2 text-left">
                        <p className="text-white font-bold text-lg ml-4">Besim Dauti</p>
                        <p className="text-gray-300 ml-4">developer</p>
                    </div>
                    <div className="bg-[#2bb6b6] w-full flex flex-row px-4 py-4">
                        <div className="flex flex-row flex-wrap items-center gap-2 text-white">
                            <i className="fi fi-brands-facebook text-2xl"></i>
                            <i className="fi fi-rr-wifi text-2xl"></i>
                            <i className="fi fi-rr-circle-g text-2xl"></i>
                            <i className="fi fi-rr-wifi text-2xl"></i>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src="person4.png" alt="Team member Faton Avdiu" className="w-full" />
                    <div className="w-full flex flex-col bg-black py-2 text-left">
                        <p className="text-white font-bold text-lg ml-4">Faton Avdiu</p>
                        <p className="text-gray-300 ml-4">developer</p>
                    </div>
                    <div className="bg-[#2bb6b6] w-full flex flex-row px-4 py-4">
                        <div className="flex flex-row flex-wrap items-center gap-2 text-white">
                            <i className="fi fi-brands-facebook text-2xl"></i>
                            <i className="fi fi-rr-wifi text-2xl"></i>
                            <i className="fi fi-rr-circle-g text-2xl"></i>
                            <i className="fi fi-rr-wifi text-2xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}