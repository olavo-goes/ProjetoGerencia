import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const artworks = [
  { id: 1, title: 'Altair', image: 'images/Altair.png', description: 'Altair Ibn-La’Ahad, Mestre Assassino da Ordem Levantina, conhecido por recuperar a honra da Irmandade.' },
  { id: 2, title: 'Kassandra', image: 'images/Kassandra.png', description: 'Kassandra, mercenária espartana descendente de Leônidas, vive a Odisseia durante a Guerra do Peloponeso.' },
  { id: 3, title: 'Ezio', image: 'images/Ezio.png', description: 'Ezio Auditore da Firenze, o Assassino mais icônico, liderou a Irmandade e expandiu sua influência.' },
  { id: 4, title: 'Randvi', image: 'images/Randvi.png', description: 'Randvi, braço direito de Eivor em Ravensthorpe, estratégica e leal, tem papel vital na colônia viking.' },
  { id: 5, title: 'Eivor', image: 'images/Eivor.png', description: 'Eivor Varinsdottir, guerreira viking determinada, lidera sua tribo rumo a novas terras na Inglaterra.' },
  { id: 6, title: 'Edward Kenway', image: 'images/Edward Kenway.png', description: 'Edward Kenway, pirata carismático e Assassino relutante, navegou pelo Caribe na Era Dourada da Pirataria.' },
  { id: 7, title: 'Bayek', image: 'images/Bayek.png', description: 'Bayek de Siuá, último Medjay, fundador da Ordem dos Assassinos, lutou por justiça no Egito Antigo.' },
  { id: 8, title: 'Connor Kenway', image: 'images/Connor Kenway.png', description: 'Connor Kenway, nascido Ratonhnhaké:ton, protegeu sua tribo e lutou pela liberdade na Revolução Americana.' },
  { id: 9, title: 'Shay Cormac', image: 'images/Shay Cormac.png', description: 'Shay Patrick Cormac, ex-Assassino, se voltou contra sua Irmandade e se tornou Templário implacável.' },
  { id: 10, title: 'Arno Dorian', image: 'images/Arno Dorian.png', description: 'Arno Dorian, órfão criado pela Ordem, viveu a Revolução Francesa tentando expiar suas falhas.' },
  { id: 11, title: 'Evie Frye', image: 'images/Evie Frye.png', description: 'Evie Frye, mestra da furtividade, atuou nas sombras em Londres ao lado de seu irmão Jacob.' },
  { id: 12, title: 'Basim Ibn Ishaq', image: 'images/Basim Ibn Ishaq.png', description: 'Basim, astuto Mestre Assassino em Bagdá, esconde segredos que ligam seu destino ao dos Isu.' },
];

const getAnimationType = (id) => {
  const animations = ['flip-left', 'flip-right', 'zoom-in', 'zoom-out', 'fade-up', 'fade-down'];
  return animations[id % animations.length];
};

const getTimeIcon = (id) => {
  const icons = [<WbSunnyIcon />, <CloudIcon />, <NightsStayIcon />, <AccessTimeIcon />];
  return icons[id % icons.length];
};

export default function Card() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <Box sx={{ padding: { xs: 2, sm: 4 } }}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="stretch"
      >
        {artworks.map((art) => (
          <Grid item key={art.id} xs={12} sm={6} md={4} lg={3}>
            <MuiCard
              data-aos={getAnimationType(art.id)}
              data-aos-delay={art.id * 100}
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              sx={{
                height: 500,
                width: 320,
                borderRadius: 2,
                backgroundColor: '#b3c8daff',
                border: '8px solid #899aa8ff',
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
                height="300"
                width="200"
                image={art.image}
                alt={art.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  overflow: 'hidden',
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {art.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    color: '#000000ff',
                    fontFamily: 'arial',
                  }}
                >
                  {art.description}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', color: '#555' }}>
                  {getTimeIcon(art.id)}
                </Box>
              </CardContent>
            </MuiCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}