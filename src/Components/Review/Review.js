import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';

export function Review() {
  return (
    <div className="review-container">
      <h1>Review</h1>
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}>
      <Rating name="customized-10" defaultValue={2} max={5} size='large'/>
      </Box>
      <TextField
            id="standard-multiline-flexible"
            label="Leave your comment"
            multiline
            maxRows={2}
            variant="standard" 
            sx={{marginTop: "20px", width: "400px"}}
            />
    </div>
  );
}
