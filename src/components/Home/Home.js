import React from "react";
import { Container, Row, Col, Card, Image} from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import myImg from "../../Assets/everlast321.png";
import Type from "./Type";
import pic1 from "../../Assets/1.jpg";
import pic2 from "../../Assets/2.jpg";
import pic3 from "../../Assets/3.jpg";
import pic4 from "../../Assets/4.jpg";
import pic5 from "../../Assets/5.jpg";
import pic6 from "../../Assets/6.jpg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <Card style = {{width : 450, cursor : 'pointer'}}>
                <Image width = {450} height = {450} src = {pic1}/>
              </Card>
            </Col>

            <Col md={6} className="home-header">
              <Card style = {{width : 450, cursor : 'pointer'}}>
                <Image width = {450} height = {450} src = {pic2}/>
              </Card>
            </Col>

            <Col md={6} className="home-header">
              <Card style = {{width : 450, cursor : 'pointer'}}>
                <Image width = {450} height = {450} src = {pic3}/>
              </Card>
            </Col>

            <Col md={6} className="home-header">
              <Card style = {{width : 450, cursor : 'pointer'}}>
                <Image width = {450} height = {450} src = {pic4}/>
              </Card>
            </Col>

            <Col md={6} className="home-header">
              <Card style = {{width : 450, cursor : 'pointer'}}>
                <Image width = {450} height = {450} src = {pic5}/>
              </Card>
            </Col>

            <Col md={6} className="home-header">
              <Card style = {{width : 450, cursor : 'pointer'}}>
                <Image width = {450} height = {450} src = {pic6}/>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
