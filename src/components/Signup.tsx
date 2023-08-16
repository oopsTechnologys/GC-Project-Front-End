import React from 'react';
import './Signup.css';
import ftimage from '../assets/images/football.jpg'

function Signup() {
  return (
    <div className='row' >
      <div className='right-side'>
        <div className='title'>
          <h1>oops tech</h1>
          
        </div>
        <form>
          <input
            type='text'
            placeholder='First Name'
          />
          <input
            type='text'
            placeholder='Last Name'
          />
          <input
            type='email'
            placeholder='Email'
          />
          <input
            type='password'
            placeholder='Password'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;


