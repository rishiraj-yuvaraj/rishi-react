import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



export function InterviewPreparationEvent() {

  const navigate = useNavigate();
  const [Event, setEvent] = React.useState('');

  const handleChange = (event) => {
    setEvent(event.target.value);
  };

  return (
    <div className="InterviewPreparationEvent-Container">
      <ButtonGroup variant="contained" aria-label="outlined primary button group" size="large"
        onChange={handleChange}
        value={Event}>
        <Button onClick={() => navigate("/IPERegistration")}>Create Event</Button>
        <Button onClick={() => navigate("/IpeExisting")}>Registered Users</Button>
      </ButtonGroup>
    </div>
  );
}
