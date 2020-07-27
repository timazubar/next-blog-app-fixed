import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NextPage } from 'next';
import { Dispatch } from 'redux';
import { Button, Form, Modal } from 'react-bootstrap';
import styled from 'styled-components';

import AppLayout from '../../components/AppLayout';
import PostModel from '../../models/PostModel';
import StateModel from '../../models/StateModel';

import { sendPost } from '../../redux/actions/createPostActions';

interface State {
  isSent: boolean;
  isLoading: boolean;
  isError: boolean;
}

interface Props extends State {
  sendPost: (post: PostModel) => Promise<void>;
}

const CreatePost: NextPage<Props> = () => {
  const isSent = useSelector((state: StateModel) => state.createPost.isSent);
  const isLoading = useSelector((state: StateModel) => state.createPost.isLoading);
  const isError = useSelector((state: StateModel) => state.createPost.isError);
  const dispatch = useDispatch();

  const sendPostAction = sendPost(dispatch);

  const titleRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <AppLayout>
      <Wrapper>
        <StyledHeading>CreatePost</StyledHeading>
        <Form
          onSubmit={(e): void => {
            e.preventDefault();
            const title = titleRef.current.value;
            const body = contentRef.current.value;
            contentRef.current.value = '';
            titleRef.current.value = '';
            sendPostAction({ title, body });
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
        {isSent && (
          <Modal.Dialog>
            <StyledModalBody>Your Post was created!</StyledModalBody>
          </Modal.Dialog>
        )}
        {isError && (
          <Modal.Dialog>
            <ErrorModal>Error!</ErrorModal>
          </Modal.Dialog>
        )}
      </Wrapper>
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

export default CreatePost;
