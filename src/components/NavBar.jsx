
import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  const { currentUser, logOut } = props;
  return(
    <div>
      {currentUser.id &&
        <div>
          <button onClick={logOut}> sign out</button>
          <h1> logged user: {currentUser.displayName}</h1>
        </div>
      }
    <Link to='/'> Home</Link>
    <Link to='/sign-up'> sign-up</Link>
    <Link to='/sign-in'> sign-in</Link>

    </div>
  )
}

export default NavBar;