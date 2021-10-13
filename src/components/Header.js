import React from "react";
import { Container, Row, Image, Col, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css";
import { BsFacebook, BsGithub, BsInstagram, BsTelegram } from "react-icons/bs";

export const Header = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col>
          <Image
            className="image"
            src="https://lh3.googleusercontent.com/a-/AOh14GhnaEkgS062CYjPvirOuW9SpoC8jAaHIlksy5MByg=s288-p-rw-no"
            roundedCircle
          />
          <h1>Mukhriddin Shakhriyorov</h1>
          <p>
            <Badge bg="secondary">Front-end Developer</Badge>
          </p>

          <div>
            <ul className="d-flex justify-content-center align-center">
              <li>
                <a href="https://www.instagram.com/m_shakhriyorov/" title="Mukhriddin on Intagram" target="_blank"><BsInstagram  /> Instagram</a>
              </li>
              <li>
                <a href="https://www.facebook.com/mukhriddin.shakhriyorov.3" title="Mukhriddin on Facebook" target="_blank"><BsFacebook  /> Facebook</a>
              </li>
              <li>
                <a href="https://t.me/Mookher_al_deen" title="Mukhriddin on Telegram" target="_blank"><BsTelegram  /> Telegram</a>
              </li>
              <li>
                <a href="https://github.com/mshakhriyorov" title="Mukhriddin on GitHub" target="_blank"><BsGithub  /> GitHub</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
