import React, { useState } from 'react';
import styled from 'styled-components';
import { Delete, Add, Remove, ShoppingCart, LocalShipping } from '@mui/icons-material';
import { Button, Dialog, DialogTitle, DialogContent, TextField, Snackbar, Alert } from '@mui/material';

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

const CartItems = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const CartItem = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  background: #f8fafc;
  border-radius: 4px;
  padding: 0.5rem;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  color: #1e293b;
  margin: 0 0 0.5rem 0;
`;

const ItemPrice = styled.div`
  color: #2563eb;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityButton = styled(Button)`
  min-width: 32px;
  padding: 4px;
`;

const Quantity = styled.span`
  font-weight: 500;
  min-width: 40px;
  text-align: center;
`;

const RemoveButton = styled(Button)`
  color: #ef4444;
  &:hover {
    background-color: #fee2e2;
  }
`;

const CartSummary = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #64748b;
`;

const TotalRow = styled(SummaryRow)`
  color: #1e293b;
  font-weight: 500;
  font-size: 1.25rem;
  border-top: 1px solid #e2e8f0;
  padding-top: 1rem;
  margin-top: 1rem;
`;

const CheckoutButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem;
  color: #64748b;
`;

const Cart = ({ cart, onRemoveFromCart, onUpdateQuantity, user }) => {
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    address: '',
    phone: ''
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [error, setError] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleCheckoutClick = () => {
    if (!user) {
      setError('Please sign in to checkout');
      return;
    }
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setError('');
  };

  const handleConfirmOrder = () => {
    if (!deliveryDetails.name || !deliveryDetails.address || !deliveryDetails.phone) {
      setError('Please fill in all delivery details');
      return;
    }

    // Create order
    const order = {
      id: Date.now(),
      date: new Date().toISOString(),
      items: cart,
      total: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
      status: 'Processing',
      deliveryDetails
    };

    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear cart
    localStorage.removeItem('cart');
    onRemoveFromCart('all');

    // Close dialog and show success message
    setIsDialogOpen(false);
    setShowSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  if (cart.length === 0) {
    return (
      <Container>
        <EmptyCart>
          <ShoppingCart style={{ fontSize: '3rem', marginBottom: '1rem' }} />
          <h2>Your Cart is Empty</h2>
          <p>Add some medicines to your cart to continue shopping.</p>
          <Button variant="contained" color="primary" href="/medicines">
            Browse Medicines
          </Button>
        </EmptyCart>
      </Container>
    );
  }

  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 50;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  return (
    <Container>
      <Title>
        <ShoppingCart /> Shopping Cart
      </Title>
      <CartItems>
        {cart.map(item => (
          <CartItem key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>₹{item.price}</ItemPrice>
              <QuantityControls>
                <QuantityButton
                  variant="outlined"
                  size="small"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                >
                  <Remove />
                </QuantityButton>
                <Quantity>{item.quantity}</Quantity>
                <QuantityButton
                  variant="outlined"
                  size="small"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                >
                  <Add />
                </QuantityButton>
              </QuantityControls>
            </ItemDetails>
            <RemoveButton
              variant="text"
              startIcon={<Delete />}
              onClick={() => onRemoveFromCart(item.id)}
            >
              Remove
            </RemoveButton>
          </CartItem>
        ))}
      </CartItems>
      <CartSummary>
        <SummaryRow>
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </SummaryRow>
        <SummaryRow>
          <span>Shipping</span>
          <span>₹{shipping}</span>
        </SummaryRow>
        <SummaryRow>
          <span>Tax (18%)</span>
          <span>₹{tax}</span>
        </SummaryRow>
        <TotalRow>
          <span>Total</span>
          <span>₹{total}</span>
        </TotalRow>
        <CheckoutButton
          variant="contained"
          color="primary"
          startIcon={<LocalShipping />}
          onClick={handleCheckoutClick}
        >
          Proceed to Checkout
        </CheckoutButton>
      </CartSummary>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Delivery Details</DialogTitle>
        <DialogContent>
          {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
          <TextField
            fullWidth
            label="Full Name"
            value={deliveryDetails.name}
            onChange={(e) => setDeliveryDetails({ ...deliveryDetails, name: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Delivery Address"
            value={deliveryDetails.address}
            onChange={(e) => setDeliveryDetails({ ...deliveryDetails, address: e.target.value })}
            margin="normal"
            multiline
            rows={3}
          />
          <TextField
            fullWidth
            label="Phone Number"
            value={deliveryDetails.phone}
            onChange={(e) => setDeliveryDetails({ ...deliveryDetails, phone: e.target.value })}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirmOrder}
            fullWidth
            sx={{ mt: 2 }}
          >
            Place Order
          </Button>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success"
          variant="filled"
          sx={{ 
            width: '100%',
            backgroundColor: '#4CAF50',
            '& .MuiAlert-icon': {
              color: 'white'
            }
          }}
        >
          🎉 Your order has been placed successfully! Thank you for shopping with us.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Cart; 