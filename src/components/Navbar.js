import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AccountCircle, ShoppingCart, Favorite, Logout } from '@mui/icons-material';
import { Button, Menu, MenuItem } from '@mui/material';

const Nav = styled.nav`
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #0f766e;
  font-size: 1.5rem;
  font-weight: 600;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #1e293b;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #0f766e;
  }
`;

const CartLink = styled(Link)`
  text-decoration: none;
  color: #1e293b;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #0f766e;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  min-width: 1.5rem;
  text-align: center;
`;

const Navbar = ({ cartCount, user, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          MediCare Plus
        </Logo>

        <NavLinks>
          <NavLink to="/medicines">Medicines</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/oem">OEM</NavLink>
          <CartLink to="/cart">
            <ShoppingCart />
            {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
          </CartLink>
          {user ? (
            <>
              <Button
                color="inherit"
                onClick={handleMenu}
                startIcon={<AccountCircle />}
              >
                {user.name}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={Link} to="/profile" onClick={handleClose}>
                  <AccountCircle style={{ marginRight: '0.5rem' }} />
                  Profile
                </MenuItem>
                <MenuItem component={Link} to="/wishlist" onClick={handleClose}>
                  <Favorite style={{ marginRight: '0.5rem' }} />
                  Wishlist
                </MenuItem>
                <MenuItem component={Link} to="/profile/orders" onClick={handleClose}>
                  <ShoppingCart style={{ marginRight: '0.5rem' }} />
                  Orders
                </MenuItem>
                <MenuItem onClick={() => {
                  handleClose();
                  onLogout();
                }}>
                  <Logout style={{ marginRight: '0.5rem' }} />
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/signin"
                variant="outlined"
                color="primary"
              >
                Sign In
              </Button>
              <Button
                component={Link}
                to="/signup"
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </>
          )}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 