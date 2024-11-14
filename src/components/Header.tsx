import Navbar from "./Navbar";
import "../CSS/header.css";

const Header: React.FC = () => {
  return (
    <div>
      <section className="headerSection">
        <div className="basicInforation">
          <div className="singleUserNavigation">
            <span>About Us</span>
            <span>My account</span>
            <span>Wishlist</span>
            <span>Order Tracking</span>
          </div>
          <div className="securityInfo">
            <p>
              <i className="fa-solid fa-shield-halved"></i> 100% Secure delivery
            </p>
          </div>
          <div className="contactInfo">
            <p>
              Need help? Contact us: <span>98065542</span>
            </p>
          </div>
        </div>
        <Navbar />
      </section>
    </div>
  );
};

export default Header;
