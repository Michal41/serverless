
import React from 'react'
import {Link} from 'react-router-dom';
import {createUseStyles} from 'react-jss'

const NavBar = (props) => {
  const classes = useStyles()
  const { currentUser, logOut } = props;
  return (
    <nav className={`${classes.navBarContainer}`}>
      <Link to='/' className={classes.ask} style={{textDecoration: "none"}}><span className="spanColor">Ask me something!</span></Link>
    <button className={"navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`${classes.NavBar} different`} id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <div className='header'>
          <div className='logo'>
          <div><i className="far fa-comment-dots"></i><span>Ask me!</span></div>
          </div>
          </div>
          <div className="buttons">
        {!currentUser.id && <Link className="nav-item nav-link active" to='/sign-up'> Sign up</Link> }
        {!currentUser.id && <Link className="nav-item nav-link active" to='/sign-in'> Sign in</Link> }
            {currentUser.id && <button className='btn btn-danger' onClick={logOut}> sign out</button>}
            </div>
      </div>
    </div>
      </nav>
  )
}

const useStyles = createUseStyles({
  navBarContainer: {
    position: 'sticky',
    width: '100%',
    top: '0px',
    height: "8vh",
    backgroundColor: "#000",
    display: 'flex'
  },
  ask: {
    color: "white",
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '17px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
  NavBar: {
    fontSize: '17px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }
})

export default NavBar;


// navbar navbar-expand-lg navbar-light bg-light