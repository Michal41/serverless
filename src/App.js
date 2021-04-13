import './App.css';
import SingIn from './components/SignIn';
import { auth, createUserProfileDocument, firestore } from "./firebase/firebase.utils";
import { Component } from 'react'
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import PostsContainer from './components/PostsContainer';

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
    return(
      <div>
        <Router>
          <NavBar currentUser={this.state.user} logOut={this.logOut} />
          <Switch>
            <Route exact path="/" render={()=>
              (<PostsContainer currentUser={this.state.user} />)} />
            <Route exact path="/sign-in" component={SingIn} />
            <Route exact path="/sign-up" component={SignUp} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;