import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory, Link} from "react-router-dom";
import { toEdit } from '../../actions/posts'


function EditPost(props) {
  // let { location, Image, Content } = props.post 
  let history = useHistory();  
  const [LOCATION, setLocation] = useState("");
  // const [ IMAGE, setImage] = useState("");
  const [ CONTENT, setContent] = useState("");
  console.log(props.post)
  function handleOnSubmit(event) {
    event.preventDefault();
    let Post = new FormData();
    Post.append("location", LOCATION)
    // Post.append("image", props.post.image)
    Post.append( "content", CONTENT)
    Post.append("user_id", props.user.id)
    props.toEdit(props.post.id, Post)
    history.push("/home")
  }


  if(!props.user){
    return (<div>{<br></br>}{<br></br>} {<br></br>} {<br></br>}User not found!, <Link to="/">Log In</Link></div>)
  }
  else {
    document.title = "Edit Post"
    console.log(props)
  return(
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleOnSubmit}>
        <label>Location</label>
        <input type="text" onChange={e => setLocation(e.target.value)} name="location"/><br></br>
        <label>Image:</label>
        {props.loading ? "Loading" : <img src={props.post.image} width="400" alt=""/>}{<br></br>}
        <label>Content</label>
        <input type="text" onChange={e => setContent(e.target.value)} name="content"/><br></br>
          <input type="submit"/>
      </form>
    </div>)
  }
}
  

const mapStateToProps = state => {
  console.log(state.users.loading, state.posts.currentPost)
 return {
   user: state.users.currentUser,
   post: state.posts.currentPost,
   
   loading: state.posts.loading
 }
}

export default connect(mapStateToProps, { toEdit })(EditPost);