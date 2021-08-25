import React, { useState } from 'react'
import "../styles/ContactMe.css";

function ContactMe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [inValidMessage, setInValidMessage] = useState('')

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  const handleInputChange = (e) => {
    var inputType = e.target.name;
    var inputValue = e.target.value;

    if(inputType === 'name') {
      setName(inputValue)
    } else if (inputType === 'email') {
      setEmail(inputValue)
    } else {
      setMessage(inputValue)
    }
  }

  const validationCheck = (e) => {

    console.log('eeee', e.target.name)
    var inputType = e.target.name;
    var inputValue = e.target.value;

    if(inputType === 'name' && inputValue === '') {
      setInValidMessage('Name is Required!!!')
    } else if (inputType === 'email' && inputValue === '') {
      setInValidMessage('Email is Required!!!')
    } else if (inputType === 'email' && !validateEmail(inputValue)) {
      setInValidMessage('Please input a Valid Email')
    } else if (inputType === 'message' && inputValue === '') {
      setInValidMessage('Message is Required!!!')
    }
    setTimeout(() => {
      setInValidMessage('')
    }, 1500);
  }



  return (

    <div className='container'>
      <h2>Contact Me</h2>
      <h4>{inValidMessage}</h4>
      <form className='form'>

        <label>Name:</label>
        <input
          value={name}
          name='name'
          onChange={handleInputChange}
          onBlur={validationCheck}
        ></input>

        <label>Email:</label>
        <input
          value={email}
          name='email'
          onChange={handleInputChange}
          onBlur={validationCheck}
        ></input>

        <label>Message:</label><br></br>
        <textarea
          value={message}
          name='message'
          onChange={handleInputChange}
          onBlur={validationCheck}
        ></textarea>
          <button type="button" disabled>Submit</button>
      </form>
    </div>
  )
}

export default ContactMe;

