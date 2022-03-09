import React from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik"
import * as Yup from 'yup'

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
                
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Home;