import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, []);

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      {visible && (
        <Alert severity="success" className="fixed-top w-96">
          <AlertTitle>Success</AlertTitle>
          This is a success Alert with an encouraging title.
        </Alert>
      )}
    </Stack>
  );
}
