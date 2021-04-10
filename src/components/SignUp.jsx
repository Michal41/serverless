

import React from 'react';

import {auth, createUserProfileDocument } from "../firebase/firebase.utils";


class SignUp extends React.Component{
  constructor(){
    super();
    this.state = {
      displayName:"",
      email:"",
      password:"",
      confirmPassword:""
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword }= this.state;
    if( password !== confirmPassword ){
      alert("password and confirmPasword not match");
      return;
    }

    try{

      const { user } = await auth.createUserWithEmailAndPassword(email,password)
      await createUserProfileDocument(user, {displayName});
      this.setState({
        displayName:"",
        email:"",
        password:"",
        confirmPassword:""
      });

    }catch (error){
      console.log(error);
    }
  }

  render(){
    const {displayName, email, password, confirmPassword }= this.state;
    return(
      <div className="sign-up">
        <h2 className="title"> Sign Up </h2>
        <span>Sign Up with your email and passoword </span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>

          <input
            type="text"
            name="displayName"
            value={displayName}
            label="Display name"
            onChange={this.handleChange}
            placeholder="displayName"
            required
          />

          <input
            type="email"
            name="email"
            value={email}
            label="email"
            placeholder="email"
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            value={password}
            label="password"
            placeholder="password"
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="confirm password"
            placeholder="password"
            onChange={this.handleChange}
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
}

export default SignUp;