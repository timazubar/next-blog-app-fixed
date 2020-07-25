import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

import AppLayout from '../components/AppLayout';
import PostsList from '../components/PostsList';
import { fetchPosts } from '../redux/actions/postsListActions';
import PostModel from '../models/PostModel';
import StateModel from '../models/StateModel';
import { connect } from 'react-redux';

interface Props {
  postsList: PostModel[];
  isError?: boolean;
}

const Index: NextPage<Props> = ({ postsList, isError }) => {
  return (
    <AppLayout>
      {isError ? (
        <Modal.Dialog>
          <ErrorModal>Error!</ErrorModal>
        </Modal.Dialog>
      ) : (
        <Wrapper>
          <h2>Latest Posts</h2>
          <PostsList posts={postsList} />
        </Wrapper>
      )}
    </AppLayout>
  );
};

const ErrorModal = styled(Modal.Body)`
  font-size: 1.5em;
  font-weight: 500;
  background-color: maroon;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Index.getInitialProps = async ({ store }: NextPageContext): Promise<{ postsList: PostModel[] }> => {
  const { dispatch } = store;
  await fetchPosts(dispatch);
  const { postsList } = store.getState().postsList;

  return { postsList };
};

const mapStateToProps = (state: StateModel): { isError: boolean } => ({
  isError: state.postsList.isError,
});

export default connect(mapStateToProps)(Index);
