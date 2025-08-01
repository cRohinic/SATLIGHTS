import React from 'react';

const ThankYou = () => {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #000000 0%, #000033 100%)', // Black to dark blue gradient
      padding: '1rem'
    }}>
      <div style={{
        maxWidth: '500px',
        width: '100%',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        backgroundColor: 'rgba(0, 0, 30, 0.9)', // Dark blue-black background
        borderRadius: '8px',
        boxShadow: '0 0 30px rgba(0, 100, 255, 0.7)',
        color: '#ffffff',
        border: '1px solid rgba(0, 150, 255, 0.3)'
      }}>
        <h1 style={{ 
          fontWeight: 'normal', 
          marginBottom: '1.5rem',
          color: '#4fc3f7' // Light blue heading
        }}>
          Thank You
        </h1>
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.6',
          color: 'rgba(255, 255, 255, 0.9)' // Slightly faded white text
        }}>
          Thanks for applying — we'll reach out after reviewing your story.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;