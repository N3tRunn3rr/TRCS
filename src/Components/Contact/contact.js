import { Container } from 'react-bootstrap';
import '../../styles/Contact.css'
import submit from './submit';


const Contact = () => {
    return (
        <div>
        <Container className="text-center mt-5">
            <div className='contact-info'>
              <h3>CONTACT US</h3>
              <a href='mailto:info@trcsinc.com'><button className='btn btn-primary contact-btn'>Email Us: info@trcsinc.com</button></a>
              <a href='tel:407-464-3935'><button className='btn btn-primary contact-btn'>Call Us: 407-464-3935</button></a>
            </div>
            <br></br>
            <p> Mailing Address: &copy; 4417 13th Street #480, Saint Cloud FL 34769 </p>
            <p>If you want additional information or have questions, feel free to reach out! </p>
            <form onSubmit={submit}>
              <div className="form-group">
                <label for="exampleFormControlInput1">Name:</label>
                <input type="name" className="form-control" id="name" placeholder="" />
                <label for="exampleFormControlInput1">Email address:</label>
                <input type="email" className="form-control" id="email" placeholder="" />
                <label for="exampleFormControlInput1">Phone:</label>
                <input type="phone" className="form-control" id="phone" placeholder="" />
                <label for="exampleFormControlTextarea1">How can we help?</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
                <br></br>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </Container>
        </div>
      );
    };

export default Contact;