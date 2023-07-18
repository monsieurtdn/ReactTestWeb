import React, { useEffect } from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { Col,Row } from 'react-bootstrap';
import { useState } from 'react';
import Cart from './Cart/Cart';




function App() {


  const [showShop, setShowShop] = useState<boolean>(false);
  const handleShowShop = () => {
    setShowShop(true)
  }
  const handleCloseShop = () => {
    setShowShop(false)
  }

  const [showProfile, setShowProfile] = useState<boolean>(false);
  const handleShowProfile = () => {
    setShowShop(true)
  }
  const handleCloseProfile = () => {
    setShowShop(false)
  }

  const [showCart, setShowCart] = useState<boolean>(false);
  const handleShowCart = () => {
    setShowShop(true)
  }
  const handleCloseCart = () => {
    setShowShop(false)
  }

  const handleCloseAll = () => {
    handleCloseCart;
    handleCloseMenu;
    handleCloseProfile;
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
              src="icon.jpg"
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
          <div className='option'  >
            <img
                  src="shop.jpg"
                  className="optionPhoto"
                  alt="shop"
                  />
              {showMenu && <div> <p>Shop</p></div>}
          </div>
        </Row>
        <Row >
          <div className='chosenOption' ref = "cart" onClick={() => {handleCloseAll; handleShowCart;}}>
            <img
                  src="chosen cart.jpg"
                  className="optionPhoto"
                  alt="cart"
                  />
             {showMenu && <div> <p>Cart</p></div>}
          </div>
        </Row>
        <Row >
          <div className='option'>
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


      
    </Row>
    
    </div>
  );
}

export default App;
