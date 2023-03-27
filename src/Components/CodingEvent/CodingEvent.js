import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



export function CodingEvent() {

  const navigate = useNavigate();
  const [Event, setEvent] = React.useState('');

  const handleChange = (event) => {
    setEvent(event.target.value);
  };

  return (
    <div className="CodingEvent-Container">
      <ButtonGroup variant="contained" aria-label="outlined primary button group" size="large"
        onChange={handleChange}
        value={Event}>
        <Button onClick={() => navigate("/CeRegistration")}>Create Event</Button>
        <Button onClick={() => navigate("/CeExisting")}>Registered Users</Button>
      </ButtonGroup>
    </div>
  );
}
