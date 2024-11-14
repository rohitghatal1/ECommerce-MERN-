import Navbar from "./Navbar";
import "../CSS/header.css";

const Header: React.FC = () => {
  return (
    <div>
      <section className="headerSection">
        <div className="basicInformationSection">
          <div className="basicInformation">
            <div className="singleUserNavigation">
              <span className="text-font">About Us</span>
              <span className="text-font">My account</span>
              <span className="text-font">Wishlist</span>
              <span className="text-font">Order Tracking</span>
            </div>
            <div className="securityInfo">
              <p className="text-font">
                <i className="fa-solid fa-shield-halved"></i> 100% Secure
                delivery
              </p>
            </div>
            <div className="contactInfo">
              <p className="text-font">
                Need help? Contact us: <span>98065542</span>
              </p>
            </div>
          </div>
        </div>
        <Navbar />
      </section>
    </div>
  );
};

export default Header;
