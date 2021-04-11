
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
    </div>
  )
}

export default NavBar;