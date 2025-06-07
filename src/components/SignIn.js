import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Email, Lock, Login } from '@mui/icons-material';
import { Button, TextField, Alert } from '@mui/material';

const Container = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #1e293b;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const SignUpLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: #64748b;

  a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignIn = ({ onSignIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // For demo purposes, accept any email/password
    const userData = {
      id: Date.now(),
      name: email.split('@')[0],
      email: email
    };

    onSignIn(userData);
    navigate('/');
  };

  return (
    <Container>
      <Title>
        <Login /> Sign In
      </Title>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: <Email />
          }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: <Lock />
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Sign In
        </Button>
      </Form>
      <SignUpLink>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </SignUpLink>
    </Container>
  );
};

export default SignIn; 