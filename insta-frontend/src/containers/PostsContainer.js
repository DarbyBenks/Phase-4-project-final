import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from '../components/posts/Posts'
import { getPosts } from '../actions/posts'
class PostsContainer extends Component {

  componentDidMount(){
    this.props.getPosts()
  }

  render(){
    return(
    <div>
      
    {this.props.loading ? <h3>...loading...</h3> :< Posts posts={this.props.posts}  user={this.props.user}/> } 
      
    </div>)
  }
}

const mapStateToProps = state => {
  // console.log(state.posts, state.users.currentUser)
  return{
    user: state.users.currentUser,
    posts: state.posts.posts,
    loading: state.posts.loading}
  
}

export default connect(mapStateToProps, { getPosts })(PostsContainer);