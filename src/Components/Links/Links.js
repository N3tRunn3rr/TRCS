import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./linksCards";
import '../../styles/Links.css'

function Links() {
  return (
    <Container className="project-section">
      <Container>
        <h1 className="link-heading">
            Links
        </h1>
        <Row className='project-card-row' style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={3} className="project-card">
            <Cards
              imgPath={'tplogo.jpg'}
              title="Timeshare Professionals"
              description="A one-stop resource for buying, selling, and renting timeshares. We are a Licensed Real Estate Brokerage since 1984. Of those years, 21 of them are with RE/MAX. No Advance fees. We are a commission-based brokerage. We are a member of the TSX Multiple Listing Service, which is exclusively for timeshare."
              link="https://www.timeshareprofessionals.com/"
            />
          </Col>
          <Col md={6} lg={3} className="project-card">
            <Cards 
              imgPath={'tsxmlslogo.jpg'}
              title="TSXchangeMLS"
              description="Looking for timeshare inventory? The solution is TSXchangeMLS, a Worldwide Multiple Listing Service. What can TSXchange MLS do for you? Have Licensed Pros working on selling your listings 24/7 and access to inventory you need to make a sale."
              link="http://www.tsxmls.com/"
            />
          </Col>
          <Col md={6} lg={3} className="project-card">
            <Cards 
              imgPath={'trplogo.jpg'}
              title="RE/MAX"
              description="The Smartest and Easiest Way to Buy, Rent and Sell Timeshare Resales. We are a timeshare resale team with over 30 years of combined real estate experience. We are located near the major theme parks, and cater to thousands of visitors daily. We offer very diverse marketing exposure."
              link="https://www.timeshareresalepros.com/"
            />
          </Col>
          <Col md={6} lg={3} className="project-card">
            <Cards 
              imgPath={'tplogo.jpg'}
              title="My Timeshare Connection"
              description="Your Worldwide Connection To Timeshare Resales & Rentals. We offer a simple approach to buying, selling and renting timeshare. You will find our website is user-friendly and that we offer a straight-forward approach to helping you achieve your vacation dreams."
              link="https://www.mytimeshareconnection.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Links;