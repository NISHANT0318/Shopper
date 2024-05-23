import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Css/LoginSignup.css';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post('/auth/login', {
        email, password
      }, {
        withCredentials: true, // Ensure cookies are included in requests
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login successful, Welcome!");
        navigate('/');
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <form onSubmit={loginUser}>
          <h1>Login</h1>
          <div className="loginsignup-fields">
            <input type="email" placeholder='Email Address' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            <input type="password" placeholder='Password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
          </div>
          <button type="submit">Login</button>
          <p className="loginsignup-login">
            Don't have an account?
            <Link to="/login">
              <span>Sign Up Here</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
