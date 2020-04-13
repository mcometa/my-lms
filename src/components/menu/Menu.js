import React from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';
import Navbar from 'react-bulma-components/lib/components/navbar';
import { Link } from 'react-router-dom';

const Menu = () => (
  <Navbar className="main-navbar has-shadow is-spaced">
    <Navbar.Brand>
      <Navbar.Item renderAs="a" href="/">
        <Heading size={4}>Basic LMS</Heading>
      </Navbar.Item>
      <Navbar.Burger />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Container position="end">
        <Navbar.Item renderAs={Link} to="/">
          Course Catalog
        </Navbar.Item>
        <Navbar.Item renderAs={Link} to="/my-courses">
          My Courses
        </Navbar.Item>
        <Navbar.Item renderAs="span">
          <Button renderAs={Link} to="/login">
            Sign in
          </Button>
        </Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
);

export default Menu;
