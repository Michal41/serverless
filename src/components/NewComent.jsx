import React, { useState } from 'react';

const NewComent = (props) => {
  const { currentUser } = props;
  const [comentContent, setComentContent] = useState('');
  const handleCreatePost = (event) => {
    event.preventDefault();
    // props.createPost(comentContent)
    setComentContent('')
  }
  return (
    <div>
      {currentUser.id &&
        <form onSubmit={handleCreatePost}>
          New coment
          <input
            value={comentContent}
            onChange={(e) => setComentContent(e.target.value)}
          />
          <button type="submit"> Submit </button>
        </form>
      }
    </div>
  );
};

export default NewComent;
