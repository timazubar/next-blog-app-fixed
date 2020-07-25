import PostsListStateModel from './PostsListStateModel';
import PostStateModel from './PostStateModel';
import CreatePostStateModel from './CreatePostStateModel';

export default interface StateModel {
  postsList: PostsListStateModel;
  post: PostStateModel;
  createPost: CreatePostStateModel;
}
