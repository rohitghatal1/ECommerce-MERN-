import { NavLink } from "react-router-dom";
import "../CSS/navbar.css";

const Navbar: React.FC = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbarContainer">
                    <ul className="navItems text-font">
                        <li className="navLink">
                            <NavLink to = "/" className="navLinkItem"><i className="fas fa-home"></i> Home <i className="fa-solid fa-angle-down"></i></NavLink>
                        </li>
                        <li className="navLink">
                            <NavLink to = "/meat" className="navLinkItem"><i className="fas fa-drumstick-bite"></i> Meats & Seafood</NavLink>
                        </li>
                        <li className="navLink">
                            <NavLink to = "/bakery" className="navLinkItem"><i className="fas fa-cookie-bite"></i> Bakery</NavLink>
                        </li>
                        <li className="navLink">
                            <NavLink to = "/beverages" className="navLinkItem"><i className="fas fa-coffee"></i> Beverages</NavLink>
                        </li>
                        <li className="navLink">
                            <NavLink to = "/contact" className="navLinkItem"><i className="fas fa-phone-alt"></i> Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;