import { useFormik } from 'formik';
//import * as yup from 'yup';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export function Signup() {
//   const formValidationSchema = yup.object({
//     email : yup.string().min(8, "Need a bigger email").required("Need email"),
//     password : yup.string().min(5, "Need a bigger password").required("Need password").max(12, "Too much password"),
// })


  const formik = useFormik({
    initialValues : {
      email : "",
      password : "",
    },

      //validationSchema : formValidationSchema,
      onSubmit : (newUser) => {
      console.log("your values are submitted", newUser);
      addUser(newUser);
    }
  })

  const Navigate = useNavigate();

  const addUser = (newUser) =>{
    console.log(newUser)

  fetch("http://localhost:4000/register", {method: "POST",
    body : JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
    }).then(()=> Navigate("/Login"))
  }


  return (
    <div className='signup-container'>
        <form className='signup-form' onSubmit={formik.handleSubmit}>
          <h1>Signup</h1>
              <TextField name="email" type='email' 
                id="Email" label="Email" 
                value={formik.values.email} 
                onChange ={formik.handleChange}               
                onBlur = {formik.handleBlur} variant="outlined" />
              <TextField name="password" type="password" 
                id="Password" label="Password" 
                value={formik.values.password} 
                onChange ={formik.handleChange}
                onBlur = {formik.handleBlur} variant="outlined" />
              <Button size="large" variant="contained" type="submit" >Submit</Button> 
              
        </form> 
    </div> 
  );
}
