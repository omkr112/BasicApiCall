import React, { useState } from 'react';

function Update() {
  const [postId, setPostId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      title: title,
      body: body,
    };

    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }

      const result = await res.json();
      setResponse(result);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while updating the post.');
      setResponse(null);
    }
  };

  return (
    <div>
      <h2>Update Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Post ID:
          <input
            type="number"
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Body:
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Update Post</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}

export default Update;
