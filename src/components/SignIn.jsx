import React from 'react';
import { signInWithGoogle, auth } from "../firebase/firebase.utils.js";


class SingIn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({ email: "", password: ""})
    } catch(error){
      console.log(error);
    }
  }
  handleChange = (event) => {
    const {value, name} = event.target;
    this.setState({ [name]: value })
  }

  render () {
    return (
      <div className="sign-in">
        <span> Sign in with your email and password </span>
        <form onSubmit = {this.handleSubmit}>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            label="email"/>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            label="password"/>
          <div className="buttons">
            <button type="submit" value="Submit Form" > Sign in </button>
            <button onClick={signInWithGoogle} isGogleSignIn value="Submit Form" > Sign in with google </button>
          </div>
        </form>
      </div>
    )
  }
}


export default SingIn;