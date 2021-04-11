import React, { useState } from 'react';
import {auth, createUserProfileDocument } from "../firebase/firebase.utils";
import {createUseStyles} from 'react-jss'

const SignUp = () => {
  const classes = useStyles()
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (event) => {
    const onchange = eval(`set${event.target.name}`)
    onchange(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if( password !== confirmPassword ){
      alert("password and confirmPasword not match");
      return;
    }
    try{
      const { user } = await auth.createUserWithEmailAndPassword(email,password)
      await createUserProfileDocument(user, {displayName});
      setDisplayName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }catch (error){
      console.log(error);
    }
  }

  return (
    <div>
    <h2 className={classes.title}> Sign Up </h2>
    <span>Sign Up with your email and passoword </span>

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="DisplayName"
        value={displayName}
        label="Display name"
        onChange={handleChange}
        placeholder="displayName"
        required
      />

      <input
        type="email"
        name="Email"
        value={email}
        placeholder="email"
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="Password"
        value={password}
        placeholder="password"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="ConfirmPassword"
        value={confirmPassword}
        placeholder="password"
        onChange={handleChange}
        required
      />
      <button
        type="submit"
      >
        Create account
      </button>
    </form>

  </div>
  )
}

const useStyles = createUseStyles({
  title: {
    color: 'green',
    textAlign: 'left',
    // text-align: 'left',
  }
})


export default SignUp;