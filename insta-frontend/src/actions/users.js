

export const getUsers = () =>{
  return ( dispatch ) => {
    dispatch({type: 'LOADING_USERS'})
      fetch('/users')
      .then(resp => resp.json())
      .then(users =>  dispatch({type: "USERS_LOADED", payload: users}) )
  }
}

export const showUser = (id) =>{
  return ( dispatch ) => {
    dispatch({type: 'SHOW_USER'}, id)
      fetch(`/users/${id}`)
      .then(resp => resp.json())
      .then(users =>  dispatch({type: "SHOWING_USER", payload: users}) )
  }
}

export const  getUser = ( user ) => {
  return (dispatch) => {
    dispatch({type: "GET_USER"}, user)
      fetch("/session", {
        method: 'POST',
        body: user,
        header:{
          "Content-Type": 'multipart/form-data'
        } 
      })
      .then( resp => resp.json() )
      .then( foundUser => {
        // debugger
        return dispatch({type:'GOT_USER', payload: foundUser})
      })
  }
}

export const  createUser = ( user ) => {
  return ( dispatch ) => {
    dispatch({type: "CREATE_USER"}, user)
    // debugger;
      fetch("/users", {
        method: 'POST',
        body: user,
        header:{
          "Content-Type": 'multipart/form-data'
        } 
      })
      .then(resp => resp.json())
      .then(newUser => {
        // debugger;
        return dispatch({type: 'CREATED_USER', payload: newUser})})
      }
  }

export const  editUser = (id, user ) => {
  return ( dispatch ) => {
    dispatch({type: "EDIT_USER"}, id, user)
       debugger;
    fetch(`/users/${id}`, {
      method: 'PATCH',
      body: user,
      header:{
        "Content-Type": 'multipart/form-data'
      } 
    })
    .then(resp => resp.json())
    .then( User => {
          // debugger;
    return dispatch({type: 'EDITED_USER', payload: User})
    })
  }
}


export const  logOut = ( user ) => {
  return ( dispatch ) => {
    dispatch({type: "LOG_OUT"}, user)
    // debugger;
      fetch(`/logout`, {
        method: 'DELETE',
        body: user,
        header:{
          "Content-Type": 'multipart/form-data'
        } 
      }
      )
      .then(dispatch({type: "LOGGED_OUT", payload: user})
    )
  }
}
