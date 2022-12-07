import React from 'react'
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Login() {

    const nav=useNavigate();

    const loginHandler=()=>{
      nav("home")
    }
  

  return (
    <div>
        <center>
        <Button variant="info" onClick={loginHandler} className=''>Login</Button>
        </center>
        </div>
  )
}

export default Login