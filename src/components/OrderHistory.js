import React from 'react';
import styled from 'styled-components';
import { History, ShoppingBag, CheckCircle, Cancel } from '@mui/icons-material';
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

const OrderGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const OrderCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
`;

const OrderId = styled.div`
  color: #64748b;
  font-size: 0.875rem;
`;

const OrderDate = styled.div`
  color: #64748b;
  font-size: 0.875rem;
`;

const OrderStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${props => {
    switch (props.status) {
      case 'Delivered':
        return '#dcfce7';
      case 'Processing':
        return '#dbeafe';
      case 'Cancelled':
        return '#fee2e2';
      default:
        return '#f1f5f9';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'Delivered':
        return '#166534';
      case 'Processing':
        return '#1e40af';
      case 'Cancelled':
        return '#991b1b';
      default:
        return '#475569';
    }
  }};
`;

const OrderItems = styled.div`
  margin-bottom: 1rem;
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e2e8f0;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  background: #f8fafc;
  border-radius: 4px;
  padding: 0.25rem;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.div`
  color: #1e293b;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const ItemPrice = styled.div`
  color: #64748b;
  font-size: 0.875rem;
`;

const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
  font-weight: 500;
`;

const DeliveryDetails = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
  color: #64748b;
  font-size: 0.875rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #64748b;
`;

const OrderHistory = ({ user }) => {
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');

  if (!user) {
    return (
      <Container>
        <EmptyState>
          <History style={{ fontSize: '3rem', marginBottom: '1rem' }} />
          <h2>Please sign in to view your order history</h2>
          <Button variant="contained" color="primary" href="/signin">
            Sign In
          </Button>
        </EmptyState>
      </Container>
    );
  }

  if (orders.length === 0) {
    return (
      <Container>
        <EmptyState>
          <ShoppingBag style={{ fontSize: '3rem', marginBottom: '1rem' }} />
          <h2>No Orders Yet</h2>
          <p>Start shopping to see your orders here.</p>
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
        <History /> Order History
      </Title>
      <OrderGrid>
        {orders.map(order => (
          <OrderCard key={order.id}>
            <OrderHeader>
              <OrderId>Order #{order.id}</OrderId>
              <OrderDate>
                {new Date(order.date).toLocaleDateString()}
              </OrderDate>
              <OrderStatus status={order.status}>
                {order.status === 'Delivered' && <CheckCircle />}
                {order.status === 'Processing' && <ShoppingBag />}
                {order.status === 'Cancelled' && <Cancel />}
                {order.status}
              </OrderStatus>
            </OrderHeader>
            <OrderItems>
              {order.items.map(item => (
                <OrderItem key={item.id}>
                  <ItemImage src={item.image} alt={item.name} />
                  <ItemDetails>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>
                      ₹{item.price} x {item.quantity}
                    </ItemPrice>
                  </ItemDetails>
                </OrderItem>
              ))}
            </OrderItems>
            <OrderTotal>
              <span>Total</span>
              <span>₹{order.total}</span>
            </OrderTotal>
            <DeliveryDetails>
              <div><strong>Delivery Address:</strong> {order.deliveryDetails.address}</div>
              <div><strong>Phone:</strong> {order.deliveryDetails.phone}</div>
            </DeliveryDetails>
          </OrderCard>
        ))}
      </OrderGrid>
    </Container>
  );
};

export default OrderHistory; 