import { useLocation} from "react-router-dom";
import "../styles/Footer.css";
import Logo from "./logo/Logo";


const Footer = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname === "/contact") return null;

  return (
    <div className="footer-section section footer-bg-color">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col mb-2">
            <div className="footer-widget">
              <div className="footer-logo text-center mb-1">
                <Logo
                  image={`${process.env.PUBLIC_URL}/TRCS_Logo.jpg`}
                />
              </div>
              <div className="footer-widget-content text-center">
                <div className="content">
                  <p>
                  <a href='mailto:info@trcsinc.com'> info@trcsinc.com </a>
                  </p>
                  <p>
                  <a href='tel:407-464-3935'> 407-464-3935 </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
    <div className="col">
        <p className="copyright">&copy; {new Date().getFullYear()} <strong>KB Inc.</strong></p>
    </div>
</div>
    </div>


  );
};

export default Footer;
