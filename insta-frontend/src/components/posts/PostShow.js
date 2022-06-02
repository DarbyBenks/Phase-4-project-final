import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import Comments from '../comments/Comments'

import CommentInput from '../comments/CommentInput'
class PostShow extends Component {
 
  

  

  render(){
    if(!this.props.user ||  undefined){
      return(<div>{<br></br>}{<br></br>} {<br></br>} {<br></br>}User not found! <Link to="/">Log In</Link></div>)
    } else {
      
      document.title = "Show post"
      return(<div>
        {<br></br>}
        {this.props.loading ? "Loading" : this.props.post.location}{<br></br>}
        {this.props.loading ? "Loading" : <img src={this.props.post.image} width="600" alt=""/>}{<br></br>}
        {this.props.loading ? "Loading" : this.props.post.content}{<br></br>}
        {<br></br>}
        <CommentInput />
        
        {this.props.loading? "Loading" : < Comments comments={this.props.comments.filter( c => c.post_id === this.props.post.id)}/>}
        
      </div>
      )
    }
  }
}

const mapStateToProps = state => {
   console.log(state.users.loading, state.comments.comments)
  return {
    user: state.users.currentUser,
    post: state.posts.currentPost,
    loading: state.posts.loading,
    comments: state.comments.comments,
    loadingComments: state.comments.loading
  }
}

export default connect(mapStateToProps)(PostShow) 