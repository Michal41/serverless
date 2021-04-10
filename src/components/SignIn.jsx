import { signInWithGoogle, auth } from "../firebase/firebase.utils.js";
import React, { useState } from 'react';


const SingIn =() => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await auth.signInWithEmailAndPassword(email,password);
      setEmail('')
      setPassword('')
    } catch(error){
      console.log(error);
    }
  }
  const handleChange = (event) => {
    const onchange = eval(`set${event.target.name}`)
    onchange(event.target.value)
  }
  return (
  <div>
    <span> Sign in with your email and password </span>
    <form onSubmit = {handleSubmit}>
      <input
        name="Email"
        type="email"
        value={email}
        onChange={handleChange}
        required
      />
      <input
        name="Password"
        type="password"
        value={password}
        onChange={handleChange}
        required
      />
      <div>
        <button type="submit" value="Submit Form" > Sign in  </button>
        <button onClick={signInWithGoogle} value="Submit Form" > Sign in with google </button>
      </div>
    </form>
  </div>

  )
}
export default SingIn;