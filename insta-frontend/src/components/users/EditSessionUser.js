import React, {  useState } from 'react'
import { connect } from 'react-redux'
import { editUser } from '../../actions/users'
import { useHistory, Link} from "react-router-dom";

function EditSessionUser(props){
  let history = useHistory();
  const [UserName, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [PassWord, setPassword] = useState("");
  const [PhoneNum, setPhoneNum] = useState("");
  const [Image, setImage] = useState("");

  const {username, email, phoneNum, id} = props.user

  // debugger
  function handleOnSubmit(event) {
    event.preventDefault()
    let user = new FormData();
    user.append("username", UserName)
    user.append("email", Email)
    user.append("phoneNum", PhoneNum)
    user.append("password", PassWord)
    user.append("image", Image)
    props.editUser(id, user)
    // console.log(user)
    // debugger
    history.push("/home");
  }

  if(!props.user){
    return (<div>{<br></br>}{<br></br>} {<br></br>} {<br></br>}User not found!, <Link to="/">Log In</Link></div>)
  }
  else {
    document.title = "Edit " + username 
  return(
    <div>
      <br></br>
      <br></br>
      <li>All Field Required</li>
      <form onSubmit={handleOnSubmit}>
            <label>Username: </label>
            <input type="text" name="username" onChange={e => setUsername(e.target.value)}  placeholder={username}/><br></br>
            <label>Email: </label>
            <input type="text" name="email" onChange={e => setEmail(e.target.value)} placeholder={email}/><br></br>
            <label>Number: </label>
            <input type="number"name="phoneNum" onChange={e => setPhoneNum(e.target.value)} placeholder={phoneNum}/><br></br>
            <label>Image: </label>
            <input type="file" onChange={e => setImage(e.target.files[0])} name="image" accept="image/png, image/jpeg" /><br></br>
            <label>password: </label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)} /><br></br>
            <input type="submit" value="Ready!"/>
          </form>
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

export default connect(mapStateToProps, { editUser })(EditSessionUser);