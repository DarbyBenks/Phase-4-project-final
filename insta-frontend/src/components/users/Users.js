import React from 'react'
import User from './User'

class Users extends React.Component {
  
  render(){
  // const userList = this.props.users.map( (user, i) => <li key={i}> {user.username} </li>)

    const allUsers = this.props.users.map( (user, i) => <User key={i} id={user.id} username={user.username} email={user.email} phoneNum={user.phoneNum} image={user.image}/>)
    return(
      <div>
        Users
        <ul>
          {this.props.laoding ? <h3>...loading...</h3> : allUsers }      
        </ul>
      </div>
    )
  }
}

export default (Users)