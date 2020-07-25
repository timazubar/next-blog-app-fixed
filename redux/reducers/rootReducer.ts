import { combineReducers } from 'redux';
import postsListReducer from './postsListReducer';
import postReducer from './postReducer';
import createPostReducer from './createPostReducer';

const rootReducer = combineReducers({
  postsList: postsListReducer,
  post: postReducer,
  createPost: createPostReducer,
});

export default rootReducer;
