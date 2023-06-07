import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           This is my gallery - <span className="blue">Everlast</span>
            <br />Here i represent my design works i have done during last 2 years
            <br />
              All of them belong to the truly way i see things and what i find beatiful, and what really admires me, leads me to better place
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
