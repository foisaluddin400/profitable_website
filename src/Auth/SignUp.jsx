import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Typography,
  Card,
  Row,
  Col,
  Divider,
  message,
  Select,
} from 'antd';
import { ArrowLeft } from 'lucide-react';
import loginImg from './login.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { countryData } from '../dummy-data/DummyData';
const { Title, Text } = Typography;

function SignUp() {
  const location = useLocation();
  const navigate = useNavigate();
  const [contactNo, setContactNo] = useState('');
  console.log(location?.state);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onFinish = (values) => {
    if (!values.email && !values.password) {
      message.destroy();
      message.error('Please enter email and password');
      return;
    }
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
    }
    localStorage.setItem('user', true);
    const user = localStorage.getItem('user');
    if (user) {
      message.destroy();
      message.success('Login successful');
      navigate('/plane');
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  return (
    <div className="relative flex items-center justify-center md:p-20 py-28">
      <div className="absolute w-full h-full flex">
        <div className="bg-[#1d4ed8] w-[30%] h-full"></div>
        <div className="bg-[#fff] w-[70%] h-full"></div>
      </div>
      <Row
        gutter={[16, 16]}
        className="w-full max-w-screen-2xl shadow-2xl mx-auto min-h-[600px]"
      >
        <Col className="hidden md:block relative" xs={0} md={12}>
          <div
            className="bg-cover bg-center bg-no-repeat rounded-l-sm absolute inset-0"
            style={{ backgroundImage: `url(${loginImg})` }}
          >
            <Button
              type="text"
              icon={<ArrowLeft size={20} />}
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                color: 'white',
                zIndex: 1,
              }}
            />
          </div>
        </Col>

        <Col xs={24} md={12}>
          <Card
            style={{
              height: '100%',
              border: 'none',
            }}
            bodyStyle={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: '100%', margin: '0 auto' }}>
              <Title
                level={2}
                style={{ marginBottom: '8px', color: '#1f2937' }}
              >
                Create Your Account
              </Title>

              <Form
                requiredMark={false}
                name="login"
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: 'Please input your name!' },
                  ]}
                >
                  <Input placeholder="John Doe" style={{ height: '48px' }} />
                </Form.Item>

                <Form.Item
                  label="Email address"
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' },
                  ]}
                >
                  <Input
                    placeholder="esfutui_sch@gmail.com"
                    style={{ height: '48px' }}
                  />
                </Form.Item>
                <Form.Item
                  label="Phone Number"
                  name="contactNo"
                  required
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your phone number!',
                    },
                  ]}
                >
                  <ReactPhoneInput
                    country={'us'}
                    value={contactNo}
                    onChange={(value) => setContactNo(value)}
                    inputStyle={{ width: '100%' }}
                  />
                </Form.Item>
                <Form.Item
                  label="Select Your Country "
                  name="country"
                  rules={[
                    { required: true, message: 'Please select your country!' },
                  ]}
                >
                  <Select
                    placeholder="Select your country"
                    style={{ height: '48px' }}
                    showSearch
                    allowClear
                  >
                    {countryData.map((country) => (
                      <Select.Option key={country.code} value={country.code}>
                        <div className="flex items-center gap-2">
                          <img src={country.flag} alt={country.name} />{' '}
                          {country.name}
                        </div>
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                  ]}
                >
                  <Input.Password
                    placeholder="••••••••"
                    style={{ height: '48px' }}
                    visibilityToggle={{
                      visible: passwordVisible,
                      onVisibleChange: setPasswordVisible,
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                  ]}
                >
                  <Input.Password
                    placeholder="••••••••"
                    style={{ height: '48px' }}
                    visibilityToggle={{
                      visible: passwordVisible,
                      onVisibleChange: setPasswordVisible,
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{
                      height: '48px',
                      background: '#3b82f6',
                      borderColor: '#3b82f6',
                      // borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 500,
                    }}
                  >
                    Sign Up
                  </Button>
                </Form.Item>
              </Form>

              <Divider style={{ margin: '24px 0' }}>
                <Text style={{ color: '#6b7280' }}>Or continue with</Text>
              </Divider>

              <Button
                block
                onClick={handleGoogleLogin}
                style={{
                  height: '48px',
                  // borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginBottom: '24px',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#4285f4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34a853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#fbbc05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#ea4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              <Text
                style={{
                  textAlign: 'center',
                  display: 'block',
                  color: '#6b7280',
                }}
              >
                Already have an account?{' '}
                <Link to="/auth/signUp">
                  <Button
                    type="link"
                    className="hover:underline"
                    style={{ color: '#3b82f6', padding: 0 }}
                  >
                    Sign In
                  </Button>
                </Link>
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default SignUp;
