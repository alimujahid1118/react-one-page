import { Link } from "react-scroll"

export function Header() {
    return(
        <div className="flex flex-row items-center justify-between py-8 sticky top-0 bg-white bg-opacity-90">
            <div className="w-60 ml-10">
                <img src="web-logo.png" alt="website logo" />
            </div>
            <div className="flex flex-row gap-5 mr-10 ">
                <Link to="portfolio" spy={true} smooth={true} duration={500} className="px-4 py-2 hover:cursor-pointer">HOME</Link>
                <Link to="portfolio" spy={true} smooth={true} duration={500} activeClass="active-nav" className="text-black px-4 py-2 hover:cursor-pointer">
                    <span className="nav-text">PORTFOLIO</span>
                </Link>
                <Link to="services" spy={true} smooth={true} duration={500} activeClass="active-nav" className="text-black px-4 py-2 hover:cursor-pointer">
                <span className="nav-text">SERVICES</span>
                </Link>
                <Link to="team" spy={true} smooth={true} duration={500} activeClass="active-nav" className="text-black px-4 py-2 hover:cursor-pointer">
                <span className="nav-text">TEAM</span>
                </Link>
                <Link to="about" spy={true} smooth={true} duration={500} activeClass="active-nav" className="text-black px-4 py-2 hover:cursor-pointer">
                <span className="nav-text">ABOUT</span>
                </Link>
                <Link to="blog" spy={true} smooth={true} duration={500} activeClass="active-nav" className="text-black px-4 py-2 hover:cursor-pointer">
                <span className="nav-text">BLOG</span>
                </Link>
                <Link to="contactus" spy={true} smooth={true} duration={500} activeClass="active-nav" className="text-black px-4 py-2 hover:cursor-pointer">
                <span className="nav-text">CONTACT US</span>
                </Link>
            </div>
        </div>
    )
}