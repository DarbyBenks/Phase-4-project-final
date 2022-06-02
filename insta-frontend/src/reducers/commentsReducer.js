
export default (state = { comments:[], currentComment: '', loading: false}, action ) => {
  switch(action.type){

    case "LOADING_COMMENTS":
      console.log("loading comments")
      return {
        ...state,
        loading: true
      }
    case 'COMMENTS_LOADED':
      // debugger;
      console.log("comments loaded")
      return {
        comments: action.payload,
        loading: false
      }

      case "CREATE_COMMENT":
        return{
          ...state,
          loading: true
        }
  
      case "CREATED_COMMENT":
        return {
          ...state,
          comments: state.comments.concat(action.payload), 
          loading: false
        }

    default: 
    return state
  }
}