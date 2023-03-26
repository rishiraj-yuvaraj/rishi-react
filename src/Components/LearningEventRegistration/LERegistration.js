import { useFormik } from 'formik';
//import * as yup from 'yup';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export function LERegistration() {
//   const formValidationSchema = yup.object({
//     email : yup.string().min(8, "Need a bigger email").required("Need email"),
//     password : yup.string().min(5, "Need a bigger password").required("Need password").max(12, "Too much password"),
// })


const formik = useFormik({
    initialValues : {
      name : "",
      gender : "",
      age : "",
      qualification : "",
      email: "",
      mobilenumber: "",
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
    
    fetch("http://localhost:4000/leregistration", {method: "POST",
    body : JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
    }).then(()=> Navigate("/LearningEvent"))
  }

  return (
    <div className='registration-fullpage'>
      <div className='registration-container'>
          <form className='registration-form' onSubmit={formik.handleSubmit}>
            <h1>Registration Form</h1> 
                <TextField name="name" type='name' 
                  id="Name" label="Name" 
                  value={formik.values.name} 
                  onChange ={formik.handleChange}               
                  onBlur = {formik.handleBlur} variant="outlined" size="small" /> 
                <TextField name="gender" type='gender' 
                  id="Gender" label="Gender" 
                  value={formik.values.gender} 
                  onChange ={formik.handleChange}               
                  onBlur = {formik.handleBlur} variant="outlined" size="small" />
                <TextField name="age" type='age' 
                  id="Age" label="Age" 
                  value={formik.values.age} 
                  onChange ={formik.handleChange}               
                  onBlur = {formik.handleBlur} variant="outlined" size="small" />
                <TextField name="qualification" type='qualification' 
                  id="Qualification" label="Qualification" 
                  value={formik.values.qualification} 
                  onChange ={formik.handleChange}               
                  onBlur = {formik.handleBlur} variant="outlined" size="small" />
                <TextField name="email" type='email' 
                  id="Email" label="Email" 
                  value={formik.values.email} 
                  onChange ={formik.handleChange}               
                  onBlur = {formik.handleBlur} variant="outlined" size="small" />
                <TextField name="mobilenumber" type="mobileumber" 
                  id="Mobilenumber" label="Mobilenumber" 
                  value={formik.values.mobilenumber} 
                  onChange ={formik.handleChange}
                  onBlur = {formik.handleBlur} variant="outlined" size="small" />
                <Button size="large" variant="contained" type="submit" >Submit</Button> 
          </form> 
      </div> 
    </div>
  );
}

