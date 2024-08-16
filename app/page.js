import React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Grow,
  Slide,
} from '@mui/material';
import { People, FlashOn, School } from '@mui/icons-material';

const HomePage = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Lines Animation */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(to bottom, #ffffff11, #ffffff11)',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '200%',
            height: '200%',
            background: 'repeating-linear-gradient(to right, transparent, transparent 10px, rgba(255, 255, 255, 0.1) 10px, rgba(255, 255, 255, 0.1) 20px)',
            animation: 'moveBg 15s linear infinite',
          },
        }}
      />

      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 2rem',
          zIndex: 2,
          position: 'relative',
          backgroundImage: 'linear-gradient(to bottom, #264e38 0%, #4a7a5c 50%, #73a379 100%)',
        }}
      >
        <Grow in timeout={1000}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              color: '#ffffff',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            FlashBite
          </Typography>
        </Grow>
        <Grow in timeout={1500}>
          <Typography variant="h6" sx={{ margin: '1rem 0', color: '#ffffff' }}>
            Cooking just got a whole lot quicker!
          </Typography>
        </Grow>
        <Grow in timeout={2000}>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#689f63',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: '#88b67a',
              },
            }}
          >
            Sign in
          </Button>
        </Grow>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          padding: '4rem 2rem',
          zIndex: 2,
          position: 'relative',
          backgroundImage: 'linear-gradient(135deg, #4a7a5c 0%, #73a379 100%)',
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '2rem',
            }}
          >
            Why FlashBite?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Slide direction="up" in timeout={500}>
                <Card
                  sx={{
                    textAlign: 'center',
                    backgroundColor: 'rgba(110, 142, 99, 0.9)', // Slightly transparent green
                    backgroundImage: 'linear-gradient(135deg, rgba(110, 142, 99, 0.9) 0%, rgba(136, 182, 122, 0.9) 100%)',
                  }}
                >
                  <CardContent>
                    <FlashOn sx={{ fontSize: 40, color: '#44694b' }} />
                    <Typography variant="h6" sx={{ margin: '1rem 0' }}>
                      Interactive Flashcards
                    </Typography>
                    <Typography>
                      Make recipes through guided steps that adapt to your cooking speed.
                    </Typography>
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
            <Grid item xs={12} md={4}>
              <Slide direction="up" in timeout={700}>
                <Card
                  sx={{
                    textAlign: 'center',
                    backgroundColor: 'rgba(136, 182, 122, 0.9)', // Slightly transparent green
                    backgroundImage: 'linear-gradient(135deg, rgba(136, 182, 122, 0.9) 0%, rgba(162, 207, 149, 0.9) 100%)',
                  }}
                >
                  <CardContent>
                    <School sx={{ fontSize: 40, color: '#5a834d' }} />
                    <Typography variant="h6" sx={{ margin: '1rem 0' }}>
                      AI-Powered Recipes
                    </Typography>
                    <Typography>
                      Personalized flashcards based on your Ingredients, helping you master new recipes.
                    </Typography>
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
            <Grid item xs={12} md={4}>
              <Slide direction="up" in timeout={900}>
                <Card
                  sx={{
                    textAlign: 'center',
                    backgroundColor: 'rgba(162, 207, 149, 0.9)', // Slightly transparent green
                    backgroundImage: 'linear-gradient(135deg, rgba(162, 207, 149, 0.9) 0%, rgba(185, 216, 165, 0.9) 100%)',
                  }}
                >
                  <CardContent>
                    <People sx={{ fontSize: 40, color: '#6e8e63' }} />
                    <Typography variant="h6" sx={{ margin: '1rem 0' }}>
                      Progress Tracking
                    </Typography>
                    <Typography>
                      Visualize your cooking journey with clear instructions.
                    </Typography>
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box
        sx={{
          padding: '4rem 2rem',
          zIndex: 2,
          position: 'relative',
          backgroundImage: 'linear-gradient(to bottom, #4a7a5c 0%, #73a379 100%)',
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '2rem',
            }}
          >
            How It Works
          </Typography>
          <Grid container spacing={4} alignItems="stretch" style={{ display: 'flex' }}>
            <Grid item xs={12} md={4} style={{ display: 'flex' }}>
              <Card sx={{
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                backgroundImage: 'linear-gradient(135deg, rgba(110, 142, 99, 0.9) 0%, rgba(136, 182, 122, 0.9) 100%)',
              }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ margin: '1rem 0', color: '#000' }}>1. Sign Up for Free</Typography>
                  <Typography sx={{ color: '#000' }}>
                    Create an account to access a variety of food Items.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} style={{ display: 'flex' }}>
              <Card sx={{
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                backgroundImage: 'linear-gradient(135deg, rgba(136, 182, 122, 0.9) 0%, rgba(162, 207, 149, 0.9) 100%)',
              }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ margin: '1rem 0', color: '#000' }}>2. Choose Recipes</Typography>
                  <Typography sx={{ color: '#000' }}>
                    Select the recipes you want to master.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} style={{ display: 'flex' }}>
              <Card sx={{
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                backgroundImage: 'linear-gradient(135deg, rgba(162, 207, 149, 0.9) 0%, rgba(185, 216, 165, 0.9) 100%)',
              }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ margin: '1rem 0', color: '#000' }}>3. Start Practicing</Typography>
                  <Typography sx={{ color: '#000' }}>
                    Use flashcards and track your cooking progress.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          padding: '2rem 0',
          backgroundColor: '#264e38',
          color: '#ffffff',
          textAlign: 'center',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Typography variant="body2">© 2024 FlashBite. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
