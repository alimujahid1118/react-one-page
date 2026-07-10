import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useRef } from "react";

export function HomePage() {

    return (
        <>
        <Header />

        <div id="portfolio" name="portfolio" className="bg-[url('our-portfolio.jpg')] bg-cover bg-no-repeat bg-center h-full w-full">
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
        <div id="team" name="team" className="flex flex-col items-center text-center gap-12 bg-[url('meet-the-team.png')] bg-no-repeat bg-center bg-cover py-16">
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
        <div className="flex flex-col items-center text-center gap-10 pb-20">
            <div className="flex flex-col gap-1">
                <p className="font-bold text-4xl">COMPANY STATS</p>
                <p className="text-gray-500">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
            </div>
            <div className="grid grid-cols-4 gap-6">
                <div className="border-[1px] border-gray-300 px-8 py-12 flex flex-col gap-3">
                    <i className="fi fi-rr-flask-potion text-[#2bb6b6] text-4xl"></i>
                    <p className="text-6xl">
                        956779
                    </p>
                    <p className="text-gray-300 text-xl">
                        Lines of code written
                    </p>
                </div>
                <div className="border-[1px] border-gray-300 px-8 py-12 flex flex-col gap-3">
                    <i className="fi fi-rr-mug-hot-alt text-[#2bb6b6] text-4xl"></i>
                    <p className="text-6xl">
                        1479
                    </p>
                    <p className="text-gray-300 text-xl">
                        Coffe Drinked
                    </p>
                </div>
                <div className="border-[1px] border-gray-300 px-8 py-12 flex flex-col gap-3">
                    <i className="fi fi-rr-user text-[#2bb6b6] text-4xl"></i>
                    <p className="text-6xl">
                        578
                    </p>
                    <p className="text-gray-300 text-xl">
                        Happy Clients
                    </p>
                </div>
                <div className="border-[1px] border-gray-300 px-8 py-12 flex flex-col gap-3">
                    <i className="fi fi-rr-briefcase text-[#2bb6b6] text-4xl"></i>
                    <p className="text-6xl">
                        2178
                    </p>
                    <p className="text-gray-300 text-xl">
                        Projects Done
                    </p>
                </div>
            </div>
        </div>
        <div id="blog" name="blog" className="flex flex-col items-center text-center gap-10 pb-20">
            <div className="flex flex-col gap-1">
                <p className="font-bold text-4xl">LATEST POSTS</p>
                <p className="text-gray-500">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
            </div>
            <div className="grid grid-cols-4 mx-16 gap-8">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center">
                        <img src="latest-posts1.png" />
                        <div className="bg-[#2bb6b6] flex flex-row items-center justify-center gap-1 -mt-6 py-3 w-36 text-white">
                            <i className="fi fi-rr-clock-three mt-1"></i>
                            <p>19 oct</p>
                            <i className="fi fi-rr-comment-dots mt-1"></i>
                            <p>10</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-6">
                        <p className="text-xl text-gray-500">Mobile Friendly Comments Dashboardnow launched!</p>
                        <p className="bg-gray-500 h-[1px] w-full"></p>
                        <p className="text-gray-400">Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu</p>
                    </div>
                    
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center">
                        <img src="latest-posts2.png" />
                        <div className="bg-[#2bb6b6] flex flex-row items-center justify-center gap-1 -mt-6 py-3 w-36 text-white">
                            <i className="fi fi-rr-clock-three mt-1"></i>
                            <p>19 oct</p>
                            <i className="fi fi-rr-comment-dots mt-1"></i>
                            <p>10</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-6">
                        <p className="text-xl text-gray-500">Mobile Friendly Comments Dashboardnow launched!</p>
                        <p className="bg-gray-500 h-[1px] w-full"></p>
                        <p className="text-gray-400">Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu</p>
                    </div>
                    
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center">
                        <img src="latest-posts3.png" />
                        <div className="bg-[#2bb6b6] flex flex-row items-center justify-center gap-1 -mt-6 py-3 w-36 text-white">
                            <i className="fi fi-rr-clock-three mt-1"></i>
                            <p>19 oct</p>
                            <i className="fi fi-rr-comment-dots mt-1"></i>
                            <p>10</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-6">
                        <p className="text-xl text-gray-500">Mobile Friendly Comments Dashboardnow launched!</p>
                        <p className="bg-gray-500 h-[1px] w-full"></p>
                        <p className="text-gray-400">Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu</p>
                    </div>
                    
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center">
                        <img src="latest-posts4.png" />
                        <div className="bg-[#2bb6b6] flex flex-row items-center justify-center gap-1 -mt-6 py-3 w-36 text-white">
                            <i className="fi fi-rr-clock-three mt-1"></i>
                            <p>19 oct</p>
                            <i className="fi fi-rr-comment-dots mt-1"></i>
                            <p>10</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-6">
                        <p className="text-xl text-gray-500">Mobile Friendly Comments Dashboardnow launched!</p>
                        <p className="bg-gray-500 h-[1px] w-full"></p>
                        <p className="text-gray-400">Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div id="contactus" className="bg-zinc-800 flex flex-col items-center text-center gap-10 py-20">
            <div className="text-white flex flex-col gap-2">
                <h2 className="text-4xl text-gray-100 font-semibold">GET IN TOUCH!</h2>
                <p className="text-lg space-">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
            </div>
            <div className="flex flex-row gap-8 mx-14">
                <div className="text-white w-1/2 flex flex-col justify-start text-start gap-4">
                    <h3 className="text-3xl">Contact info</h3>
                    <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.</p>
                    <p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperd iet nisi. Proin condimentum</p>
                    <p className="bg-gray-400 h-[1px] w-full"></p>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-row gap-2 items-center">
                            <i className="fi fi-rr-house-chimney mt-1"></i>
                            <p>lorem ipsum street</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <i className="fi fi-rr-phone-flip mt-1"></i>
                            <p>+399 (500) 321 9548</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <i className="fi fi-rr-envelope mt-1"></i>
                            <p>info@domain.com</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-row gap-4">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row">
                            <div className="bg-white px-4 py-4 border-gray-300 border-r-[1px]">
                                <i className="fi fi-rr-user px-2 py-1 w-6 rounded-full border-[1px] border-black"></i>
                            </div>
                            <input type="text" placeholder="Name" className="pl-3" />
                        </div>
                        <div className="flex flex-row">
                            <div className="bg-white px-4 py-4 border-gray-300 border-r-[1px]">
                                <i className="fi fi-rr-user px-2 py-1 w-6 rounded-full border-[1px] border-black"></i>
                            </div>
                            <input type="text" placeholder="e-mail" className="pl-3" />
                        </div>
                        <div className="flex flex-row">
                            <div className="bg-white px-4 py-4 border-gray-300 border-r-[1px]">
                                <i className="fi fi-rr-user px-2 py-1 w-6 rounded-full border-[1px] border-black"></i>
                            </div>
                            <input type="text" placeholder="website" className="pl-3" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <textarea placeholder="Message" className="h-32 pt-4 pl-4"></textarea>
                        <button className="bg-[#2bb6b6] text-white py-[14px] px-4 rounded hover:bg-[#229393] transition duration-300">SEND MESSAGE</button>
                    </div>
                    
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}