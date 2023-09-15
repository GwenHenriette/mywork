import React, { useState } from 'react';
import FeedbackForm from './FeedbackForm';
import Button from '@mui/material/Button';
import myImage from '../Images/feedback.png';

const FeedbackFormHandler = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpenForm}
        className="feedback-icon-button"
        sx={{
          position: 'fixed',
          borderRadius: '50%',
          font: 'inherit',
          opacity: 0.7,
          background: '#96D2B0',
          color: '#000',
          ':hover': { opacity: 1, background: '#96d2b0' },
        }}>
        <img src={myImage} alt="Feedback" style={{width: 'auto', height: '100%'}} /> {/* Add this line */}
      </Button>
      {showForm && (
        <>
          <div className="feedback-form-backdrop" onClick={handleCloseForm} />
          <FeedbackForm onClose={handleCloseForm} />
        </>
      )}
    </>
  );
};

export default FeedbackFormHandler;