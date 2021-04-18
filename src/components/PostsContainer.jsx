import React, { useEffect, useState } from 'react';
import NewPost from './NewPost';
import {firestore } from "../firebase/firebase.utils";
import SinglePost from './SinglePost';
import replaceCurseWords from '../replaceCurseWords';

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
  }, [category]);
  const createPost = async (content)  => {
    const cleanContent= await replaceCurseWords(content)
    await firestore.collection("Posts").doc().set({
      content: cleanContent,
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
    const cleanContent= await replaceCurseWords(coment)
    const otherComents = posts.filter(item => item.docId === docid)[0].coments
    await firestore.collection("Posts").doc(docid).update({
      coments: [ ...otherComents, {
        coment: cleanContent,
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
      <br/><NewPost createPost={createPost} currentUser={currentUser}/><br/>
      {posts.map(post => (
        <SinglePost createComent={createComent} currentUser={currentUser} key={post.docId} post={post} />
      ))}
    </div>
  );
};

export default PostsContainer;