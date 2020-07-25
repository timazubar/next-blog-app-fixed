import React from 'react';
import Link from 'next/link';
import PostModel from '../models/PostModel';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

interface Props {
  post: PostModel;
}

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <StyledCard>
      <Card.Body>
        <Card.Link>
          <Link href="/posts/[id]" as={`posts/${id}`}>
            <a>Go to post</a>
          </Link>
        </Card.Link>
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{body}</StyledText>
        <StyledId>id: {id}</StyledId>
      </Card.Body>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 1rem 0;
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

export default Post;
