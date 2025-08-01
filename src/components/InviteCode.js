import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../src/logo.png'; // Make sure to have your SATLIGHTS logo in src folder

const InviteCode = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const VALID_INVITE_CODE = process.env.INVITE_CODE || 'SATLIGHTS-TEST-001';

  // SATLIGHTS brand colors
  const brandColors = {
    primary: '#2563eb',      // Vibrant blue
    secondary: '#1e40af',    // Darker blue
    accent: '#3b82f6',       // Light blue
    dark: '#0f172a',         // Navy
    light: '#f8fafc'         // Off-white
  };

  // Helper function to convert hex to RGB values
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');
    await new Promise(resolve => setTimeout(resolve, 800));

    if (code.trim().toUpperCase() === VALID_INVITE_CODE) {
      setSuccess(true);
      navigate('/form');
    } else {
      setError('Invalid invite code. Please check and try again.');
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && code.trim() && !isLoading) {
      handleSubmit();
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${brandColors.dark} 0%, #1e293b 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    },
    logoContainer: {
      position: 'absolute',
      top: '32px',
      left: '32px',
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    logo: {
      height: '36px',
      width: 'auto'
    },
    companyName: {
      color: brandColors.light,
      fontSize: '20px',
      fontWeight: '700',
      letterSpacing: '0.5px'
    },
    backgroundElement1: {
      position: 'absolute',
      top: '-160px',
      right: '-160px',
      width: '320px',
      height: '320px',
      background: `rgba(${hexToRgb(brandColors.primary)}, 0.1)`,
      borderRadius: '50%',
      filter: 'blur(40px)',
      animation: 'pulse 4s ease-in-out infinite'
    },
    backgroundElement2: {
      position: 'absolute',
      bottom: '-160px',
      left: '-160px',
      width: '320px',
      height: '320px',
      background: `rgba(${hexToRgb(brandColors.secondary)}, 0.1)`,
      borderRadius: '50%',
      filter: 'blur(40px)',
      animation: 'pulse 4s ease-in-out infinite 2s'
    },
    card: {
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      padding: '48px',
      boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5)`,
      border: `1px solid ${brandColors.primary}33`,
      width: '100%',
      maxWidth: '480px',
      position: 'relative',
      transition: 'all 0.3s ease',
      zIndex: 10
    },
    iconContainer: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '64px',
      height: '64px',
      background: `linear-gradient(135deg, ${brandColors.secondary} 0%, ${brandColors.primary} 100%)`,
      borderRadius: '16px',
      marginBottom: '24px',
      boxShadow: `0 10px 20px ${brandColors.primary}33`
    },
    title: {
      fontSize: '28px',
      fontWeight: '700',
      color: brandColors.light,
      marginBottom: '12px',
      lineHeight: '1.3',
      textAlign: 'center'
    },
    gradientText: {
      background: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.accent} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      color: '#94a3b8',
      fontSize: '16px',
      textAlign: 'center',
      marginBottom: '32px'
    },
    inputContainer: {
      position: 'relative',
      marginBottom: '24px'
    },
    input: {
      width: '100%',
      padding: '16px 50px 16px 16px',
      fontSize: '18px',
      background: 'rgba(30, 41, 59, 0.5)',
      border: `2px solid ${brandColors.secondary}`,
      borderRadius: '12px',
      outline: 'none',
      transition: 'all 0.3s ease',
      letterSpacing: '0.05em',
      boxSizing: 'border-box',
      color: brandColors.light
    },
    inputFocused: {
      borderColor: brandColors.primary,
      background: 'rgba(30, 64, 175, 0.5)',
      boxShadow: `0 0 0 3px ${brandColors.primary}33`
    },
    inputIcon: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#94a3b8',
      width: '20px',
      height: '20px'
    },
    errorContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#fecaca',
      background: '#7f1d1d',
      padding: '12px 16px',
      borderRadius: '12px',
      border: '1px solid #ef4444',
      marginBottom: '24px',
      fontSize: '14px',
      fontWeight: '500',
      animation: 'fadeIn 0.3s ease-out'
    },
    button: {
      width: '100%',
      padding: '16px 24px',
      background: success ? '#10b981' : `linear-gradient(135deg, ${brandColors.secondary} 0%, ${brandColors.primary} 100%)`,
      color: brandColors.light,
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: isLoading || success ? 'default' : 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      opacity: (!code.trim() || isLoading) ? 0.6 : 1,
      transform: 'scale(1)',
      boxShadow: `0 10px 20px ${brandColors.primary}33`
    },
    buttonHover: {
      transform: 'scale(1.02)',
      boxShadow: `0 15px 30px ${brandColors.primary}4D`
    },
    buttonContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      opacity: isLoading ? 0 : 1,
      transition: 'opacity 0.3s ease'
    },
    loadingDots: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      gap: '4px'
    },
    dot: {
      width: '8px',
      height: '8px',
      background: brandColors.light,
      borderRadius: '50%',
      animation: 'bounce 1.4s ease-in-out infinite both'
    }
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.05); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
          }
          
          .dot:nth-child(1) { animation-delay: -0.32s; }
          .dot:nth-child(2) { animation-delay: -0.16s; }
          .dot:nth-child(3) { animation-delay: 0s; }
          
          .arrow-icon {
            transition: transform 0.3s ease;
          }
          
          .button:hover .arrow-icon {
            transform: translateX(4px);
          }
        `}
      </style>
      
      <div style={styles.container}>
        {/* SATLIGHTS Logo and Name */}
        <div style={styles.logoContainer}>
          <img src={logo} alt="SATLIGHTS" style={styles.logo} />
          <div style={styles.companyName}>SATLIGHTS</div>
        </div>

        <div style={styles.backgroundElement1}></div>
        <div style={styles.backgroundElement2}></div>
        
        <div style={styles.card}>
          <div style={{ textAlign: 'center' }}>
            <div style={styles.iconContainer}>
              <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.1 7 14 7.9 14 9S13.1 11 12 11 10 10.1 10 9 10.9 7 12 7ZM12 17C10.43 17 8.86 16.46 7.5 15.4C7.5 13.93 10.5 13.15 12 13.15S16.5 13.93 16.5 15.4C15.14 16.46 13.57 17 12 17Z"/>
              </svg>
            </div>
             <h1 style={styles.title}>
              Tell us your story —<br />
              <span style={styles.gradientText}>no deck needed</span>
            </h1>
            <p style={styles.subtitle}>Enter your exclusive invite code to begin</p>
          </div>

          <div>
            <div style={styles.inputContainer}>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyPress={handleKeyPress}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Enter Invite Code"
                disabled={isLoading}
                style={{
                  ...styles.input,
                  ...(isFocused ? styles.inputFocused : {})
                }}
              />
              <svg style={styles.inputIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v-2H7v-2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>

            {error && (
              <div style={styles.errorContainer}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              disabled={!code.trim() || isLoading || success}
              style={{
                ...styles.button,
                ...(isHovered && !isLoading && code.trim() ? styles.buttonHover : {})
              }}
            >
              <span style={styles.buttonContent}>
                <span>{success ? 'Access Granted' : 'Continue'}</span>
                {success ? (
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="arrow-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                )}
              </span>
              
              {isLoading && (
                <div style={styles.loadingDots}>
                  <div className="dot" style={styles.dot}></div>
                  <div className="dot" style={styles.dot}></div>
                  <div className="dot" style={styles.dot}></div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteCode;