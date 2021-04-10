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
  logOut = () => {
    auth.signOut();
    this.setState({user: { id: '' }})
  }
  render(){
    console.log(this.state)
    return(
    <div>
      {this.state.user.id &&
        <div>
          <button onClick={this.logOut}> sign out</button>
          <h1> logged user: {this.state.user.displayName}</h1>
        </div>
      }
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
