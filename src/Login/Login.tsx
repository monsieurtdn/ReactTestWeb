import React, { useState } from 'react';
import logo from './logo.svg';
import '../Login/Login.css';
import { Button, Checkbox, Form, Input } from 'antd';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Home from '../Home/Home';
import Icon, { LockOutlined, UserOutlined } from '@ant-design/icons';
function Login() {

    const [showLogin, setShowLogin] = useState<boolean>(true);
  
    const [showHome, setShowHome] = useState<boolean>(false)
    const handleShowHome = () => {
      setShowLogin(false);
      setShowHome(true)
    }
  
   
    const onFinish = (values: any) => {
      console.log('Success:', values);
      handleShowHome();
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
  
  
  
  
    const UserIcon = (props: Partial<CustomIconComponentProps>) => (
      <Icon component={() => (<img src="user icon.svg" alt='icon' />)} {...props} />
    );
    const PasswordIcon = (props: Partial<CustomIconComponentProps>) => (
      <Icon component={() => (<img src="lock icon.svg" alt='icon' />)} {...props} />
    );
    return (
  
      <> { showLogin &&
      <div style={{ display: 'grid', justifyContent: 'center', backgroundColor:'#0093E9'}}>
  
        <img
          src="Logo2.png"
          width="150"
          height="150"
          className="icon"
          alt="Brand logo"
          style={{ paddingLeft: '35%', paddingTop: '25px', paddingBottom: '40px', boxSizing:'unset' }}
        />
  
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
            style={{ paddingLeft: '20px' }}
          >
            <Input prefix={<UserIcon className="site-form-item-icon" />} placeholder="Tên đăng nhập" style={{ maxWidth: '400px', justifyContent: 'center' }} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
            style={{ paddingLeft: '20px' }}
          >
            <Input.Password
              prefix={<PasswordIcon className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
              style={{ maxWidth: '400px' }}
            />
          </Form.Item>
          <Form.Item style={{ paddingTop: '40px' }}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{ color: '#fff', paddingLeft: '20px' }}>Lưu đăng nhập</Checkbox>
            </Form.Item>
  
            <a className="login-form-forgot" href="" style={{ color: '#fff', marginLeft: '160px' }}>
              Bạn quên mật khẩu?
            </a>
          </Form.Item>
  
          <Form.Item style={{ paddingLeft: '50px' }}>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ border: '1px solid #fff', maxWidth: '350px' }}>
              Đăng nhập
            </Button >
  
          </Form.Item>
        </Form>
        <span style={{color: '#fff', opacity: '50%', width: '375px', fontSize: '10px', display:'grid',paddingTop:'50px', textAlign: 'center', paddingLeft: '40px'}}>
        <p>Nếu bạn có thắc mắc hay cần giải đáp, vui lòng liên hệ số điện thoại: 19001000</p>
        
        <p>Bản quyền thuộc về AnyBim</p>
        </span>
      </div>
  }
      {!showLogin && <Home/>}
  
      </>
    );
  }
  
  
export default Login;
