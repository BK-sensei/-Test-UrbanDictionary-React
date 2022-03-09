import React from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik"
import * as Yup from 'yup'
import styled from 'styled-components'
import Header from '../components/Header';

const SubmitButton = styled.input`
    margin-top:100px;    
    width: 388px;
    height: 91px;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
    text-align: center;

    background: #EFFF00;
    border-radius: 30px;
`

const Form = styled.form`
text-align:center;
margin-top:50px;
`

const Center = styled.div`
margin-top:50px;
margin-bot:50px;
`


const TextBox = styled.input`
width: 623px;
height: 68px;
text-align:center;
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 10px;
`

const Label = styled.label`

font-family: Lora;
font-style: normal;
font-weight: bold;
font-size: 32px;
text-align:center;
`



import Header from '../components/Header';

const Home = () => {
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          username: "",
          password: ""
        },
        onSubmit: values => {
          console.log(values);
          navigate("generator", { replace: true });
        },
        validationSchema: Yup.object().shape({
            username: Yup.string()
              .required("Username is required")
              .max(15, "Username is too long"),
          password: Yup.string()
              .required("Password is required")
              .min(6, "Password must contain a minimum of 6 characters")
          }),
      })

    return (
        <div>
<<<<<<< HEAD
            <Header />
            <form onClick={formik.handleSubmit}>
                <div>
                    <label htmlFor="username" >Username</label>
                    <input 
                        name="username"
                        type="text" 
                        placeholder="Enter your username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.username && <p>{formik.errors.username}</p>}
                </div>
                
                <div>
                    <label htmlFor="password" >Username</label>
                    <input 
                        name="password"
                        type="text" 
                        placeholder="Enter your password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.password && <p>{formik.errors.password}</p>}
                </div>
=======
            <Header/>
            <Form onClick={formik.handleSubmit}>
                <Center>
                    <div>
                        <Label htmlFor="username" >Username</Label>
                    </div>
                    <div>
                        <TextBox 
                            name="username"
                            type="text" 
                            placeholder="Enter your username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.username && <p>{formik.errors.username}</p>}
                    </div>
                </Center>
                <Center>
                    <div>
                        <Label htmlFor="password" >Password</Label>
                    </div>
                    <div>
                        <TextBox 
                            name="password"
                            type="password" 
                            placeholder="Enter your password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password && <p>{formik.errors.password}</p>}
                    </div>
                </Center>
                <SubmitButton type="submit" value="Login"></SubmitButton>
>>>>>>> 7378c6688d254e5610b2df77d3d1daaa8e46383e
                
            </Form>
        </div>
    );
};

export default Home;