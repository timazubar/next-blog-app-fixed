import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { NextPage } from 'next';
import { Button, Form, Modal } from 'react-bootstrap';
import styled from 'styled-components';

import AppLayout from '../../components/AppLayout';
import PostModel from '../../models/PostModel';
import StateModel from '../../models/StateModel';
import { updatePost } from '../../redux/actions/updatePostActions';

interface State {
  isLoading: boolean;
  isUpdated: boolean;
  isError: boolean;
}

interface Props extends State {
  updatePost: (post: PostModel) => Promise<void>;
}

const UpdatePost: NextPage<Props> = ({ updatePost, isError, isLoading, isUpdated }) => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  return (
    <AppLayout>
      <Form>
        <Wrapper>
          <StyledHeading>UpdatePost</StyledHeading>
          <Form
            onSubmit={(e): void => {
              e.preventDefault();
              const title = titleRef.current.value;
              const body = contentRef.current.value;
              // contentRef.current.value = '';
              // titleRef.current.value = '';
              updatePost({ title, body });
            }}
          >
            <StyledFormGroup>
              <Form.Label htmlFor="title">
                Post title: <input type="text" name="title" ref={titleRef} />
              </Form.Label>

              <Form.Label htmlFor="body">
                Contents:
                <Form.Control as="textarea" name="body" ref={contentRef} />
              </Form.Label>
              <Button type="submit" disabled={isLoading}>
                Post!
              </Button>
            </StyledFormGroup>
          </Form>
          {isUpdated && (
            <Modal.Dialog>
              <StyledModalBody>Your Post was updated!</StyledModalBody>
            </Modal.Dialog>
          )}
          {isError && (
            <Modal.Dialog>
              <ErrorModal>Error!</ErrorModal>
            </Modal.Dialog>
          )}
        </Wrapper>
      </Form>
    </AppLayout>
  );
};

const StyledModalBody = styled(Modal.Body)`
  font-size: 1.5em;
  font-weight: 500;
  background-color: green;
  color: white;
`;

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

const StyledHeading = styled.h2`
  margin: 2rem;
`;

const StyledFormGroup = styled(Form.Group)`
  display: flex;
  flex-direction: column;
`;

const mapStateToProps = (state: StateModel): State => ({
  isError: state.updatePost.isError,
  isLoading: state.updatePost.isLoading,
  isUpdated: state.updatePost.isUpdated,
});

const mapDispatchToProps = (dispatch: Dispatch): { updatePost: (post: PostModel) => Promise<void> } => ({
  updatePost: updatePost(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);
