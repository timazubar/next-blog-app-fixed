import PostModel from './PostModel';

export default interface UpdatePostStateModel {
  isError: boolean;
  isLoading: boolean;
  isUpdated: boolean;
  post: PostModel;
}
