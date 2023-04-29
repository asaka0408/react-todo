import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const FullWidthTextField = () => {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        margin: 'auto',
        padding: '10px',
      }}
    >
      <TextField fullWidth label="ここは変数" id="fullWidth" />
    </Box>
  );
}

export default FullWidthTextField;