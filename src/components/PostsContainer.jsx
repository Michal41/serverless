import React, { useEffect, useState } from 'react';
import NewPost from './NewPost';
import {firestore } from "../firebase/firebase.utils";
import SinglePost from './SinglePost';

const PostsContainer = (props) =>{
  const [posts, setPosts] = useState([]);
  const { currentUser, category } = props;
  const postsArr = []
  useEffect(() => {
    firestore.collection("Posts").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        if(doc.data().category===category){
          postsArr.push({ ...doc.data(), docId: doc.id })
        }
      });
    });
    setPosts(postsArr);
  }, []);
  const createPost = async (content)  => {
    await firestore.collection("Posts").doc().set({
      content: content,
      author: currentUser.id,
      authorDisplayName: currentUser.displayName,
      category: category,
      coments: [],
    })
    const postsArr = []

    await firestore.collection("Posts").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        if(doc.data().category===category){
          postsArr.push({ ...doc.data(), docId: doc.id })
        }
      });
    });
    setPosts(postsArr);
  }



  const createComent = async (coment, docid)  => {
    const otherComents = posts.filter(item => item.docId === docid)[0].coments
    console.log(otherComents)
    await firestore.collection("Posts").doc(docid).update({
      coments: [ ...otherComents, {
        coment: coment,
        author: currentUser.id,
        authorDisplayName: currentUser.displayName }]
    })

    const postsArr = []
    await firestore.collection("Posts").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        if(doc.data().category===category){
          postsArr.push({ ...doc.data(), docId: doc.id })
        }
      });
    });
    setPosts(postsArr);
  }



  return (
    <div>
      {posts.map(post => (
        <SinglePost createComent={createComent} currentUser={currentUser} key={post.docId} post={post} />
      ))}
      posts container
      <NewPost createPost={createPost} currentUser={currentUser}/>
    </div>
  );
};

export default PostsContainer;