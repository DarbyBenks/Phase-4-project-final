import React from 'react'
import { connect } from 'react-redux'
import { logOut } from "../../actions/users"
import { useHistory, Link } from 'react-router-dom'


function LogOutSession(props) {
  console.log(props)
  let history = useHistory();
  function logOut() {
    props.logOut(props.user)
    history.push('/')
  }
  
  if(!props.user){
    return (<div>{<br></br>}{<br></br>} {<br></br>} {<br></br>}User not found!, <Link to="/">Log In</Link></div>)
  }
  else {
    document.title = "Log out?"
  return(
  <div>
    {<br></br>}
    {<br></br>}
    {<br></br>}
    <button className="btn btn-primary" onClick={logOut}>Log Out</button>
  </div>
  )}
}

const mapStateToProps = state => {
  // console.log(state.users.loading, state.users.currentUser)
  return {
    user: state.users.currentUser,
    loading: state.users.loading
  }
}


export default connect(mapStateToProps, { logOut })(LogOutSession)