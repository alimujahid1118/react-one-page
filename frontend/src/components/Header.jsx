import { useState } from "react"
import { Link } from "react-scroll"

const navigationLinks = [
    { label: "HOME", to: "portfolio" },
    { label: "PORTFOLIO", to: "portfolio" },
    { label: "SERVICES", to: "services" },
    { label: "TEAM", to: "team" },
    { label: "ABOUT", to: "about" },
    { label: "BLOG", to: "blog" },
    { label: "CONTACT US", to: "contactus" },
]

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
            <div className="flex items-center justify-between py-4 px-4">
                <div className="w-32 lg:w-60">
                    <img src="web-logo.png" alt="website logo" className="w-full" />
                </div>

                <button
                    type="button"
                    aria-label="Toggle navigation menu"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="block lg:hidden rounded border border-gray-300 px-3 py-2 text-lg"
                >
                    ☰
                </button>

                <nav
                    className={`${menuOpen ? "flex" : "hidden"} absolute left-4 right-4 top-[72px] flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-lg lg:static lg:flex lg:flex-row lg:items-center lg:gap-5 lg:border-0 lg:p-0 lg:shadow-none`}
                >
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="active-nav"
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-2 text-black hover:cursor-pointer"
                        >
                            <span className="nav-text">{link.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}