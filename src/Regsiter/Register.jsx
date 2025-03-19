import React, { useEffect } from 'react'
import './Register.css'
import Pageheader from '../Component/Pageheader/Pageheader'
import logo from '../assets/skylarklogo-OOgv47hm.png'
import { Link } from 'react-router-dom'

const Register = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      })
  return (
    <>
    {/* <Pageheader title="Create an Account"/> */}
   <div className='allform'>
   <div className="register ">
        <div className="register-top">
            <div className="register-logo brand-image-wrapper">
                <img src={logo} alt="logo" className='bg-dark' />
                <h2>Create Account</h2>
            </div>
        </div>
        <form className='register-form '>
            <label htmlFor="phone">Phone No.</label>
            <input type="number" name='phone' placeholder='Mobile Number' />
            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='Your email' />
            <label htmlFor="passworld">Password</label>
            <input type="password" name='password' placeholder='Password' />
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name='password' placeholder='Confirm Password' />
            <div className="register-checkboxes">
                <input type="checkbox" name='remember' />
                <label htmlFor="remember">Remember me</label>
            </div>
            <button className='register-btns'>Register</button>
            <p className='register-btns-mssg'>Already have an account? <Link className='register-btns-link' to="/login">Login here</Link></p>
        </form>
    </div>

   </div>
    </>
  )
}

export default Register