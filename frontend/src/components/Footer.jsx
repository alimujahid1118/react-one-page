export function Footer() {
    return (
        <div className="bg-[#2bb6b6] flex flex-row w-full h-36 justify-between max-tablet:h-auto max-tablet:flex-col max-tablet:items-center max-tablet:gap-4 max-tablet:py-6">
            <div className="text-white flex justify-center items-center ml-14 max-tablet:ml-0 max-tablet:text-center">
                © 2014 OnePager, All Rights Reserved
            </div>
            <div className="text-white flex flex-row items-center text-center mr-14 max-tablet:mr-0 max-tablet:flex-wrap max-tablet:justify-center">
                <div className="w-16 mr-4 max-tablet:mr-2">
                    <i className="fi fi-brands-facebook text-6xl max-tablet:text-4xl"></i>
                </div>
                <div className="border-[1px] border-white rounded-full px-[6px] py-[5px] mr-4 max-tablet:mr-2">
                    <i className="fi fi-brands-twitter text-5xl max-tablet:text-4xl"></i>
                </div>
                <div className="mr-4 max-tablet:mr-2">
                    <i className="fi fi-brands-telegram text-6xl max-tablet:text-4xl"></i>
                </div>
                <div>
                    <i className="fi fi-brands-linkedin-circle text-6xl max-tablet:text-4xl"></i>
                </div>
                <div>
                    <i className="fi fi-brands-pinterest text-6xl max-tablet:text-4xl"></i>
                </div>
            </div>
        </div>
    )
}