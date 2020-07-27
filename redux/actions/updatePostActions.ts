import { AnyAction, Dispatch } from 'redux';
import BlogService from '../../services/BlogService';
import PostModel from '../../models/PostModel';

enum ActionTypes {
  UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST',
  UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS',
  UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE',
  TOGGLE_UPDATED_STATUS = 'TOGGLE_UPDATED_STATUS',
}

const postUpdateRequested = (): AnyAction => ({
  type: ActionTypes.UPDATE_POST_REQUEST,
});

const postUpdateSuccess = (): AnyAction => ({
  type: ActionTypes.UPDATE_POST_SUCCESS,
});

const postUpdateError = (error: Error): AnyAction => ({
  type: ActionTypes.UPDATE_POST_FAILURE,
  payload: error,
});

const toggleUpdatedStatus = (): AnyAction => ({
  type: ActionTypes.TOGGLE_UPDATED_STATUS,
});

const updatePost = (dispatch: Dispatch) => async (post: PostModel) => {
  const blogService = new BlogService();
  try {
    dispatch(postUpdateRequested());
    blogService.updatePost(post);
    dispatch(postUpdateSuccess());
    dispatch(toggleUpdatedStatus());
  } catch (error) {
    dispatch(postUpdateError(error));
  }
};

export { ActionTypes, updatePost };
