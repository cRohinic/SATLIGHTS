import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { Box, TextField, Button, Typography } from '@mui/material';

const questions = [
  { id: 'problemSolving', label: 'What problem are you solving?' },
  { id: 'productSolution', label: 'What is your product or solution?' },
  { id: 'targetMarket', label: 'Who is it for (your target market)?' },
  { id: 'planForward', label: 'How do you plan to move forward?' },
  { id: 'companyStatus', label: 'Do you have a company? Is it registered or just an idea?' },
  { id: 'currentActivity', label: 'What are you currently doing? (Student, working, etc.)' },
  { id: 'timeWorking', label: 'How long have you been working on this idea/startup?' },
  { id: 'focusArea', label: 'Are you currently focused more on Tech or Marketing? Why?' },
];

const WrittenQuestions = () => {
  const { formData, updateFormData, setStep } = useContext(FormContext);

  const handleChange = (e) => {
    updateFormData({ [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/founders/submit', formData);
      setStep(4);
    } catch (err) {
      console.error('Submission error:', err);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, p: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Tell Us More About Your Startup
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            id="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
            required
          />
          
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2 }}
            required
          />
          
          <TextField
            fullWidth
            label="Startup Name"
            variant="outlined"
            id="startup"
            value={formData.startup}
            onChange={handleChange}
            sx={{ mb: 2 }}
            required
          />
        </Box>
        
        {questions.map((q) => (
          <TextField
            key={q.id}
            fullWidth
            label={q.label}
            variant="outlined"
            id={q.id}
            value={formData[q.id]}
            onChange={handleChange}
            multiline
            rows={3}
            sx={{ mb: 2 }}
            required
          />
        ))}
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          sx={{ mt: 2, py: 1.5 }}
        >
          Submit Application
        </Button>
      </form>
    </Box>
  );
};

export default WrittenQuestions;