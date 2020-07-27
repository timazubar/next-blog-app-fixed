import { ActionTypes } from '../actions/updatePostActions';
import { AnyAction } from 'redux';

const initialState = {
  isError: false,
  isLoading: true,
  isUpdated: false,
};

type updatePostState = typeof initialState;

const updatePostReducer = (state = initialState, action: AnyAction): updatePostState => {
  switch (action.type) {
    case ActionTypes.UPDATE_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ActionTypes.UPDATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ActionTypes.UPDATE_POST_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case ActionTypes.TOGGLE_UPDATED_STATUS:
      return {
        ...state,
        isLoading: false,
        isUpdated: !state.isUpdated,
      };

    default:
      return { ...state };
  }
};

export default updatePostReducer;
