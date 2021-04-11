import React, { useEffect, useState } from 'react';
import NewPost from './NewPost';
import {firestore } from "../firebase/firebase.utils";
import SinglePost from './SinglePost';

const PostsContainer = (props) =>{
  const [posts, setPosts] = useState([]);
  const { currentUser } = props;
  const postsArr = []
  useEffect(() => {
    firestore.collection("Posts").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        postsArr.push({ ...doc.data(), docId: doc.id })
      });
    });
    setPosts(postsArr);
  },[]);

  const createPost = async (content)  => {
    await firestore.collection("Posts").doc().set({
      content: content,
      author: currentUser.id,
      authorDisplayName: currentUser.displayName,
    })
    const postsArr = []
    await firestore.collection("Posts").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        postsArr.push({ ...doc.data(), docId: doc.id })
      });
    });
    setPosts(postsArr);
  }
  return (
    <div>
      {posts.map(post => (
        <SinglePost currentUser={currentUser} key={post.docId} post={post} />
      ))}
      posts container
      <NewPost createPost={createPost} currentUser={currentUser}/>
    </div>
  );
};

export default PostsContainer;