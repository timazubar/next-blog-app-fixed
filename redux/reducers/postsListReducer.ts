import { actionTypes } from '../actions/postsListActions';
import { AnyAction } from 'redux';

const initialState = {
  postsList: [],
  isLoading: true,
  isError: false,
};

type PostsListState = typeof initialState;

const postsListReducer = (state = initialState, action: AnyAction): PostsListState => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.FETCH_POSTS_LIST_SUCCESS:
      return {
        ...state,
        postsList: action.payload,
        isLoading: false,
      };
    case actionTypes.FETCH_POSTS_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return { ...state };
  }
};

export default postsListReducer;
