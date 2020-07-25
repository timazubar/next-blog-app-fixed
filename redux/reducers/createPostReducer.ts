import { actionTypes } from '../actions/createPostActions';
import { AnyAction } from 'redux';

const initialState = {
  isLoading: false,
  isError: false,
  isSent: false,
};

type createPostState = typeof initialState;

const createPostReducer = (state = initialState, action: AnyAction): createPostState => {
  switch (action.type) {
    case actionTypes.SEND_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.SEND_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.SEND_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case actionTypes.TOGGLE_SENT_STATUS:
      return {
        ...state,
        isSent: !state.isSent,
      };
    default:
      return { ...state };
  }
};

export default createPostReducer;
