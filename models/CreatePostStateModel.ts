import PostModel from './PostModel';

export default interface CreatePostStateModel {
  isError: boolean;
  isSent: boolean;
  isLoading: boolean;
  post: PostModel[];
}
