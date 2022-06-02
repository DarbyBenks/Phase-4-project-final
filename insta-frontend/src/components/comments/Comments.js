import React from 'react'
import Comment from './Comment'
function Comments(props) {
  console.log(props)
  const allcomments = props.comments.map( comment => < Comment  content={comment.content} user={comment.user}/>)
  return(
  <div>
    {allcomments}
  </div>)
}

export default Comments 