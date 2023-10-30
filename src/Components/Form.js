import React from "react";
import { setUser } from "../Redux/Slices/UserSLice";
import { Button, Col, Form, Input, Row, message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Form.css";

const App = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const history = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(setUser(values));
    form.resetFields();
    message.success("Usuario Creado con exito", 3);
    history("/quiz");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row
      gutter={8}
      style={{
        width: "100%",
        height: "50vh",
      }}
    >
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={24}
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Form
          form={form}
          className="form"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            className="forItem"
            size="large"
            label="Name"
            name="nombre"
            rules={[
              {
                required: true,
                message: "Please insert your name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="forItem"
            label="Last Name"
            name="apellido"
            rules={[
              {
                required: true,
                message: "Please insert your last name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="forItem"
            label="Email"
            name="correo"
            rules={[
              {
                required: true,
                message: "Please insert your last email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="forItem"
            label="Company Name"
            name="company"
            rules={[
              {
                required: true,
                message: "Please insert the company name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Go to the Quiz
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
export default App;
