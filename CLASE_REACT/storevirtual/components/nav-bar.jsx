import Link from "next/link";
import { useState } from "react";
export const navLinks = [
    {
        id: "/",
        title: "Home",
    },
    {
        id: "/products",
        title: "Products",
    },
    {
        id: "/about",
        title: "About",
    },
    {
        id: "/contact",
        title: "Contact us",
    },
];
const NavBar = () => {

    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (<>
        <nav className="w-full flex py-6 justify-between items-center navbar">
            {/* Logo */}
            <h1 className="text-3xl text-white">Logo</h1>

            {/* Desktop Navigation */}
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-orange-200"
                            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <Link href={`${nav.id}`}>{nav.title}</Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex flex-1 justify-end items-center">

                <button type="button" onClick={() => { setToggle(!toggle) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg></button>


                {/* Sidebar */}
                <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 bg-black-gradient absolute top-20 right-0 mx-2 bg-red-950 z-40 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-orange-200"
                                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <Link href={`${nav.id}`}>{nav.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    </>);

}
export default NavBar;