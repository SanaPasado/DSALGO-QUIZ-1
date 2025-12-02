import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <header>
   <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
    <Nav.Link>
        <link to ="/">Home</link>
        <link to ="/about">About</link>
        <link to ="/contact">Contact</link>
        <link to ="/custom-orders">Custom Orders</link>
        <link to ="/cart">Cart</link>     
    </Nav.Link>
   </Navbar>
    </header>
  );
}

export default Header;
