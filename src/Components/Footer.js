import { Container, Navbar, Nav } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div>
    <Container className="text-center mt-5">
        <div className='contact-info'>
          <h3>Contact Us</h3>
          <a href='mailto:info@trcsinc.com'><button className='btn btn-primary contact-btn'>Email Us: info@trcsinc.com</button></a>
          <a href='tel:407-464-3935'><button className='btn btn-primary contact-btn'>Call Us: 407-464-3935</button></a>
        </div>
        <br></br>
        <p> COPYRIGHT &copy; 2009 ALL RIGHTS RESERVED</p>
        <p>This website is intended to provide general information regarding the transfer of timeshare properties and related services available from TRCS, Inc. This information does not constitute legal advice. Please seek legal advice if you have any legal questions. Changes happen very quickly in this industry; therefore, we do not guarantee the accuracy or availability of the content on this site or on other sites to which we link.</p>
      </Container>
    </div>
  );
};

export default Footer;