import React from 'react';
import NewPost from './NewPost';

const PostsContainer = (props) =>{
  const { currentUser } = props;
  return (
    <div>
      posts container
      <NewPost currentUser={currentUser}/>
    </div>
  );
};

export default PostsContainer;