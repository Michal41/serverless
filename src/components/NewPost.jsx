import React, { useState } from 'react';

const NewPost = (props) => {
  const { currentUser } = props;
  const [postContent, setPostContent] = useState('');
  const handleCreatePost = (event) => {
    event.preventDefault();
    props.createPost(postContent)
    setPostContent('')
  }
  return (
    <div>
      {currentUser.id &&
        <form onSubmit={handleCreatePost}>
          New Post
          <input
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
          <button type="submit"> Submit </button>
        </form>
      }
    </div>
  );
};

export default NewPost;
