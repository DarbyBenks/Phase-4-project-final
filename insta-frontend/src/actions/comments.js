export const getComments = () =>{
  return ( dispatch ) => {
    dispatch({type: 'LOADING_COMMENTS'})
      fetch('/comments')
      .then(resp => resp.json())
      .then(Comments => {
        // debugger;
        dispatch({type: "COMMENTS_LOADED", payload: Comments})
      })
  }
}

export const createComment = ( c ) => {
  return ( dispatch ) => {
    dispatch({type: "CREATE_COMMENT"}, c)
    fetch("/comments", {
      method: 'POST',
      body: c,
      header: {
        "Content-Type": 'multipart/form-data'
      }
    })
    .then( resp => resp.json())
    .then(newPost => {
      // debugger
      return dispatch({type: "CREATED_COMMENT", payload: newPost})
    })
  }
}