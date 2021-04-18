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
    <div className="maininput">
      {currentUser.id &&
        <form onSubmit={handleCreateComment}>
        <input className={classes.NewPost}
          placeholder="Write question"
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
  
  }
})

export default NewPost;
