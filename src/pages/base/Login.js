import React, { useState } from "react";
import { Form, Button, Checkbox, Row, Col, Image, Divider } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined,
  AppleOutlined,
} from "@ant-design/icons";
import { Desktop } from "../../utils/MediaQuery";
import { BrowserRouter as Router, Link } from "react-router-dom";
import PropTypes from "prop-types";
import NuTri from "../../public/assets/NuTri.png";

const loginUser = async (credentials) => {
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Login = ({ setToken }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isPasswordActive, setIsPasswordActive] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);

    if (value !== "") setIsEmailActive(true);
    else setIsEmailActive(false);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);

    if (value !== "") setIsPasswordActive(true);
    else setIsPasswordActive(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
  };

  return (
    <div className="max-height login-background">
      <Row type="flex" className="max-height">
        <Desktop>
          <Col span={12}></Col>
        </Desktop>
        <Col span={12} className="max-height right-container">
          <div className="login-form-container">
            <div className="login-title-container">
              <Image
                width={375}
                src={NuTri}
                className="logo-title"
                preview={false}
              />
            </div>
            <Divider orientation="center" style={{ padding: "0 15%" }}>
              Login
            </Divider>
            <Form
              {...layout}
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              onSubmit={handleSubmit}
              requiredMark={false}
            >
              <div className="float-container">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                />
                <label
                  className={isEmailActive ? "active" : ""}
                  htmlFor="email"
                >
                  Email
                </label>
              </div>

              <div className="float-container">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
                <label
                  className={isPasswordActive ? "active" : ""}
                  htmlFor="password"
                >
                  Password
                </label>
              </div>

              <Form.Item
                valuePropName="checked"
                className="remember-register-container"
              >
                <div className="remember-me-container">
                  <Checkbox>Remember me</Checkbox>
                </div>
                <div className="register-container">
                  Don’t have an account?&nbsp;&nbsp;
                  <Router>
                    <Link to="/">Sign up</Link>
                  </Router>
                </div>
              </Form.Item>

              <Form.Item className="login-btn-container">
                <Button type="primary" htmlType="submit" className="login-btn">
                  Login
                </Button>
              </Form.Item>
              <Divider orientation="center" style={{ padding: "0 15%" }}>
                Other Login Method
              </Divider>
              <div className="oAuth-icons">
                <Router>
                  <Link to="/">
                    <GoogleOutlined style={{ color: "#EA4335" }} />
                  </Link>
                  <Link to="/">
                    <FacebookOutlined style={{ color: "#3b5998" }} />
                  </Link>
                  <Link to="/">
                    <AppleOutlined style={{ color: "#a2aaad" }} />
                  </Link>
                </Router>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
