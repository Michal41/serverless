import React, { useState } from 'react';

const NewComent = (props) => {
  const { currentUser, createComent, docId } = props;
  const [comentContent, setComentContent] = useState('');
  const handleCreateComent = (event) => {
    event.preventDefault();
    createComent(comentContent, docId)
    setComentContent('')
  }
  return (
    <div>
      {currentUser.id &&
        <form onSubmit={handleCreateComent}>
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
