export function Team () {
    return(
        <div id="team" name="team" className="flex flex-col items-center text-center gap-12 bg-[url('/meet-the-team.png')] bg-no-repeat bg-center bg-cover py-16">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-5xl font-semibold text-white">MEET THE TEAM</h2>
                <p className="text-gray-400 text-xl">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
            </div>
            <div className="grid grid-cols-4 gap-6">
                <div className="flex flex-col">
                    <img src="person1.png" />
                    <div className="w-full flex flex-col bg-black py-2 text-left">
                        <p className="text-white font-bold text-lg ml-4">Owen Miller</p>
                        <p className="text-gray-300 ml-4">developer</p>
                    </div>
                    <div className="bg-[#2bb6b6] w-full flex flex-row ">
                        <div className="flex flex-row text-white py-4 gap-2 ml-6">
                            <i class="fi fi-brands-facebook text-2xl"></i>
                            <i class="fi fi-rr-wifi text-2xl"></i>
                            <i class="fi fi-rr-circle-g text-2xl"></i>
                            <i class="fi fi-rr-wifi text-2xl"></i>
                        </div>      
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src="person2.png" />
                    <div className="w-full flex flex-col bg-black py-2 text-left">
                        <p className="text-white font-bold text-lg ml-4">Mike William</p>
                        <p className="text-gray-300 ml-4">developer</p>
                    </div>
                    <div className="bg-[#2bb6b6] w-full flex flex-row ">
                        <div className="flex flex-row text-white py-4 gap-2 ml-6">
                            <i class="fi fi-brands-facebook text-2xl"></i>
                            <i class="fi fi-rr-wifi text-2xl"></i>
                            <i class="fi fi-rr-circle-g text-2xl"></i>
                            <i class="fi fi-rr-wifi text-2xl"></i>
                        </div>      
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src="person3.png" />
                    <div className="w-full flex flex-col bg-black py-2 text-left">
                        <p className="text-white font-bold text-lg ml-4">Besim Dauti</p>
                        <p className="text-gray-300 ml-4">developer</p>
                    </div>
                    <div className="bg-[#2bb6b6] w-full flex flex-row ">
                        <div className="flex flex-row text-white py-4 gap-2 ml-6">
                            <i class="fi fi-brands-facebook text-2xl"></i>
                            <i class="fi fi-rr-wifi text-2xl"></i>
                            <i class="fi fi-rr-circle-g text-2xl"></i>
                            <i class="fi fi-rr-wifi text-2xl"></i>
                        </div>      
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src="person4.png" />
                    <div className="w-full flex flex-col bg-black py-2 text-left">
                        <p className="text-white font-bold text-lg ml-4">Faton Avdiu</p>
                        <p className="text-gray-300 ml-4">developer</p>
                    </div>
                    <div className="bg-[#2bb6b6] w-full flex flex-row ">
                        <div className="flex flex-row text-white py-4 gap-2 ml-6">
                            <i class="fi fi-brands-facebook text-2xl"></i>
                            <i class="fi fi-rr-wifi text-2xl"></i>
                            <i class="fi fi-rr-circle-g text-2xl"></i>
                            <i class="fi fi-rr-wifi text-2xl"></i>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    )
}