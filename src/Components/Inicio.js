import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import "./Inicio.css";

function MyResponsiveTypography() {
  return (
    <Row gutter={8} style={{ width: "100%", height: "65vh" }}>
      <Col xs={24} sm={24} md={24} lg={24} className="centerColumContent">
        <div className="title">S & H Management Consultants</div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} className="centerColumContent">
        <div className="content">
          Welcome to our security assessment questionnaire. The response
          provided will help us to customize the recommendations for enhancing
          the security environment in your organization.
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} className="centerColumContent">
        <img
          src="logo.png"
          alt="imagen"
          className="imagen"
          style={{ marginRight: "10px" }}
        />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} className="centerColumContent">
        <Link to="/form">
          <Button
            type="primary"
            size="large"
            style={{ marginTop: "90px", background: "#fff", color: "blue" }}
          >
            Start Assessment
          </Button>
        </Link>
      </Col>
    </Row>
  );
}

export default MyResponsiveTypography;
