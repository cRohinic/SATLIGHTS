// AiAssistant.js
import React from 'react';

const AiAssistant = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '280px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      padding: '15px',
      display: 'flex',
      alignItems: 'flex-start',
      zIndex: 1000
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#3498db',
        marginRight: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold'
      }}>
        AI
      </div>
      <div>
        <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>
          Hi there! I'm your Satlights assistant.
        </p>
        <p style={{ margin: 0, fontSize: '0.9em', color: '#555' }}>
          I'm here to help guide you through the application process.
        </p>
      </div>
    </div>
  );
};

export default AiAssistant;