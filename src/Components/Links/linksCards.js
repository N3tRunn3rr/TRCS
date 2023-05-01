import React from "react";
import Card from "react-bootstrap/Card";
import '../../styles/linksCards.css'

function Cards(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer" className="link-card-view">
      <Card>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title style={{color: "black"}}>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "left", color: "black", fontSize: "16px", lineHeight: "1.5"}}>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}

export default Cards;
