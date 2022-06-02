import React, { Component } from 'react'

class User extends Component {
  render(){
    return(
      <div>
        {<hr></hr>}
        {this.props.username} {<br/>}{<br/>}
        {<img src={this.props.image } width="300" alt=""/>}
      </div>
    )
  }
}

export default User