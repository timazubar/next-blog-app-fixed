import { combineReducers } from 'redux';
import postsListReducer from './postsListReducer';
import postReducer from './postReducer';
import createPostReducer from './createPostReducer';
import updatePostReducer from './updatePostReducer';

const rootReducer = combineReducers({
  postsList: postsListReducer,
  post: postReducer,
  createPost: createPostReducer,
  updatePost: updatePostReducer,
});

export default rootReducer;
