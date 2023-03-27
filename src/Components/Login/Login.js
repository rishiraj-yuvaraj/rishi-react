// import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export function Login() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  //const history = useHistory();
  const navigate = useNavigate();
  const handleSubmit = async(event) => {
      event.preventDefault();
      try{
        const response = await axios.post("http://localhost:4000/login", {email, password});
        //window.location.href='/Home';
        //history.push('/Home');
        navigate("/Home");
        console.log(response)
      }catch(error){
        setErrorMessage('Invalid email or password');
      }
  }

    
  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit} >
        <h1>Login</h1>  
            <TextField name="email" type='text' 
              id="Email" label="Email" 
              value={email} 
              onChange ={(event) => setEmail(event.target.value)}             
              variant="outlined" />
            <TextField name="password" type="password" 
              id="Password" label="Password" 
              value={password} 
              onChange ={(event) => setPassword(event.target.value)}
              variant="outlined" />
            <Button size="large" variant="contained" type="submit" >Submit</Button> 
      </form> 
      {errorMessage && <div>{errorMessage}</div>}
    </div> 
  );
}
