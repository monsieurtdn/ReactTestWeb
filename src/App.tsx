import React, { useEffect } from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { Col,Row } from 'react-bootstrap';
import { useState } from 'react';
import Cart from './Cart/Cart';
import Shop from './Shop/Shop';
import MyProfile from './Profile/MyProfile';




function App() {


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
  const [showMenu, setShowMenu] = useState<boolean>(false);

const handleShowMenu = () => {
  setShowMenu(true);


};

const handleCloseMenu = () => {
  setShowMenu(false);


};

const handleDisplayMenu = () => {
  if (!showMenu) {
    handleShowMenu();
  } else {
    handleCloseMenu();
  }
};

 return (
    <div className="App">
      <Navbar className="bg-body-tertiary" id='head' expand="lg">
        
        <div className='header' >
          
            <Navbar.Brand className='header' >
              <img
              src="logo.jpg"
              width="100"
              height="100"
              className="logo"
              alt="Brand logo"
              />{' '}
              <p className='title'>Mobile Shopping</p>


            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='form-inline my-2 my-lg-0'>
          <img
              src="headIcon.jpg"
              width="100"
              height="100"
              className="icon"
              alt="Brand logo"
              />
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
      
    <Row className='body'>
    
      <Col  md={2} className='menu'  >
        <Row className='showlist' onClick={handleDisplayMenu}>&emsp;Menu</Row>
        <Row >
          <div className='option' onClick={handleShowShop} >
            <img
                  src="shop.jpg"
                  className="optionPhoto"
                  alt="shop"
                  />
              {showMenu && <div> <p>Shop</p></div>}
          </div>
        </Row>
        <Row >
          <div className='chosenOption' onClick={handleShowCart}>
            <img
                  src="chosen cart.jpg"
                  className="optionPhoto"
                  alt="cart"
                  />
             {showMenu && <div> <p>Cart</p></div>}
          </div>
        </Row>
        <Row >
          <div className='option' onClick={handleShowProfile}>
            <img
                  src="profile.jpg"
                  className="optionPhoto"
                  alt="profile"
                  />
             {showMenu && <div> <p>Profile</p></div>}
          </div>
        </Row>
        </Col>
      

    {showCart && <Cart/>}
    {showProfile && <MyProfile/>}
    {showShop && <Shop/>}

      
    </Row>
    
    </div>
  );
}

export default App;
