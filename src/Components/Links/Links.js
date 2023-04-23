import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./linksCards";



function Links() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="link-heading">
            Links
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Cards
              // imgPath={perfectPlaylist}
              title="Timeshare Professionals"
              description="A one-stop resource for buying, selling, and renting timeshares. We are a Licensed Real Estate Brokerage since 1984. Of those years, 21 of them are with RE/MAX. No Advance fees. We are a commission-based brokerage. We are a member of the TSX Multiple Listing Service, which is exclusively for timeshare."
              ghLink="https://www.timeshareprofessionals.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Links;