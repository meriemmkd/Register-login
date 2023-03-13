import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom';
import welcomhere from './welcomehere.png';


function Register  ()  {
  return (
    <div className='main-register'>
       
        <div className='register-contain'>
          
        <div className='left-side'>
                  <div className='welcomenote'>
                    <h3 className='welcomeNote'>Welcome to our community</h3>
                 </div>
                 <div className='welcomImg'>
                    <img src={welcomhere}  id='welcm-img' alt='' srcSet='' ></img>
                </div>


        </div>
        <div className='right-side'>
        <div className="registercontainer">
        <h2>Create an accout</h2>
        <div className="input-container">
        <label>ID</label>
        <input type="Email" name="uname" required placeholder='ID' />
        {/* {renderErrorMessage("uname")} */}
      </div>
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
      
      <div className="input-container">
        <label>Confirm password </label>
        <input type="password" name="pass" required placeholder='Confirm password'/>
        {/* {renderErrorMessage("pass")} */}
      </div>
      <button className="loginBut">
        <p>Submit</p>
      </button>
      <div className='footer'>
        <h4>Already have an account?   <Link to='/'>Login</Link></h4>
      </div>
      </div>

        </div>
        
        </div>
        </div>
    
  )
}

export default Register