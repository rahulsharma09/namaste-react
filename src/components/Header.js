import { LOGO_URL } from "../utils/constants";


const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={LOGO_URL} />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
