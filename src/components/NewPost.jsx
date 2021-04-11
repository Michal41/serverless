import React, { useState } from 'react';
import {firestore } from "../firebase/firebase.utils";


const NewPost = (props) => {
  const { currentUser } = props;
  const [postContent, setPostContent] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
      firestore.collection("Posts").doc("Posts").set({
      content: postContent,
      state: currentUser.id,
  })
  setPostContent('')
  }
  return (
    <div>
      new post
      <form onSubmit={handleSubmit}>
        <input
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default NewPost;
