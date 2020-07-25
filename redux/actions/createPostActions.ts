import PostModel from '../../models/PostModel';
import BlogService from '../../services/BlogService';
import { Dispatch, AnyAction } from 'redux';

enum actionTypes {
  SEND_POST_REQUEST = 'SEND_POST_REQUEST',
  SEND_POST_SUCCESS = 'SEND_POST_SUCCESS',
  SEND_POST_FAILURE = 'SEND_POST_FAILURE',

  TOGGLE_SENT_STATUS = 'TOGGLE_SENT_STATUS',
}

const postSendRequested = (): AnyAction => ({
  type: actionTypes.SEND_POST_REQUEST,
});

const postSendError = (error: Error): AnyAction => ({
  type: actionTypes.SEND_POST_FAILURE,
  payload: error,
});

const postSendSuccess = (): AnyAction => ({
  type: actionTypes.SEND_POST_SUCCESS,
});

const toggleSentStatus = (): AnyAction => ({
  type: actionTypes.TOGGLE_SENT_STATUS,
});

const sendPost = (dispatch: Dispatch) => async (post: PostModel): Promise<void> => {
  const blogService = new BlogService();
  try {
    dispatch(postSendRequested());
    blogService.sendPost(post);
    dispatch(postSendSuccess());
    dispatch(toggleSentStatus());
    setTimeout(() => {
      dispatch(toggleSentStatus());
    }, 800);
  } catch (err) {
    dispatch(postSendError(err));
  }
};

export { actionTypes, sendPost };
