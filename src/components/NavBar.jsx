
import React from 'react'
import {Link} from 'react-router-dom';
import {createUseStyles} from 'react-jss'

const NavBar = (props) => {
  const classes = useStyles()
  const { currentUser, logOut } = props;
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to='/' className={classes.ask}>AskMe!</Link>
    <button className={"navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className={"nav-item nav-link active"} to='/'> Home</Link>
        {!currentUser.id && <Link className="nav-item nav-link active" to='/sign-up'> Sign up</Link> }
        {!currentUser.id && <Link className="nav-item nav-link active" to='/sign-in'> Sign in</Link> }
        {currentUser.id && <button className='btn btn-danger' onClick={logOut}> sign out</button> }
      </div>
    </div>
    </nav>
  )
}

const useStyles = createUseStyles({
  ask: {
    color: "#99a845",
  }
})

export default NavBar;