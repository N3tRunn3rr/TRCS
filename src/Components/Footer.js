import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
    <Container className="text-center mt-5">
        <div className='contact-info'>
          <h3>CONTACT US</h3>
          <a href='mailto:info@trcsinc.com'><button className='btn btn-primary contact-btn'>Email Us: info@trcsinc.com</button></a>
          <a href='tel:407-464-3935'><button className='btn btn-primary contact-btn'>Call Us: 407-464-3935</button></a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;