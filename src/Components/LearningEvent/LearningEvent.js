import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



export function LearningEvent() {

  const navigate = useNavigate();
  const [Event, setEvent] = React.useState('');

  const handleChange = (event) => {
    setEvent(event.target.value);
  };

  return (
    <div className="LearningEvent-Container">
      <ButtonGroup variant="contained" aria-label="outlined primary button group" size="large"
        onChange={handleChange}
        value={Event}>
        <Button onClick={() => navigate("/LeRegistration")}>Create Event</Button>
        <Button onClick={() => navigate("/LeExisting")}>Registered Users</Button>
      </ButtonGroup>
    </div>
  );
}
