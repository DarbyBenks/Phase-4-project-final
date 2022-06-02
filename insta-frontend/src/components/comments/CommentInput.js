import React from 'react'
import { connect } from 'react-redux'
import { createComment } from '../../actions/comments'

class CommentInput extends React.Component {

  state = {
    content: ""
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    let comment = new FormData();
    comment.append("content", this.state.content)
    comment.append("user_id", this.props.user.id)
    comment.append("post_id", this.props.post.id)
    console.log(comment)
    this.props.createComment(comment)
    this.setState({
      content: ""
    })
  }

  handleOnChange = (event) => {
    this.setState({
      content: event.target.value,
      user_id: this.props.user.id,
      post_id: this.props.post.id
    }, console.log(this.state.content)) 
    
  }

  render(){
    return(<div>  
      
      <form onSubmit={this.handleOnSubmit }>
          <label>Comment:</label>
          <input type="tex" onChange={this.handleOnChange} value={this.state.content}/>{<br></br>}
          <button type="submit" value="Comment"  >Comment</button>
        </form>
    </div>)
  }
  
}

const mapStateToProps = state => {
  console.log(state.users.loading, state.comments.comments)
 return {
   user: state.users.currentUser,
   post: state.posts.currentPost,
   loading: state.posts.loading,
 }
}

export default connect(mapStateToProps, {createComment})(CommentInput)