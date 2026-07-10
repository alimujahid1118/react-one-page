export function Footer() {
    return(
        <div className="bg-[#2bb6b6] flex flex-row w-full h-36 justify-between">
            <div className="text-white flex justify-center items-center ml-14">
                © 2014 OnePager, All Rights Reserved
            </div>
            <div className="text-white flex flex-row items-center text-center mr-14">
                <div className="w-16 mr-4">
                    <i className="fi fi-brands-facebook text-6xl"></i>
                </div>
                <div className="border-[1px] border-white rounded-full px-[6px] py-[5px] mr-4">
                    <i className="fi fi-brands-twitter text-5xl"></i>
                </div>
                <div className="mr-4">
                    <i className="fi fi-brands-telegram text-6xl"></i>
                </div>
                <div>
                    <i className="fi fi-brands-linkedin-circle text-6xl"></i>
                </div>
                <div>
                    <i className="fi fi-brands-pinterest text-6xl"></i>
                </div>
            </div>
        </div>
    )
}