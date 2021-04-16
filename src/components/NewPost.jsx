import React, { useState } from 'react';
import {createUseStyles} from 'react-jss'

const NewPost = (props) => {
  const classes = useStyles()
  const { currentUser } = props;
  const [postContent, setPostContent] = useState('');
  const handleCreateComment = (event) => {
    event.preventDefault();
    props.createPost(postContent)
    setPostContent('')
  }
  return (
    <div>
      {currentUser.id &&
        <form onSubmit={handleCreateComment}>
          New Post
          <input className={classes.NewPost}
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
          <button type="submit"> Submit </button>
        </form>
      }
    </div>
  );
};

const useStyles = createUseStyles({
  NewPost: {
    border: '4px double gray',
    borderRadius: '18px',
    
    width: '80%',
    marginBottom: '25px',
    backgroundColor: 'lightblue'
  }
})

export default NewPost;
