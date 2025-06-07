import React from 'react';
import styled from 'styled-components';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { Button } from '@mui/material';

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #1e293b;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const WishlistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const WishlistCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const MedicineImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  background: #f8fafc;
  padding: 1rem;
`;

const MedicineInfo = styled.div`
  padding: 1rem;
`;

const MedicineName = styled.h3`
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const MedicinePrice = styled.div`
  color: #0f766e;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const MedicineActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #64748b;
`;

const Wishlist = ({ user }) => {
  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

  if (!user) {
    return (
      <Container>
        <EmptyState>
          <Favorite style={{ fontSize: '3rem', marginBottom: '1rem' }} />
          <h2>Please sign in to view your wishlist</h2>
          <Button variant="contained" color="primary" href="/signin">
            Sign In
          </Button>
        </EmptyState>
      </Container>
    );
  }

  if (wishlist.length === 0) {
    return (
      <Container>
        <EmptyState>
          <Favorite style={{ fontSize: '3rem', marginBottom: '1rem' }} />
          <h2>Your Wishlist is Empty</h2>
          <p>Add items to your wishlist to see them here.</p>
          <Button variant="contained" color="primary" href="/medicines">
            Browse Medicines
          </Button>
        </EmptyState>
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        <Favorite /> My Wishlist
      </Title>
      <WishlistGrid>
        {wishlist.map(medicine => (
          <WishlistCard key={medicine.id}>
            <MedicineImage src={medicine.image} alt={medicine.name} />
            <MedicineInfo>
              <MedicineName>{medicine.name}</MedicineName>
              <MedicinePrice>₹{medicine.price}</MedicinePrice>
              <MedicineActions>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ShoppingCart />}
                  fullWidth
                >
                  Add to Cart
                </Button>
              </MedicineActions>
            </MedicineInfo>
          </WishlistCard>
        ))}
      </WishlistGrid>
    </Container>
  );
};

export default Wishlist; 