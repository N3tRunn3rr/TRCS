import { useLocation } from "react-router-dom";
import "../styles/Footer.css";
import Logo from "./logo/Logo";
import { Telephone, Envelope, PinMap } from "react-bootstrap-icons";

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
              <div className="footer-logo text-center mb-1 position-relative">
                <Logo image={`${process.env.PUBLIC_URL}/TRCS_Logo.jpg`} />
              </div>
              <div className="footer-widget-content text-center position-relative">
                <div className="content">
                  <div className="icon-text">
                    <Envelope />
                    <div>
                      <a className="mail-anchor" href="mailto:info@trcsinc.com">
                        info@trcsinc.com
                      </a>
                    </div>
                  </div>
                  <div className="icon-text">
                    <Telephone />
                    <div>
                      <a className="tel-anchor" href="tel:407-464-3935">
                        (407)-464-3935
                      </a>
                    </div>
                  </div>
                  <div className="icon-text">
                    <PinMap />
                    <div>
                      <a
                        className="address-anchor"
                        href="https://goo.gl/maps/5eZEPt7kfTNGtdKc9"
                      >
                        4853 E. Irlo Bronson Memorial Hwy. #1001, St.Cloud FL
                        34771
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center mt-5">
          <p className="disclaimer">
            This website is intended to provide general information regarding
            the transfer of timeshare properties and related services available
            from TRCS, inc. This information does not constitute legal advice.
            Please seek legal advice if you have any legal questions. Changes
            happen very quickly in this industry; therefore, we do not guarantee
            the accuracy or availability of the content on this site or on other
            sites to which we link.
          </p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} <strong>KB Inc.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
