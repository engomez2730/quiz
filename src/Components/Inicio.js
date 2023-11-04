import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import "./Inicio.css";

function MyResponsiveTypography() {
  return (
    <Row gutter={8} style={{ width: "100%", height: "50vh" }}>
      <Col xs={24} sm={24} md={24} lg={24} className="centerColumContent">
        <div className="title">S & H Management Consultans</div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} className="centerColumContent">
        <div className="content">
          Welcome to our security assessment questionnaire. The response
          provided will help us to customize the recommendations for enhancing
          the security environment in your organization.
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} className="centerColumContent">
        <img src="logo.png" alt="imagen" className="imagen" />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} className="centerColumContent">
        <Link to="/form">
          <Button type="primary" size="large">
            Empezar Quiz
          </Button>
        </Link>
      </Col>
    </Row>
  );
}

export default MyResponsiveTypography;
