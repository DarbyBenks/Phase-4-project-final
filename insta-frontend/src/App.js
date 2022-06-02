

import React, { Component }  from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { connect } from 'react-redux'

import NavBar from './components/SessionNavBar'
import PostInput from './components/posts/PostInput'
import PostShow from './components/posts/PostShow'
// import PostShowMe from './components/posts/PostShowMe'
import EditPost from './components/posts/EditPost'
import SessionUser from './components/users/SessionUser';
import EditSessionUser from './components/users/EditSessionUser';
import LogOutSession from './components/users/LogOutSession';

import SignUpSuccessful from "./containers/SignUpSuccessful"
import LandingPage from './containers/LandingPage';
import SignUp from './containers/SignUp';
import PostsContainer from './containers/PostsContainer';


import './App.css';

class App extends Component {
  
  render(){
    // console.log(this.props.user.error)
    if (this.props.user.error || undefined ) {
      return (
        <div className="App">
          <div className="container-fluid">
          <Router >  
            <Link to="/">Log In or Sign Up</Link>
            <Switch >  
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          </Router>
          </div>
        </div>
      ) 
    

    } else if(this.props.user !== this.props.user.error){
          
          return (
            <div className="App">
              <div className="container-fluid">
              <Router >   
                <Route path="/home" render={props => <NavBar {...props} />} />
                <Route path="/feed" render={props => <NavBar {...props} />} />
                <Route path="/posts/new" render={props => <NavBar {...props} />} />
                <Route path="/users/edit" render={props => <NavBar {...props} />} />
                <Route path="/logout" render={props => <NavBar {...props} />} />
                <Switch >  
                  <Route exact path="/" component={LandingPage} />
                  <Route exact path="/signup" component={SignUp} />
                  <Route exact path="/signup/successful" component={SignUpSuccessful}/>
                  <Route exact path="/feed" component={PostsContainer}  />
                  <Route exact path="/home" component={SessionUser} />
                  <Route exact path="/posts/new" component={PostInput} />
                  <Route exact path="/users/edit" component={EditSessionUser} />
                  <Route exact path="/logout" component={LogOutSession} />
                  
                  {/* <Route path={`/:usersname/posts/:postsId/me`} component={PostShowMe} /> */}
                  <Route exact path={`/:usersname/posts/:postsId`} component={ PostShow } />
                  <Route exact path={`/posts/:postsId/edit`} component={ EditPost } />
                 
                </Switch>
              </Router>
              </div>
            </div>)
        }
      }
    }
  

const mapStateToProps = state => {
  // console.log(state.users.loading, state.users.users)
  return {
    user: state.users.currentUser
  }
}
export default connect(mapStateToProps)(App);
