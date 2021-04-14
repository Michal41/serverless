
import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  const { currentUser, logOut } = props;
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Navigation</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to='/'> Home</Link>
          {!currentUser.id &&
            <div>
              <Link className="nav-item nav-link active" to='/sign-up'> sign-up</Link>
              <Link className="nav-item nav-link active" to='/sign-in'> sign-in</Link>
            </div>
          }
          {currentUser.id &&
            <button className='btn btn-danger' onClick={logOut}> sign out</button>
          }
        </div>
      </div>
    </nav>
  )
}

export default NavBar;