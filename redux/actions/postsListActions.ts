import PostModel from '../../models/PostModel';
import BlogService from '../../services/BlogService';
import { Dispatch, AnyAction } from 'redux';

enum actionTypes {
  FETCH_POSTS_LIST_REQUEST = 'FETCH_AUTHORS_LIST_REQUEST',
  FETCH_POSTS_LIST_SUCCESS = 'FETCH_AUTHORS_LIST_SUCCESS',
  FETCH_POSTS_LIST_FAILURE = 'FETCH_AUTHORS_LIST_FAILURE',
}

const postsRequested = (): AnyAction => ({
  type: actionTypes.FETCH_POSTS_LIST_REQUEST,
});

const postsError = (error: Error): AnyAction => ({
  type: actionTypes.FETCH_POSTS_LIST_FAILURE,
  payload: error,
});

const postsLoaded = (postsList: PostModel[]): AnyAction => ({
  type: actionTypes.FETCH_POSTS_LIST_SUCCESS,
  payload: postsList,
});

const fetchPosts = async (dispatch: Dispatch): Promise<void> => {
  const blogService = new BlogService();
  try {
    dispatch(postsRequested());
    const postsList = await (await blogService.getPosts()).reverse();
    dispatch(postsLoaded(postsList));
  } catch (err) {
    dispatch(postsError(err));
  }
};

export { actionTypes, fetchPosts };
