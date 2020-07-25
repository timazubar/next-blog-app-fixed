import PostModel from './PostModel';

export default interface PostsListStateModel {
  postsList: PostModel[];
  isLoading: boolean;
  isError: boolean;
}
