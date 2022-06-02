
export default (state = { posts:[], myPosts:[], currentPost: '', loading: false}, action ) => {
  switch(action.type){

    case "LOADING_POSTS":
      return {
        ...state,
        loading: true
      }
    case 'POSTS_LOADED':
      return {
        posts: action.payload,
        loading: false
      }
  

    case "SHOW_POST":
      return {...state,
        loading: true
      }

    case "SHOWING_POST":
      return {
        ...state,
        currentPost: action.payload,
        loading: false
      }

    case "CREATE_POST":
      return{
        ...state,
        loading: true
      }

    case "CREATED_POST":
      return {
        ...state,
        posts: state.posts.concat(action.payload), 
        loading: false
      }

    case "EDIT_POST":
      return {
        ...state,
        loading: true
      }

    case "EDITED_POST":
      return {
        ...state,
        currentPost: action.payload,
        loading: false
      }

    case "DELETE_POST":
      return {
        ...state,
        currentPost: action.payload,
        loading: true
      }

    case "DELETED_POST":
      // debugger;
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.payload),
        loading: false
      }

    default: 
    return state
  }

}