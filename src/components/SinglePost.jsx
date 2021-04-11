import React, { useEffect, useState } from 'react';
import {createUseStyles} from 'react-jss'
import NewComent from './NewComent';

const SinglePost = (props) => {
  const { currentUser } = props;
  const classes = useStyles()
  const [post, setPost] = useState('');

  useEffect(() => {
    setPost(props.post)
  }, []);

  return (
    <div className={classes.SinglePost}>
      post content: {post.content} < br/>
      author: {post.authorDisplayName} < br/>
      < br/>< br/>
      <NewComent currentUser={currentUser} />
    </div>
  )
}

const useStyles = createUseStyles({
  SinglePost: {
    border: '2px solid gray',
    width: '50%',
    margin: 'auto',
    marginBottom: '1em',
  }
})

export default SinglePost;
