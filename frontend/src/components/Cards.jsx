import React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const artworks = [
  {
    id: 1,
    title: 'Equilibrium #3429',
    description: 'Promove equilíbrio e calma com luzes suaves.',
    price: '0.041 ETH',
    author: 'Jules Wyvern',
    image: '/static/images/cards/equilibrium3429.jpg',
  },
  {
    id: 2,
    title: 'Equilibrium #3430',
    description: 'Arte digital com tons cósmicos e profundidade.',
    price: '0.038 ETH',
    author: 'Luna Vortex',
    image: '/static/images/cards/equilibrium3430.jpg',
  },
  {
    id: 3,
    title: 'Equilibrium #3431',
    description: 'Cubos flutuantes em harmonia com o espaço.',
    price: '0.045 ETH',
    author: 'Nova Ether',
    image: '/static/images/cards/equilibrium3431.jpg',
  },
  {
    id: 4,
    title: 'Equilibrium #3432',
    description: 'Reflexos serenos em paisagens abstratas.',
    price: '0.040 ETH',
    author: 'Jules Wyvern',
    image: '/static/images/cards/equilibrium3432.jpg',
  },
  {
    id: 5,
    title: 'Equilibrium #3433',
    description: 'Geometria e luz em perfeita simetria.',
    price: '0.042 ETH',
    author: 'Orion Flux',
    image: '/static/images/cards/equilibrium3433.jpg',
  },
  {
    id: 6,
    title: 'Equilibrium #3434',
    description: 'Cores vibrantes em equilíbrio dimensional.',
    price: '0.039 ETH',
    author: 'Luna Vortex',
    image: '/static/images/cards/equilibrium3434.jpg',
  },
  {
    id: 7,
    title: 'Equilibrium #3435',
    description: 'Minimalismo com profundidade emocional.',
    price: '0.044 ETH',
    author: 'Nova Ether',
    image: '/static/images/cards/equilibrium3435.jpg',
  },
  {
    id: 8,
    title: 'Equilibrium #3436',
    description: 'Arte meditativa com tons frios e suaves.',
    price: '0.037 ETH',
    author: 'Jules Wyvern',
    image: '/static/images/cards/equilibrium3436.jpg',
  },
  {
    id: 9,
    title: 'Equilibrium #3437',
    description: 'Exploração visual do silêncio e da luz.',
    price: '0.046 ETH',
    author: 'Orion Flux',
    image: '/static/images/cards/equilibrium3437.jpg',
  },
  {
    id: 10,
    title: 'Equilibrium #3438',
    description: 'Fragmentos de equilíbrio em movimento.',
    price: '0.043 ETH',
    author: 'Luna Vortex',
    image: '/static/images/cards/equilibrium3438.jpg',
  },
  {
    id: 11,
    title: 'Equilibrium #3439',
    description: 'Cubos translúcidos em paisagens etéreas.',
    price: '0.036 ETH',
    author: 'Nova Ether',
    image: '/static/images/cards/equilibrium3439.jpg',
  },
  {
    id: 12,
    title: 'Equilibrium #3440',
    description: 'Luz e sombra em dança silenciosa.',
    price: '0.047 ETH',
    author: 'Jules Wyvern',
    image: '/static/images/cards/equilibrium3440.jpg',
  },
];

export default function Card() {
  return (
    <Box sx={{ padding: { xs: 2, sm: 4 } }}>
  <Grid 
    container 
    spacing={4} 
    justifyContent="center" 
    alignItems="stretch" // 🔹 garante que todos os itens fiquem alinhados
  >
    {artworks.map((art) => (
      <Grid item key={art.id} xs={12} sm={6} md={4} lg={3}>
        <MuiCard
          sx={{
            height: '100%', // 🔹 ocupa toda a altura disponível
            borderRadius: 3,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s',
            display: 'flex',
            flexDirection: 'column',
            '&:hover': {
              transform: 'scale(1.03)',
            },
          }}
        >
          <CardMedia
            component="img"
            height="250"
            image={art.image}
            alt={art.title}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent
            sx={{
              flexGrow: 1, // 🔹 força o conteúdo a crescer igualmente
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {art.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {art.description}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#00fff7' }}>
                {art.price}
              </Typography>
              <Typography variant="body2" sx={{ color: '#718096' }}>
                {art.author}
              </Typography>
            </Box>
          </CardContent>
        </MuiCard>
      </Grid>
    ))}
  </Grid>
</Box>

  );
}
