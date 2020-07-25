import { actionTypes } from '../actions/postActions';
import { AnyAction } from 'redux';

const initialState = {
  post: null,
  isLoading: true,
  isError: false,
};

type PostState = typeof initialState;

const postReducer = (state = initialState, action: AnyAction): PostState => {
  switch (action.type) {
    case actionTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
      };
    case actionTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return { ...state };
  }
};

export default postReducer;
