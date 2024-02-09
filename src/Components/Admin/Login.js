import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import "./Login.css";

const Login = (props) => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/questions/login",
        {
          correo: values.correo,
          password: values.password,
        }
      );

      if (response.data.status === "Success") {
        message.success("Logeado con exito", 3);
      }

      navigate("/admin");
    } catch (err) {
      message.error("Error desconocido, intente mas tarde", 2);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="login">
        <div className="FormContent">
          <h1 className="heading">Login</h1>
          <Form
            className="Form"
            size="large"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Correo"
              name="correo"
              rules={[
                {
                  required: true,
                  message: "Por favor introduce tu correo",
                },
                {
                  type: "email",
                  message: "Introduce un verdadero correo",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Por favor introduce tu contraseña",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Entrar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
