import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function Contactus() {

  return (
    <div>
      <h1>Contact us</h1>
      <div className='contactus-container'>
        <Box className="button-two"
          component="form"
          sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' }, }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-multiline-flexible"
            label="Name"
            multiline
            maxRows={2}
            variant="standard" />
          <TextField
            id="standard-multiline-flexible"
            label="Email"
            multiline
            maxRows={2}
            variant="standard" />
          <TextField
            id="outlined-textarea"
            label="Message"
            placeholder="Write your message"
            multiline />
        </Box>
      </div>
    </div>
  );
}
