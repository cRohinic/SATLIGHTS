import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const VideoForm = () => {
  const [answers, setAnswers] = useState({
    name: '',
    email: '',
    startup: '',
    problem: '',
    product: '',
    market: '',
    plan: '',
    company: '',
    current: '',
    time: '',
    focus: ''
  });
  
  const [isVideoRecorded, setIsVideoRecorded] = useState(false);
  const [showAIGuide, setShowAIGuide] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate=useNavigate();

  const aiMessages = [
    "Hi there! I'm Nova, your AI guide at Satlights. I'm here to help you share your founder story.",
    "I've helped thousands of entrepreneurs like you showcase their vision and connect with the right opportunities.",
    "Take your time with each question - authenticity is what makes your story compelling. Ready to begin?"
  ];

  useEffect(() => {
    if (showAIGuide) {
      const messageTimer = setTimeout(() => {
        if (currentMessage < aiMessages.length - 1) {
          setCurrentMessage(currentMessage + 1);
          setIsTyping(true);
          setTimeout(() => setIsTyping(false), 1500);
        } else {
          setIsTyping(false);
        }
      }, 3000);

      return () => clearTimeout(messageTimer);
    }
  }, [currentMessage, showAIGuide]);

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value
    });
  };

  const handleRecord = () => {
    setIsVideoRecorded(true);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const submissionData = {
      timestamp: new Date().toISOString(),
      ...answers
    };
    
    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbxg9Q8CaeHu3dgY3V5GxZyvdSpWPaSTtnK8xxFVuhNdfpyp48lbTOaVmv_XN55BHgFR/exec';
      
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      navigate('/thank-you');
      
      // Reset form after successful submission
      setAnswers({
        name: '',
        email: '',
        startup: '',
        problem: '',
        product: '',
        market: '',
        plan: '',
        company: '',
        current: '',
        time: '',
        focus: ''
      });
      setIsVideoRecorded(false);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const questions = [
    { 
      name: 'problem', 
      label: '1. What problem are you solving?', 
      placeholder: 'Describe the specific problem you\'ve identified and why it matters...' 
    },
    { 
      name: 'product', 
      label: '2. What is your product or solution?', 
      placeholder: 'Explain your solution and what makes it unique...' 
    },
    { 
      name: 'market', 
      label: '3. Who is it for (your target market)?', 
      placeholder: 'Describe your ideal customers and market size...' 
    },
    { 
      name: 'plan', 
      label: '4. How do you plan to move forward?', 
      placeholder: 'Share your roadmap, milestones, and growth strategy...' 
    },
    { 
      name: 'company', 
      label: '5. Do you have a company? Is it registered or just an idea?', 
      placeholder: 'Tell us about your company status, legal structure, or stage...' 
    },
    { 
      name: 'current', 
      label: '6. What are you currently doing? (Student, working, etc.)', 
      placeholder: 'Share your current situation and how you balance this venture...' 
    },
    { 
      name: 'time', 
      label: '7. How long have you been working on this idea/startup?', 
      placeholder: 'Timeline of your journey and key milestones achieved...' 
    },
    { 
      name: 'focus', 
      label: '8. Are you currently focused more on Tech or Marketing? Why?', 
      placeholder: 'Explain your current priorities and reasoning behind this focus...' 
    }
  ];

  return (
    <div style={styles.fullscreenWrapper}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.logo}> SATLIGHTS</div>
          <h1 style={styles.title}>Your Founder Story</h1>
          <p style={styles.subtitle}>
            Share your vision and connect with investors, mentors, and opportunities
          </p>
        </div>

        {showAIGuide ? (
          <div style={styles.aiGuideContainer}>
            <div style={styles.aiAssistantSection}>
              <div style={styles.aiAvatarContainer}>
                <div style={styles.aiAvatar}>
                  <div style={styles.aiVideoFrame}>
                    <div style={styles.aiAvatarImage}>
                      <div style={{...styles.avatarFace, animation: isTyping ? 'talking 0.5s infinite alternate' : 'none'}}>
                        👩‍💼
                      </div>
                      <div style={styles.statusIndicator}>
                        <div style={{...styles.statusDot, backgroundColor: '#10b981'}}></div>
                        <span style={styles.statusText}>AI Assistant Online</span>
                      </div>
                    </div>
                    <div style={styles.waveform}>
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          style={{
                            ...styles.waveBar,
                            animationDelay: `${i * 0.1}s`,
                            animation: isTyping ? 'wave 1s infinite ease-in-out' : 'none',
                            height: isTyping ? '20px' : '4px'
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={styles.aiSpeechContainer}>
                  <div style={styles.aiSpeechBubble}>
                    <div style={styles.aiSpeechHeader}>
                      <span style={styles.aiName}>Nova AI</span>
                      <span style={styles.aiRole}>Founder Guide</span>
                    </div>
                    <p style={styles.aiSpeechText}>
                      {aiMessages[currentMessage]}
                      {isTyping && <span style={styles.typingIndicator}>...</span>}
                    </p>
                    <div style={styles.messageProgress}>
                      {aiMessages.map((_, index) => (
                        <div 
                          key={index}
                          style={{
                            ...styles.progressDot,
                            backgroundColor: index <= currentMessage ? '#4dabf7' : 'rgba(255,255,255,0.3)'
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div style={styles.aiSpeechArrow}></div>
                </div>
              </div>

              <div style={styles.aiFeatures}>
                <div style={styles.featureItem}>
                  <span style={styles.featureIcon}>🎯</span>
                  <span style={styles.featureText}>Personalized guidance</span>
                </div>
                <div style={styles.featureItem}>
                  <span style={styles.featureIcon}>⚡</span>
                  <span style={styles.featureText}>Quick 5-min process</span>
                </div>
                <div style={styles.featureItem}>
                  <span style={styles.featureIcon}>🔒</span>
                  <span style={styles.featureText}>Secure & confidential</span>
                </div>
              </div>

              <button 
                onClick={() => setShowAIGuide(false)} 
                style={styles.aiContinueButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#3b82f6';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#4dabf7';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Let's Start My Story →
              </button>
            </div>
          </div>
        ) : (
          <div style={styles.form}>
            {/* Progress Indicator */}
            <div style={styles.progressSection}>
              <div style={styles.progressBar}>
                <div style={{
                  ...styles.progressFill,
                  width: `${((isVideoRecorded ? 1 : 0) + (answers.name ? 1 : 0) + (answers.email ? 1 : 0)) / 3 * 100}%`
                }}></div>
              </div>
              <p style={styles.progressText}>
                Progress: {((isVideoRecorded ? 1 : 0) + (answers.name ? 1 : 0) + (answers.email ? 1 : 0))} of 3 required steps completed
              </p>
            </div>

            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>👋 Let's start with the basics</h2>
              
              <div style={styles.basicInfoGrid}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={answers.name}
                    onChange={handleChange}
                    style={{
                      ...styles.input,
                      borderColor: answers.name ? '#10b981' : 'rgba(77, 171, 247, 0.3)'
                    }}
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={answers.email}
                    onChange={handleChange}
                    style={{
                      ...styles.input,
                      borderColor: answers.email ? '#10b981' : 'rgba(77, 171, 247, 0.3)'
                    }}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Startup Name</label>
                  <input
                    type="text"
                    name="startup"
                    value={answers.startup}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Your startup name (or 'Stealth Mode')"
                  />
                </div>
              </div>
            </div>

            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>🎥 Record Your Pitch</h2>
              <p style={styles.sectionDescription}>
                Record a 2-3 minute video introducing yourself and your startup. 
                Be authentic, passionate, and conversational - this is your chance to make a great first impression!
              </p>

              <div style={styles.videoContainer}>
                <div style={styles.videoRecorder}>
                  {!isVideoRecorded ? (
                    <>
                      <div style={styles.recordingIcon}>🎬</div>
                      <h3 style={styles.recordingTitle}>Ready to record your story?</h3>
                      <p style={styles.recordingSubtitle}>
                        Tips: Good lighting, clear audio, and genuine enthusiasm work best
                      </p>
                      <button 
                        style={styles.recordingButton} 
                        onClick={handleRecord}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#3b82f6';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#4dabf7';
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        🎥 Start Video Recording
                      </button>
                      <p style={styles.recordingHint}>
                        Secure video recording powered by VideoAsk
                      </p>
                    </>
                  ) : (
                    <div style={styles.videoAskContainer}>
                      <div style={styles.videoCompletedBadge}>
                        ✅ Video Recording Active
                      </div>
                      <iframe 
                        src="https://www.videoask.com/fke6jtfhs" 
                        allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;" 
                        width="100%" 
                        height="500px" 
                        style={styles.iframe}
                        title="VideoAsk Recorder"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>📝 Tell us more about your startup</h2>
              <p style={styles.sectionDescription}>
                These written answers help us understand your vision in detail and prepare personalized feedback
              </p>

              {questions.map((question, index) => (
                <div key={question.name} style={styles.questionGroup}>
                  <label style={styles.label}>
                    {question.label}
                  </label>
                  <textarea
                    name={question.name}
                    value={answers[question.name]}
                    onChange={handleChange}
                    style={styles.textarea}
                    placeholder={question.placeholder}
                    rows={4}
                  />
                </div>
              ))}
            </div>

            <div style={styles.submitSection}>
              <button
                onClick={handleSubmit}
                style={{
                  ...styles.submitButton,
                  ...((!isVideoRecorded || !answers.name || !answers.email || isSubmitting) ? styles.submitButtonDisabled : {})
                }}
                disabled={!isVideoRecorded || !answers.name || !answers.email || isSubmitting}
                onMouseEnter={(e) => {
                  if (!e.target.disabled) {
                    e.target.style.backgroundColor = '#1669d9';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.target.disabled) {
                    e.target.style.backgroundColor = '#1a73e8';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                {isSubmitting ? '⏳ Submitting...' : 
                 (isVideoRecorded && answers.name && answers.email ? 
                  '🚀 Submit My Founder Story' : 
                  '📹 Please complete video and basic info first')
                }
              </button>
              
              <p style={styles.submitNote}>
                By submitting, you agree to our review process. We'll get back to you within 5 business days with personalized feedback and next steps.
              </p>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes talking {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
          }
          
          @keyframes wave {
            0%, 100% { height: 4px; }
            50% { height: 20px; }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          
          @keyframes typing {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  fullscreenWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#0a0a1a',
    overflow: 'auto',
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem 1rem',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    minHeight: '100vh',
    lineHeight: '1.6',
    color: '#e0e0e0',
    boxSizing: 'border-box'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
    padding: '2rem 0 3rem 0',
    borderBottom: '1px solid rgba(77, 171, 247, 0.2)',
    background: 'linear-gradient(135deg, rgba(77, 171, 247, 0.1) 0%, rgba(16, 23, 41, 0.1) 100%)'
  },
  logo: {
    fontSize: '2.2rem',
    fontWeight: '700',
    color: '#4dabf7',
    marginBottom: '1rem',
    textShadow: '0 0 20px rgba(77, 171, 247, 0.6)'
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '0.8rem',
    lineHeight: '1.2',
    background: 'linear-gradient(135deg, #ffffff 0%, #4dabf7 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#a0aec0',
    maxWidth: '650px',
    margin: '0 auto',
    lineHeight: '1.5'
  },
  
  // Enhanced AI Guide Styles
  aiGuideContainer: {
    backgroundColor: 'rgba(16, 23, 41, 0.95)',
    borderRadius: '20px',
    padding: '3rem 2rem',
    boxShadow: '0 20px 60px rgba(0, 50, 150, 0.4)',
    border: '1px solid rgba(77, 171, 247, 0.3)',
    marginBottom: '2rem',
    backdropFilter: 'blur(10px)'
  },
  
  aiAssistantSection: {
    textAlign: 'center'
  },
  
  aiAvatarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem',
    position: 'relative'
  },
  
  aiAvatar: {
    marginBottom: '2rem'
  },
  
  aiVideoFrame: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    backgroundColor: 'rgba(77, 171, 247, 0.1)',
    border: '4px solid #4dabf7',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 40px rgba(77, 171, 247, 0.6)',
    position: 'relative',
    overflow: 'hidden'
  },
  
  aiAvatarImage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem'
  },
  
  avatarFace: {
    fontSize: '4rem',
    transition: 'all 0.3s ease'
  },
  
  statusIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    fontSize: '0.7rem'
  },
  
  statusDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    animation: 'pulse 2s infinite'
  },
  
  statusText: {
    color: '#10b981',
    fontWeight: '500'
  },
  
  waveform: {
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    marginTop: '0.5rem'
  },
  
  waveBar: {
    width: '3px',
    backgroundColor: '#4dabf7',
    borderRadius: '2px',
    transition: 'height 0.3s ease'
  },
  
  aiSpeechContainer: {
    position: 'relative',
    maxWidth: '450px',
    margin: '0 auto'
  },
  
  aiSpeechBubble: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '1.5rem',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
    textAlign: 'left',
    border: '1px solid rgba(77, 171, 247, 0.2)'
  },
  
  aiSpeechHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.8rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
  },
  
  aiName: {
    fontWeight: '700',
    color: '#1a202c',
    fontSize: '1rem'
  },
  
  aiRole: {
    fontSize: '0.8rem',
    color: '#4dabf7',
    fontWeight: '500'
  },
  
  aiSpeechText: {
    color: '#2d3748',
    margin: 0,
    fontSize: '1rem',
    lineHeight: '1.6',
    minHeight: '60px'
  },
  
  typingIndicator: {
    animation: 'typing 1s infinite',
    fontWeight: 'bold'
  },
  
  messageProgress: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '1rem'
  },
  
  progressDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    transition: 'all 0.3s ease'
  },
  
  aiSpeechArrow: {
    position: 'absolute',
    bottom: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderLeft: '12px solid transparent',
    borderRight: '12px solid transparent',
    borderTop: '12px solid #ffffff'
  },
  
  aiFeatures: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '2rem',
    flexWrap: 'wrap'
  },
  
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#a0aec0',
    fontSize: '0.9rem'
  },
  
  featureIcon: {
    fontSize: '1.2rem'
  },
  
  featureText: {
    fontWeight: '500'
  },
  
  aiContinueButton: {
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#4dabf7',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 25px rgba(77, 171, 247, 0.4)',
    minWidth: '200px'
  },
  
  // Enhanced Form Styles
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  
  progressSection: {
    backgroundColor: 'rgba(16, 23, 41, 0.6)',
    borderRadius: '12px',
    padding: '1.5rem',
    marginBottom: '1rem',
    border: '1px solid rgba(77, 171, 247, 0.1)'
  },
  
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '0.5rem'
  },
  
  progressFill: {
    height: '100%',
    backgroundColor: '#10b981',
    borderRadius: '4px',
    transition: 'width 0.5s ease',
    background: 'linear-gradient(90deg, #10b981 0%, #4dabf7 100%)'
  },
  
  progressText: {
    fontSize: '0.9rem',
    color: '#a0aec0',
    margin: 0,
    textAlign: 'center'
  },
  
  section: {
    backgroundColor: 'rgba(16, 23, 41, 0.8)',
    borderRadius: '16px',
    padding: '2.5rem',
    boxShadow: '0 8px 32px rgba(0, 50, 150, 0.3)',
    border: '1px solid rgba(77, 171, 247, 0.1)',
    backdropFilter: 'blur(5px)'
  },
  
  sectionTitle: {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#4dabf7',
    marginBottom: '0.8rem'
  },
  
  sectionDescription: {
    color: '#a0aec0',
    marginBottom: '2rem',
    fontSize: '1rem',
    lineHeight: '1.6'
  },
  
  basicInfoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem'
  },
  
  inputGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  
  label: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#e0e0e0',
    marginBottom: '0.5rem'
  },
  
  input: {
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid rgba(77, 171, 247, 0.3)',
    borderRadius: '10px',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(0, 0, 20, 0.5)',
    color: '#ffffff',
    fontFamily: 'inherit'
  },
  
  // Enhanced Video Section
  videoContainer: {
    borderRadius: '16px',
    border: '2px dashed rgba(77, 171, 247, 0.4)',
    backgroundColor: 'rgba(0, 0, 30, 0.5)',
    minHeight: '450px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative'
  },
  
  videoRecorder: {
    textAlign: 'center',
    padding: '3rem',
    width: '100%'
  },
  
  recordingIcon: {
    fontSize: '4rem',
    marginBottom: '1rem',
    color: '#4dabf7'
  },
  
  recordingTitle: {
    fontSize: '1.5rem',
    color: '#ffffff',
    marginBottom: '0.5rem',
    fontWeight: '600'
  },
  
  recordingSubtitle: {
    color: '#a0aec0',
    marginBottom: '2rem',
    fontSize: '1rem'
  },
  
  recordingButton: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#4dabf7',
    border: 'none',
    borderRadius: '12px',
    padding: '1rem 2rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginBottom: '1rem',
    boxShadow: '0 8px 25px rgba(77, 171, 247, 0.4)',
    minWidth: '220px'
  },
  
  recordingHint: {
    color: '#a0aec0',
    fontSize: '0.9rem',
    marginTop: '1rem'
  },
  
  videoAskContainer: {
    width: '100%',
    position: 'relative'
  },
  
  videoCompletedBadge: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#10b981',
    color: '#ffffff',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    zIndex: 10
  },
  
  iframe: {
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)'
  },
  
  // Enhanced Question Styles
  questionGroup: {
    marginBottom: '2rem'
  },
  
  textarea: {
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid rgba(77, 171, 247, 0.3)',
    borderRadius: '12px',
    minHeight: '140px',
    resize: 'vertical',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(0, 0, 20, 0.5)',
    color: '#ffffff',
    lineHeight: '1.6'
  },
  
  // Enhanced Submit Section
  submitSection: {
    textAlign: 'center',
    padding: '3rem 2rem',
    backgroundColor: 'rgba(16, 23, 41, 0.8)',
    borderRadius: '16px',
    border: '1px solid rgba(77, 171, 247, 0.1)'
  },
  
  submitButton: {
    width: '100%',
    maxWidth: '450px',
    padding: '1.2rem 2rem',
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#ffffff',
    backgroundColor: '#1a73e8',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginBottom: '1rem',
    boxShadow: '0 8px 25px rgba(26, 115, 232, 0.4)'
  },
  
  submitButtonDisabled: {
    backgroundColor: '#4a5568',
    cursor: 'not-allowed',
    boxShadow: 'none'
  },
  
  submitNote: {
    fontSize: '1rem',
    color: '#a0aec0',
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: '1.5'
  }
};

export default VideoForm;