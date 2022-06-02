import {  combineReducers } from 'redux'

import postsReducer from './postsReducer'
import usersReducer from './usersReducer'
import commentsReducer from './commentsReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  posts:  postsReducer,
  comments: commentsReducer
})

export default rootReducer