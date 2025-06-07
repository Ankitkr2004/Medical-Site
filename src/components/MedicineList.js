import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search, ShoppingCart, Favorite, FavoriteBorder, Info } from '@mui/icons-material';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Chip } from '@mui/material';

const Container = styled.div`
  max-width: 1400px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 1rem;
`;

const Title = styled.h1`
  color: #0f766e;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2.5rem;
`;

const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const MedicineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const MedicineCard = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const MedicineImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  background: #f8fafc;
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
`;

const MedicineInfo = styled.div`
  padding: 1.5rem;
`;

const MedicineName = styled.h3`
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

const MedicineDescription = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const MedicinePrice = styled.div`
  color: #0f766e;
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const MedicineDetails = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const DetailChip = styled(Chip)`
  background: #f1f5f9;
  color: #475569;
`;

const MedicineActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const sampleMedicines = [
  // Pain Relief Category
  {
    id: 1,
    name: 'Paracetamol 500mg',
    price: 50,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Used for pain relief and fever reduction. Effective for headaches, muscle aches, and reducing fever.',
    category: 'Pain Relief',
    manufacturer: 'ABC Pharma',
    stock: 100,
    sideEffects: 'Rare side effects include allergic reactions, skin rash, and liver problems in high doses.',
    contraindications: 'Not recommended for patients with liver problems or those who consume alcohol regularly.'
  },
  {
    id: 2,
    name: 'Ibuprofen 400mg',
    price: 75,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Non-steroidal anti-inflammatory drug for pain relief and inflammation reduction.',
    category: 'Pain Relief',
    manufacturer: 'XYZ Pharma',
    stock: 85,
    sideEffects: 'May cause stomach upset, heartburn, and dizziness.',
    contraindications: 'Not recommended for patients with stomach ulcers or heart problems.'
  },
  {
    id: 3,
    name: 'Diclofenac 50mg',
    price: 65,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Used for arthritis pain and inflammation management.',
    category: 'Pain Relief',
    manufacturer: 'DEF Pharma',
    stock: 60,
    sideEffects: 'May cause stomach pain, nausea, and dizziness.',
    contraindications: 'Not recommended for patients with heart disease or high blood pressure.'
  },

  // Antibiotics Category
  {
    id: 4,
    name: 'Amoxicillin 250mg',
    price: 120,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Antibiotic used to treat bacterial infections. Effective against various bacterial infections.',
    category: 'Antibiotics',
    manufacturer: 'XYZ Pharma',
    stock: 75,
    sideEffects: 'May cause diarrhea, nausea, and allergic reactions.',
    contraindications: 'Not recommended for patients allergic to penicillin.'
  },
  {
    id: 5,
    name: 'Azithromycin 500mg',
    price: 150,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Broad-spectrum antibiotic for respiratory and skin infections.',
    category: 'Antibiotics',
    manufacturer: 'GHI Pharma',
    stock: 45,
    sideEffects: 'May cause stomach upset, diarrhea, and dizziness.',
    contraindications: 'Not recommended for patients with liver problems.'
  },
  {
    id: 6,
    name: 'Ciprofloxacin 500mg',
    price: 180,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Used to treat various bacterial infections including urinary tract infections.',
    category: 'Antibiotics',
    manufacturer: 'JKL Pharma',
    stock: 55,
    sideEffects: 'May cause nausea, diarrhea, and tendon problems.',
    contraindications: 'Not recommended for children and pregnant women.'
  },

  // Cardiovascular Category
  {
    id: 7,
    name: 'Atorvastatin 20mg',
    price: 150,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Used to lower cholesterol levels. Reduces risk of heart disease and stroke.',
    category: 'Cardiovascular',
    manufacturer: 'JKL Pharma',
    stock: 40,
    sideEffects: 'May cause muscle pain, weakness, and liver problems.',
    contraindications: 'Not recommended for patients with active liver disease.'
  },
  {
    id: 8,
    name: 'Amlodipine 5mg',
    price: 85,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Calcium channel blocker for high blood pressure and chest pain.',
    category: 'Cardiovascular',
    manufacturer: 'MNO Pharma',
    stock: 65,
    sideEffects: 'May cause swelling, dizziness, and flushing.',
    contraindications: 'Not recommended for patients with heart failure.'
  },
  {
    id: 9,
    name: 'Metoprolol 50mg',
    price: 95,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Beta blocker for high blood pressure and heart conditions.',
    category: 'Cardiovascular',
    manufacturer: 'PQR Pharma',
    stock: 50,
    sideEffects: 'May cause fatigue, dizziness, and cold hands/feet.',
    contraindications: 'Not recommended for patients with severe heart failure.'
  },

  // Diabetes Category
  {
    id: 10,
    name: 'Metformin 500mg',
    price: 95,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Used to treat type 2 diabetes. Helps control blood sugar levels.',
    category: 'Diabetes',
    manufacturer: 'GHI Pharma',
    stock: 60,
    sideEffects: 'May cause nausea, diarrhea, and vitamin B12 deficiency.',
    contraindications: 'Not recommended for patients with kidney problems.'
  },
  {
    id: 11,
    name: 'Glimepiride 2mg',
    price: 110,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Sulfonylurea for type 2 diabetes management.',
    category: 'Diabetes',
    manufacturer: 'STU Pharma',
    stock: 45,
    sideEffects: 'May cause low blood sugar, weight gain, and dizziness.',
    contraindications: 'Not recommended for type 1 diabetes patients.'
  },
  {
    id: 12,
    name: 'Sitagliptin 100mg',
    price: 180,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'DPP-4 inhibitor for type 2 diabetes treatment.',
    category: 'Diabetes',
    manufacturer: 'VWX Pharma',
    stock: 35,
    sideEffects: 'May cause upper respiratory infection and headache.',
    contraindications: 'Not recommended for patients with kidney problems.'
  },

  // Gastrointestinal Category
  {
    id: 13,
    name: 'Omeprazole 20mg',
    price: 85,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Used to treat acid reflux and stomach ulcers. Reduces stomach acid production.',
    category: 'Gastrointestinal',
    manufacturer: 'DEF Pharma',
    stock: 50,
    sideEffects: 'May cause headache, diarrhea, and abdominal pain.',
    contraindications: 'Not recommended for pregnant women.'
  },
  {
    id: 14,
    name: 'Pantoprazole 40mg',
    price: 95,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Proton pump inhibitor for acid-related disorders.',
    category: 'Gastrointestinal',
    manufacturer: 'YZA Pharma',
    stock: 55,
    sideEffects: 'May cause headache, diarrhea, and nausea.',
    contraindications: 'Not recommended for patients with liver problems.'
  },
  {
    id: 15,
    name: 'Domperidone 10mg',
    price: 65,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Used to treat nausea and vomiting.',
    category: 'Gastrointestinal',
    manufacturer: 'BCD Pharma',
    stock: 70,
    sideEffects: 'May cause dry mouth, headache, and dizziness.',
    contraindications: 'Not recommended for patients with heart problems.'
  },

  // Respiratory Category
  {
    id: 16,
    name: 'Salbutamol 100mcg',
    price: 120,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Bronchodilator for asthma and COPD management.',
    category: 'Respiratory',
    manufacturer: 'EFG Pharma',
    stock: 45,
    sideEffects: 'May cause tremors, headache, and increased heart rate.',
    contraindications: 'Not recommended for patients with heart problems.'
  },
  {
    id: 17,
    name: 'Montelukast 10mg',
    price: 150,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Used to prevent asthma attacks and treat seasonal allergies.',
    category: 'Respiratory',
    manufacturer: 'HIJ Pharma',
    stock: 40,
    sideEffects: 'May cause headache, stomach pain, and fatigue.',
    contraindications: 'Not recommended for patients with liver problems.'
  },
  {
    id: 18,
    name: 'Budesonide 200mcg',
    price: 180,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Inhaled corticosteroid for asthma control.',
    category: 'Respiratory',
    manufacturer: 'KLM Pharma',
    stock: 35,
    sideEffects: 'May cause throat irritation, hoarseness, and oral thrush.',
    contraindications: 'Not recommended for patients with active infections.'
  },

  // Dermatology Category
  {
    id: 19,
    name: 'Betamethasone 0.1%',
    price: 85,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Topical steroid for various skin conditions.',
    category: 'Dermatology',
    manufacturer: 'NOP Pharma',
    stock: 60,
    sideEffects: 'May cause skin thinning and discoloration.',
    contraindications: 'Not recommended for infected skin areas.'
  },
  {
    id: 20,
    name: 'Clotrimazole 1%',
    price: 65,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Antifungal cream for skin infections.',
    category: 'Dermatology',
    manufacturer: 'QRS Pharma',
    stock: 75,
    sideEffects: 'May cause skin irritation and burning sensation.',
    contraindications: 'Not recommended for deep fungal infections.'
  },
  {
    id: 21,
    name: 'Mupirocin 2%',
    price: 95,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Antibiotic ointment for skin infections.',
    category: 'Dermatology',
    manufacturer: 'TUV Pharma',
    stock: 50,
    sideEffects: 'May cause burning, stinging, and itching.',
    contraindications: 'Not recommended for large open wounds.'
  }
];

const MedicineList = ({ onAddToCart }) => {
  const [medicines] = useState(sampleMedicines);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const handleAddToWishlist = (medicine) => {
    const newWishlist = [...wishlist, medicine];
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  const handleRemoveFromWishlist = (medicineId) => {
    const newWishlist = wishlist.filter(item => item.id !== medicineId);
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  const handleOpenDialog = (medicine) => {
    setSelectedMedicine(medicine);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedMedicine(null);
  };

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (medicine.description && medicine.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(medicines.map(medicine => medicine.category))];

  return (
    <Container>
      <Title>Our Medicines</Title>
      <Filters>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search medicines..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: <Search style={{ color: '#64748b', marginRight: '0.5rem' }} />,
          }}
        />
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            label="Category"
          >
            <MenuItem value="">All Categories</MenuItem>
            {categories.map(category => (
              <MenuItem key={category} value={category}>{category}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Filters>

      <MedicineGrid>
        {filteredMedicines.map(medicine => (
          <MedicineCard key={medicine.id}>
            <MedicineImage src={medicine.image} alt={medicine.name} />
            <MedicineInfo>
              <MedicineName>{medicine.name}</MedicineName>
              <MedicineDescription>{medicine.description}</MedicineDescription>
              <MedicineDetails>
                <DetailChip label={medicine.category} size="small" />
                <DetailChip label={`Stock: ${medicine.stock}`} size="small" />
              </MedicineDetails>
              <MedicinePrice>₹{medicine.price}</MedicinePrice>
              <MedicineActions>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ShoppingCart />}
                  onClick={() => onAddToCart(medicine)}
                  fullWidth
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleOpenDialog(medicine)}
                >
                  <Info />
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    if (wishlist.some(item => item.id === medicine.id)) {
                      handleRemoveFromWishlist(medicine.id);
                    } else {
                      handleAddToWishlist(medicine);
                    }
                  }}
                >
                  {wishlist.some(item => item.id === medicine.id) ? (
                    <Favorite color="primary" />
                  ) : (
                    <FavoriteBorder />
                  )}
                </Button>
              </MedicineActions>
            </MedicineInfo>
          </MedicineCard>
        ))}
      </MedicineGrid>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        {selectedMedicine && (
          <>
            <DialogTitle>
              <Typography variant="h5" component="div">
                {selectedMedicine.name}
              </Typography>
            </DialogTitle>
            <DialogContent>
              <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
                <img
                  src={selectedMedicine.image}
                  alt={selectedMedicine.name}
                  style={{ width: '200px', height: '200px', objectFit: 'contain' }}
                />
                <div>
                  <Typography variant="h6" gutterBottom>
                    Description
                  </Typography>
                  <Typography paragraph>
                    {selectedMedicine.description}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Manufacturer
                  </Typography>
                  <Typography paragraph>
                    {selectedMedicine.manufacturer}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Side Effects
                  </Typography>
                  <Typography paragraph>
                    {selectedMedicine.sideEffects}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Contraindications
                  </Typography>
                  <Typography paragraph>
                    {selectedMedicine.contraindications}
                  </Typography>
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ShoppingCart />}
                onClick={() => {
                  onAddToCart(selectedMedicine);
                  handleCloseDialog();
                }}
              >
                Add to Cart
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default MedicineList; 