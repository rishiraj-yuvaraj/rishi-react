import './App.css';
import * as React from 'react';
import {  Routes , Route, useNavigate } from 'react-router-dom';
import { Signup } from './Components/Signup/Signup.js';
import { Login } from './Components/Login/Login.js';
import { LERegistration } from './Components/LearningEventRegistration/LERegistration.js'
import { LeExisting } from './Components/LearningEventExisting/LeExisting.js'
import { CERegistration } from './Components/CodingEventRegistration/CERegistration.js'
import { CeExisting } from './Components/CodingEventExisting/CeExisting.js'
import { IPERegistration } from './Components/InterviewPreparationRegistration/IPERegistration.js'
import { IpeExisting } from './Components/InterviewPreparationEventExisting/IpeExisting.js'
import { Contactus } from './Components/ContactUs/contactus.js'
import { Review } from './Components/Review/Review.js';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { LearningEvent } from './Components/LearningEvent/LearningEvent';
import { CodingEvent } from './Components/CodingEvent/CodingEvent';
import { InterviewPreparationEvent } from './Components/InterviewPreparationEvent/InterviewPreparationEvent';



function Home() {

  const navigate = useNavigate();
  const [Event, setEvent] = React.useState('');

  const handleChange = (event) => {
    setEvent(event.target.value);
  };

  return (
    <div className="background-image">
      <h1 className='welcome-note'>Welcome to the Homepage</h1>
      <Box className="box-container" >  
        <FormControl id="box-color" fullWidth>
        <InputLabel id="demo-simple-select-label">Events</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Event}
          label="Events"
          onChange={handleChange}
          size="medium"
        >
          <MenuItem value="Learning_Event" onClick={()=>navigate("/LearningEvent")}>Learning Event</MenuItem>
          <MenuItem value="Coding Event" onClick={()=>navigate("/CodingEvent")}>Coding Event</MenuItem>
          <MenuItem value="Interview preparation Event" onClick={()=>navigate("/InterviewPreparationEvent")}>Interview preparation Event</MenuItem>
        </Select>
        </FormControl>
        </Box>
    </div>
  );
}


export function ExistingLearingEvents({user}) {
  return(
    <div className="cards-container">
      <Card className ="user-container">
        <CardContent className ="user-specs">
          <h3 className ="user-name">Name: {user.name}</h3>
          <p  className="user-gender">Gender: {user.gender}</p>
          <p> Age: {user.age}</p>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Qualification:{user.qualification}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Email:{user.email}
          </Typography>
        </CardContent>
      </Card> 
    </div>
  )
}

export function ExistingCodingEvents({user}) {
  return(
    <div className="cards-container">
      <Card className ="user-container">
        <CardContent className ="user-specs">
          <h3 className ="user-name">Name: {user.name}</h3>
          <p  className="user-gender">Gender: {user.gender}</p>
          <p> Age: {user.age}</p>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Qualification:{user.qualification}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Email:{user.email}
          </Typography>
        </CardContent>
      </Card> 
    </div>
  )
}

export function ExistingInterviewPreparationEvents({user}) {
  return(
    <div className="cards-container">
      <Card className ="user-container">
        <CardContent className ="user-specs">
          <h3 className ="user-name">Name: {user.name}</h3>
          <p  className="user-gender">Gender: {user.gender}</p>
          <p> Age: {user.age}</p>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Qualification:{user.qualification}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Email:{user.email}
          </Typography>
        </CardContent>
      </Card> 
    </div>
  )
}


function App() {

  const navigate = useNavigate();
  const [mode, setMode] = React.useState("light")
  const themeCtx = createTheme({
    palette: {
      mode: mode,
    }, 
    });

  return (
  <ThemeProvider theme={themeCtx}>
    <Paper sx = {{
      minHeight: "100vh",
      borderRadius: "0px",
    }} 
    elevation={4}>

    <div className="App">
      <div className="content-gap">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={()=>navigate("/Home")}>Home</Button>
              <Typography className="appName" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Code Practice
              </Typography>
              <Button color="inherit" onClick={()=>navigate("/")}>Signup</Button>
              <Button color="inherit" onClick={()=>navigate("/Login")}>Login</Button>
              <Button 
              sx={{
                marginLeft : "auto",
              }}
              startIcon= {mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
              color="inherit" onClick={()=>setMode(mode === "light" ? "dark" : "light" )}>
              {mode === "light" ? "dark" : "light"} Mode </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>

      <browserRouter>
        <Routes>  
          <Route path = "/" element = {<Signup />}></Route>
          <Route path = "/Login" element = {<Login />}></Route>
          <Route path = "/Home" element = {<Home />}></Route>
          <Route path = "/LearningEvent" element = {<LearningEvent />}></Route>
          <Route path = "/LeRegistration" element = {<LERegistration />}></Route>
          <Route path = "/LeExisting" element = {<LeExisting />}></Route>
          <Route path = "/CodingEvent" element = {<CodingEvent />}></Route>
          <Route path = "/CeRegistration" element = {<CERegistration />}></Route>
          <Route path = "/CeExisting" element = {<CeExisting />}></Route>
          <Route path = "/InterviewPreparationEvent" element = {<InterviewPreparationEvent />}></Route>
          <Route path = "/IpeRegistration" element = {<IPERegistration />}></Route>
          <Route path = "/IpeExisting" element = {<IpeExisting />}></Route>
          <Route path = "/Contactus" element = {<Contactus />}></Route>
          <Route path = "/Review" element = {<Review />}></Route>
        </Routes>
      </browserRouter>

      <React.Fragment>
        <AppBar position="fixed" color="primary" className="footer-box"  sx={{ top: 'auto', bottom: 0, height:"30px" }}>
          <Toolbar>
            <Box sx={{ marginLeft:"auto" }} >
              <Button className="button-one" color="inherit" size="small" sx={{color:"white", marginRight:"15px"}}  onClick={()=>navigate("/Contactus")}>
                Contact Us
              </Button>
              <Button color="inherit" size="small" onClick={()=>navigate("/Review")}>
                Review
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </React.Fragment>        
      
    </div>
    </Paper>
  </ThemeProvider>  
  );
}

export default App;
