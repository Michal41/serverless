import './App.css';
import SingIn from './components/SignIn';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Component } from 'react'
import SignUp from './components/SignUp';

class App extends Component{
  constructor(props){
    super(props);
    this.state={ user: { id: '' }}
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot( (snapShot) => {
        this.setState({ user:{
            id:snapShot.id,
            ...snapShot.data()
        }});
      });
    }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    console.log(this.state)
    return(
    <div>
      <button onClick={() => {auth.signOut()} }> sign out</button>
    <SingIn/>
      <br />
      <br />
      <br />
      <br />
    <SignUp />
    </div>
    )
  }
}

export default App;
