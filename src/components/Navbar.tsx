import { NavLink, useLocation } from "react-router-dom";
import "../CSS/navbar.css";
import {useState, useEffect } from "react";
import Notfound from "./Notfound";

const Navbar: React.FC = () => {

    const [activeLink, setActiveLink] = useState<string>("home");
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;

        if(pathname === "/"){
            setActiveLink("home");
        }
        else if(pathname === "/meat"){
            setActiveLink("meat");
        }
        else if(pathname === "/bakery"){
            setActiveLink("bakery");
        }
        else if(pathname === "/beverages"){
            setActiveLink("beverages");
        }
        else if(pathname === "/contact"){
            setActiveLink("contact");
        }
        else{
            <Notfound/>
        }
    }, [location.pathname])
    return (
        <div>
            <nav className="navbar">
                <div className="navbarContainer">
                    <ul className="navItems text-font">
                        <li className={`navLink ${activeLink === "home" ? "activeLink" : ""}`}>
                            <NavLink to = "/" className="navLinkItem"><i className="fas fa-home"></i> Home <i className="fa-solid fa-angle-down"></i></NavLink>
                        </li>
                        <li className={`navLink ${activeLink === "meat" ? "activeLink" : ""}`}>
                            <NavLink to = "/meat" className="navLinkItem"><i className="fas fa-drumstick-bite"></i> Meats & Seafood</NavLink>
                        </li>
                        <li className={`navLink ${activeLink === "bakery" ? "activeLink" : ""}`}>
                            <NavLink to = "/bakery" className="navLinkItem"><i className="fas fa-cookie-bite"></i> Bakery</NavLink>
                        </li>
                        <li className={`navLink ${activeLink === "beverages" ? "activeLink" : ""}`}>
                            <NavLink to = "/beverages" className="navLinkItem"><i className="fas fa-coffee"></i> Beverages</NavLink>
                        </li>
                        <li className={`navLink ${activeLink === "contact" ? "activeLink" : ""}`}>
                            <NavLink to = "/contact" className="navLinkItem"><i className="fas fa-phone-alt"></i> Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;