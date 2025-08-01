import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const Confirmation = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 20, 0.8)', // Dark blue background for the whole screen
      p: 2
    }}>
      <Box sx={{ 
        maxWidth: 600, 
        width: '100%',
        mx: 'auto', 
        p: 3, 
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 30, 0.9)', // Slightly darker blue for the content box
        borderRadius: 2,
        boxShadow: '0 4px 20px rgba(0, 100, 255, 0.3)',
        color: 'white' // Default text color
      }}>
        <CheckCircle sx={{ 
          fontSize: 80, 
          color: 'primary.main', // Blue checkmark
          mb: 3 
        }} />
        
        <Typography variant="h4" gutterBottom sx={{ 
          fontWeight: 'bold', 
          mb: 2,
          color: 'primary.light' // Light blue heading
        }}>
          Application Submitted!
        </Typography>
        
        <Typography variant="body1" sx={{ 
          mb: 4,
          color: 'rgba(255, 255, 255, 0.9)' // Slightly faded white text
        }}>
          Thanks for applying — we'll reach out after reviewing your story.
        </Typography>
        
        <Button
          variant="outlined"
          onClick={() => window.location.reload()}
          sx={{
            color: 'primary.light',
            borderColor: 'primary.light',
            '&:hover': {
              backgroundColor: 'rgba(30, 100, 255, 0.1)',
              borderColor: 'primary.main'
            }
          }}
        >
          Start New Application
        </Button>
      </Box>
    </Box>
  );
};

export default Confirmation;