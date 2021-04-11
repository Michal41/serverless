import React, { useEffect, useState } from 'react';
import NewPost from './NewPost';
import {firestore } from "../firebase/firebase.utils";

const PostsContainer = (props) =>{
  const [posts, setPosts] = useState([]);
  const { currentUser } = props;
  const postsArr = []
  useEffect(() => {
    firestore.collection("Posts").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        postsArr.push(doc.data())
      });
    });
    setPosts(postsArr);
  },[]);

  const createPost = (content) => {
    firestore.collection("Posts").doc().set({
      content: content,
      author: currentUser.id,
      authorDisplayName: currentUser.displayName,
    })
    setPosts([...posts, {
      content: content, author: currentUser.id,
      authorDisplayName: currentUser.displayName,
      key: currentUser.id  }]);
  }
  return (
    <div>
      {posts.map(post => (
        <div key={post.author+post.content}>
          post content: {post.content} < br/>
          post author: {post.authorDisplayName} < br/>
          < br/>< br/>
        </div>
      ))}
      posts container
      <NewPost createPost={createPost} currentUser={currentUser}/>
    </div>
  );
};

export default PostsContainer;