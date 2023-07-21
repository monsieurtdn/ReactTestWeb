import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Home.css';

import { useState } from 'react';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import MyProfile from '../Profile/MyProfile';
import { MenuOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import {  Menu } from 'antd';
const Home: React.FC = () => {
    const [isChosen, setIsChosen] = useState(true);
  const [menuLists, setMenuLists] = useState(["Shop","Cart","Profile"])
  const menuListsHide = () =>{setMenuLists(["","",""])}
  const menuListsFull = () => {setMenuLists(["Shop","Cart","Profile"])}

  const handleMenuList = () => {
    if(isChosen === false) {setIsChosen(true); menuListsFull();  console.log(isChosen) }
    else if(isChosen === true) { setIsChosen(false); menuListsHide(); console.log(isChosen) }
  }

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
    //lineHeight: '120px',
    color: '#000',
    position: 'fixed',
    backgroundColor: '#fff',
    overflow: 'auto',
    height: '100vh',
    left: 0,
    top: 100,
    bottom: 0,
    border: '1px solid #000'
  };

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '	#FFFFFF',
    backgroundColor: '#fff',
  };



  const { Header, Footer, Sider, Content } = Layout;


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

          <Navbar.Brand className='header' style={{lineHeight: '6px'}}>

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

        <Layout hasSider style={{ backgroundColor: '#fff', width: '100%' }}>

          <Sider style={siderStyle}>
            <div style={{ width: 256 }}>
              <Menu>
              <Menu.Item  onClick={handleMenuList} style={{ textAlign: 'left'}}>
                Menu<MenuOutlined style={{ marginLeft: '100px'}}/>
              </Menu.Item>
              </Menu>
              <Menu
                mode="inline"
                theme="light"
              >
                <Menu.Item key={1} icon={<ShopIcon />} onClick={handleShowShop}>{menuLists[0]}</Menu.Item>
                <Menu.Item key={2} icon={<CartIcon />} onClick={handleShowCart}>{menuLists[1]}</Menu.Item>
                <Menu.Item key={3} icon={<ProfileIcon />} onClick={handleShowProfile}>{menuLists[2]}</Menu.Item>
              </Menu>
            </div>
          </Sider>

          <Content style={{ margin: '0px 200px 0', overflow: 'initial', backgroundColor: '#fff', minWidth: '1200px' }}>
            <div style={{minHeight: '600px', maxHeight: '1500px', backgroundColor:'#fff'}}>
            {showCart && <Cart />}
            {showProfile && <MyProfile />}
            {showShop && <Shop />}  
            </div>
          </Content>


        </Layout>

 

      </Layout>






    </div>
  )
}
export default Home;