import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts() {
  const [showAlert, setShowAlert] = useState(true);
  const [reloadButton, setReloadButton] = useState(false); // New state to trigger button reload

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleButtonClick = () => {
    // Set reloadButton to true to trigger button reload
    setReloadButton(true);
  };

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      {showAlert && (
        <Alert severity="error" className=' fixed-top w-96' onClick={handleAlertClose}>
          <AlertTitle>Error</AlertTitle>
          This is an error Alert with a scary title.
        </Alert>
      )}
      {/* Reload the button when reloadButton state changes */}
      {reloadButton && (
        <button onClick={() => setReloadButton(false)}>Reload Button</button>
      )}
    </Stack>
  );
}
