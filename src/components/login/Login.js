import React from 'react'
import './Login.css';
import {Link} from 'react-router-dom';
import welcome from './welcome.png';


const Login = () => {
  return (
    <div className='main-login'>
       
      
          <div className='login-contain'>
            <div className='left-side'>
            <div className="registercontainer">
            <h1>Sign in</h1>

      <div className="input-container">
        <label>Email </label>
        <input type="Email" name="uname" required placeholder='Email' />
        {/* {renderErrorMessage("uname")} */}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required placeholder='Password'/>
        {/* {renderErrorMessage("pass")} */}
      </div>

      <button className="loginBut">
        <p>Submit</p>
      </button>
      <div className='footer'>
        <h4>Don't have an account?   <Link to='/Register'>Register now.</Link></h4>
      </div>
    
    </div>
            </div>
            <div className='right-side'>
                <div className='welcomenote'>
                    <h3>Welcome back!</h3>
                </div>
                <div className='welcomeImg'>
                    <img src={welcome}  id='wel-img' alt='' srcSet='' ></img>
                </div>
                </div>
</div>
        </div>
        

      
  
  )
}

export default Login