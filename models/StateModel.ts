import PostsListStateModel from './PostsListStateModel';
import PostStateModel from './PostStateModel';
import CreatePostStateModel from './CreatePostStateModel';
import UpdatePostStateModel from './UpdatePostStateModel';

export default interface StateModel {
  postsList: PostsListStateModel;
  post: PostStateModel;
  createPost: CreatePostStateModel;
  updatePost: UpdatePostStateModel;
}
