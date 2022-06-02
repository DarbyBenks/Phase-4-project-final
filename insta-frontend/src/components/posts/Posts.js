import React, { Component } from 'react'
import Post from './Post'
import { Link } from 'react-router-dom'
class Posts extends Component {
  render(){
    console.log(this.props)
    if(!this.props.user){
      return (<div>{<br></br>}{<br></br>} {<br></br>} {<br></br>}User not found!, <Link to="/">Log In</Link></div>)
    }
    else {
      
      const allPosts = this.props.posts.map( (post, i)  => <Post key={i} id={post.id}  location={post.location} content={post.content} image={post.image} user={post.user}/> )
      document.title = "Feed"
      
    return(
      <div>
        <ul>
          {this.props.loading ? <h3>...loading...</h3> : allPosts}
        </ul>
      </div>
    )}
  }
}

export default Posts