import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    inviteCode: '',
    name: '',
    email: '',
    startup: '',
    videoLink: '',
    problemSolving: '',
    productSolution: '',
    targetMarket: '',
    planForward: '',
    companyStatus: '',
    currentActivity: '',
    timeWorking: '',
    focusArea: ''
  });

  const [step, setStep] = useState(1); // 1: invite, 2: video, 3: questions, 4: confirmation

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, step, setStep }}>
      {children}
    </FormContext.Provider>
  );
};