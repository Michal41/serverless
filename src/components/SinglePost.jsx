import React, { useEffect, useState } from 'react';
import {createUseStyles} from 'react-jss'
import ComentsList from './ComentsList';
import NewComent from './NewComent';

const SinglePost = (props) => {
  const { currentUser, post, createComent } = props;
  const classes = useStyles()
  return (
    <div className={classes.SinglePost}>
      post content: {post.content} < br/>
      author: {post.authorDisplayName} < br/>
      < br/>
      <ComentsList coments={post.coments}/>
      < br/>
      <NewComent docId={post.docId} createComent={createComent} currentUser={currentUser} />
    </div>
  )
}

const useStyles = createUseStyles({
  SinglePost: {
    border: '2px solid gray',
    width: '80%',
    margin: 'auto',
    marginBottom: '1em',
    backgroundColor: 'lightblue'
  }
})

export default SinglePost;
