import React, { useState } from 'react'

import { connect } from 'react-redux'
import { getUser } from '../actions/users'
import { getComments } from '../actions/comments'
import {useHistory} from "react-router-dom";
function LandingPage(props) {

  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  function handleOnSubmit(event) {
    event.preventDefault()
    if ( !username || !password) {
      history.push("/")
    } else {
    let user = new FormData();
    user.append("username", username)
    user.append("password", password)
    props.getUser(user)
    history.push("/feed");
    props.getComments()
    }
  }

  function signUpForm() {
    history.push("/signup")
  }
  document.title = "Welcome"
  return(<>
          <h1>Welcome to Instagram</h1>{<br></br>}
          
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label>User name: </label>
            <input type="text" name="username" onChange={ e => setUsername(e.target.value)}/><br></br>
          </div> 
          <div className="form-group">
            <label>password:</label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)}/><br></br>
          </div>
            <input type="submit" value="Log In" className="btn btn-primary" />{<br></br>}

        </form>{<br></br>}

          <button className="btn btn-primary" onClick={signUpForm}>Sign Up</button>
    </>
  )
}

export default connect(null, { getUser, getComments })(LandingPage)