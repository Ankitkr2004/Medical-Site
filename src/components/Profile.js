import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AccountCircle, History, Favorite, Logout } from '@mui/icons-material';
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

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProfileInfo = styled.div`
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  margin-bottom: 1rem;
  color: #64748b;
`;

const InfoLabel = styled.div`
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 0.25rem;
`;

const ProfileLinks = styled.div`
  display: grid;
  gap: 1rem;
`;

const ProfileLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #1e293b;
  transition: background-color 0.2s;

  &:hover {
    background: #f1f5f9;
  }
`;

const Profile = ({ user, onLogout }) => {
  if (!user) {
    return (
      <Container>
        <ProfileCard>
          <Title>Please Sign In</Title>
          <p>You need to sign in to view your profile.</p>
          <Button
            component={Link}
            to="/signin"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Sign In
          </Button>
        </ProfileCard>
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        <AccountCircle /> My Profile
      </Title>
      <ProfileGrid>
        <ProfileCard>
          <ProfileInfo>
            <InfoItem>
              <InfoLabel>Name</InfoLabel>
              <div>{user.name}</div>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Email</InfoLabel>
              <div>{user.email}</div>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Phone</InfoLabel>
              <div>{user.phone || 'Not provided'}</div>
            </InfoItem>
          </ProfileInfo>
          <Button
            variant="outlined"
            color="error"
            startIcon={<Logout />}
            onClick={onLogout}
            fullWidth
          >
            Logout
          </Button>
        </ProfileCard>

        <ProfileCard>
          <Title>Quick Links</Title>
          <ProfileLinks>
            <ProfileLink to="/profile/orders">
              <History />
              Order History
            </ProfileLink>
            <ProfileLink to="/wishlist">
              <Favorite />
              Wishlist
            </ProfileLink>
          </ProfileLinks>
        </ProfileCard>
      </ProfileGrid>
    </Container>
  );
};

export default Profile; 