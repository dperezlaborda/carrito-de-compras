import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../style/navbar.css';

const NavBar = ({spanNumber, total, clearAll}) => {

  return (
    <header>
      <Navbar className="d-flex justify-content-center">
        <div className="d-flex flex-direction-center">
          <FontAwesomeIcon icon={faShoppingCart} className="mt-2" />
          <span className="mr-4">{spanNumber}</span>
          <h4>SHOPPING FOOD</h4>
          <h4 className="ml-5">Importe total: ${total}</h4>
          <Button variant="secondary" className="ml-5" onClick={clearAll}>Reset</Button>
        </div>
      </Navbar>
    </header>
  )
}

export default NavBar;
