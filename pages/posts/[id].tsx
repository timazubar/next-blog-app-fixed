import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Card, Modal } from 'react-bootstrap';
import styled from 'styled-components';

import AppLayout from '../../components/AppLayout';

import PostModel from '../../models/PostModel';
import StateModel from '../../models/StateModel';

import { fetchPostByID } from '../../redux/actions/postActions';

interface Props {
  post?: PostModel;
  isError?: boolean;
}

const Post: NextPage<Props> = ({ post, isError }) => {
  return (
    <AppLayout>
      {isError ? (
        <Modal.Dialog>
          <ErrorModal>Error!</ErrorModal>
        </Modal.Dialog>
      ) : (
        <Wrapper>
          <StyledCard>
            <Link href="/posts/[id]/edit" as={`/posts/${post.id}/edit`}>
              <a>Edit post</a>
            </Link>
            <Card.Body>
              <Link href="/">
                <a>&larr;Go back to posts list</a>
              </Link>
              <StyledTitle>{post.title}</StyledTitle>
              <StyledText>{post.body}</StyledText>
              <StyledId>id: {post.id}</StyledId>
            </Card.Body>
          </StyledCard>
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

const StyledCard = styled(Card)`
  margin: 1rem 0;
  width: 50%;
`;

const StyledTitle = styled(Card.Title)`
  font-size: 2rem;
`;

const StyledId = styled(Card.Subtitle)`
  font-size: 0.8em;
  font-weight: 400;
`;

const StyledText = styled(Card.Text)`
  font-size: 1.5em;
`;

Post.getInitialProps = async ({ query, store }): Promise<{ post: PostModel }> => {
  const { dispatch } = store;
  await fetchPostByID(query.id, dispatch);
  const { post } = store.getState().post;

  return { post };
};

const mapStateToProps = (state: StateModel): { isError: boolean } => ({
  isError: state.post.isError,
});

export default connect(mapStateToProps)(Post);
