import React from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik"
import * as Yup from 'yup'
import styled from 'styled-components'
import Header from '../components/Header';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LoginContainer = styled.div`
    width: 35%;
    padding: 20px;
    margin: 30px;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

const Label = styled.label`
    font-family: 'Lora', serif;
    font-size: 24px;
    line-height: 41px;
    font-weight: 700;
`

const TextBox = styled.input`
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 5px;
`

const ErrorMessage = styled.span`
    font-size: 14px;
    color: red;
    padding-left: 10px;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

const SubmitButton = styled.button`
    background: #EFFF00;
    border: none;
    border-radius: 30px;
    color: black;
    font-family: 'Lora', serif;
    font-size: 20px;
    font-weight: 700;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 10px 40px;
    margin-bottom: 30px;
    cursor: pointer;
`

const Home = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          username: "",
          password: ""
        },
        onSubmit: values => {
          console.log(values);
          navigate("/generator");
        },
        validationSchema: Yup.object().shape({
            username: Yup.string()
              .required("Username is required")
              .max(15, "Username is too long"),
          password: Yup.string()
              .required("Password is required")
              .min(6, "Password must contain a minimum of 6 characters")
        }),
        validateOnChange: false,
      })

    return (
        <HomeContainer>
            <Header/>

            <LoginContainer>
                <form onClick={formik.handleSubmit}>
                    <InputContainer>
                        <Label htmlFor="username">Username</Label>
                        <TextBox 
                            name="username"
                            type="text" 
                            placeholder="Enter your username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                        <ErrorMessage>
                            {formik.errors.username && <p>{formik.errors.username}</p>}
                        </ErrorMessage>
                    </InputContainer>

                    <InputContainer>
                        <Label htmlFor="password">Password</Label>
                        <TextBox 
                            name="password"
                            type="password" 
                            placeholder="Enter your password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <ErrorMessage>
                            {formik.errors.password && <p>{formik.errors.password}</p>}
                        </ErrorMessage>
                    </InputContainer>

                    <ButtonContainer>
                        <SubmitButton type="submit">Login</SubmitButton>
                    </ButtonContainer>
                    
                </form>
            </LoginContainer>
        </HomeContainer>
    );
};

export default Home;