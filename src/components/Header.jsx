import { Link } from "react-scroll"

export function Header() {



    return(
        <div className="flex flex-row items-center justify-between py-8 sticky top-0 bg-white bg-opacity-90">
            <div className="w-60 ml-10">
                <img src="web-logo.png" alt="website logo" />
            </div>
            <div className="flex flex-row gap-5 mr-10 ">
                <button>
                    <Link to="portfolio" spy={true} smooth={true} duration={500} className="px-4 py-2">HOME</Link>
                </button>
                <button className="bg-[#2bb6b6] px-4 py-2 skew-x-[-15deg]">
                    <Link to="portfolio" spy={true} smooth={true} duration={500} >
                        <p className="skew-x-[15deg] text-white">PORTFOLIO</p>
                    </Link>
                </button>
                <button>
                    <Link to="services" spy={true} smooth={true} duration={500} className="px-4 py-2">SERVICES</Link>
                </button>
                <button>
                    <Link to="team" spy={true} smooth={true} duration={500} className="px-4 py-2">TEAM</Link>
                </button>
                <button>
                    <Link to="about" spy={true} smooth={true} duration={500} className="px-4 py-2">ABOUT</Link>
                </button>
                <button>
                    <Link to="blog" spy={true} smooth={true} duration={500} className="px-4 py-2">BLOG</Link>
                </button>
                <button>
                    <Link to="contactus" spy={true} smooth={true} duration={500} className="px-4 py-2">CONTACT US</Link>
                </button>
            </div>
        </div>
    )
}