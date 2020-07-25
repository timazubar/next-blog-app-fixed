import React from 'react';
import styled from 'styled-components';

import Post from './Post';
import PostModel from '../models/PostModel';

interface Props {
  posts: PostModel[];
}

const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <StyledDiv>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default PostsList;
