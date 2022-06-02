import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getUsers }  from '../actions/users'; 
// import LandingPage from '../components/root/LandingPage'
// import SignUp from '../components/root/SignUp'
import Users from '../components/users/Users'


class UsersCointainer extends Component {

  // componentDidMount(){
  //   this.props.getUsers()
  // }

  render(){
    return(
      <div>
        <h1>Users container</h1>
        <Users users={this.props.users} loading={this.props.loading} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state.users.loading, state.users.users)
  return {
    users: state.users.users,
    loading: state.users.loading
  }
}



export default connect(mapStateToProps, { getUsers })(UsersCointainer)