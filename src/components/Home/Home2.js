import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/everlast321.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"></span>
            </h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
