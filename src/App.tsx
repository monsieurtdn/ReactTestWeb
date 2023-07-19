import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import Cart from './Cart/Cart';
import Shop from './Shop/Shop';
import MyProfile from './Profile/MyProfile';
import {MenuOutlined} from '@ant-design/icons';
import { Layout, Space } from 'antd';
import { Button, Menu } from 'antd';



function App() {

  const headerStyle: React.CSSProperties = {
    position: 'sticky',
    alignItems: 'center',
    color: '#000',
    width: '100%',
    height: '100%',
    top: 0,
    zIndex: 1,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: 'rgba(200, 225, 255, 0.9)',
    display: 'flex',  
    overflow: 'hidden',
    
  };



  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#000',
    position: 'fixed',
    backgroundColor: '#fff',
    overflow: 'auto',
    height: '100vh',
    left: 0,
    top: 100,
    bottom: 0,
  };

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '	#FFFFFF',
    backgroundColor: '#fff',
  };



  const { Header, Footer, Sider, Content } = Layout;


  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    console.log(1)
  };

  const [showShop, setShowShop] = useState<boolean>(false);

  const handleCloseShop = () => {
    setShowShop(false)
  }

  const [showProfile, setShowProfile] = useState<boolean>(false);

  const handleCloseProfile = () => {
    setShowProfile(false)
  }

  const [showCart, setShowCart] = useState<boolean>(false);

  const handleCloseCart = () => {
    setShowCart(false)
  }

  const handleCloseAll = () => {
    handleCloseCart();
    handleCloseShop();
    handleCloseProfile();

  }

  const handleShowShop = () => {
    handleCloseAll();
    setShowShop(true);
  }

  const handleShowCart = () => {
    handleCloseAll();
    setShowCart(true)
  }

  const handleShowProfile = () => {
    handleCloseAll();
    setShowProfile(true)
  }

  function ShopIcon() {
    return (
      <img
        src="Shop.svg"
        width="30"
        height="30"
        className="optionPhoto"
        alt="Brand logo"
      />
    )
  }
  function CartIcon() {
    return (
      <img
        src="cart.svg"
        width="30"
        height="30"
        className="optionPhoto"
        alt="Brand logo"
      />
    )
  }
  function ProfileIcon() {
    return (
      <img
        src="profile.svg"
        width="30"
        height="30"
        className="optionPhoto"
        alt="Brand logo"
      />
    )
  }





  return (
    <div className="App">


      <Layout>

        <Header style={headerStyle}>

          <Navbar.Brand className='header' >

            <img
              src="Logo.svg"
              width="100"
              height="100"
              className="logo"
              alt="Brand logo"
              onClick={handleCloseAll}
            />{' '}
            <p className='title'>Mobile Shopping</p>

            <img
                src="icon.svg"
                width="100"
                height="100"
                className="icon"
                alt="Brand logo"
                onClick={handleShowProfile}
              />

          </Navbar.Brand>



        </Header>

        <Layout hasSider style={{backgroundColor: '#fff', width: '100%'}}>

          <Sider style={siderStyle}>
            <div>
          <Button onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed}Menu <MenuOutlined />
      </Button>
      
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={collapsed}>
              <Menu.Item key={1} icon={<ShopIcon />} onClick={handleShowShop}>Shop</Menu.Item>
              <Menu.Item key={2} icon={<CartIcon />} onClick={handleShowCart}>Cart</Menu.Item>
              <Menu.Item key={3} icon={<ProfileIcon />} onClick={handleShowProfile}>Profile</Menu.Item>
            </Menu>
            </div>
          </Sider>

          <Content style={{ margin: '0px 200px 0', overflow: 'initial', backgroundColor: '#fff', minWidth: '1200px' }}>              
            {showCart && <Cart />}
            {showProfile && <MyProfile />}
            {showShop && <Shop />}

            </Content>
            
            
        </Layout>

        <Footer style={footerStyle}>Footer</Footer>

      </Layout>





      <Row className='body'>

        <Col md={2} className='menu'  >

        </Col>





      </Row>

    </div>
  );
}

export default App;
