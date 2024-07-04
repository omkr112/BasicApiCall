import React, { useState } from 'react'

function Create() {
    const [title,setTitle] = useState('')
    const [body, setBody] = useState('')
    const [response,setResponse] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            title: title,
            body: body
        };

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });
            const result = await response.json();
            setResponse(result);
        } catch(error){
            console.error('Error:', error);
            setResponse({error: 'Error while creating post'});
        }
    }
  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
            Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </label><br/>
        <label>
            Body: <textarea value={body} onChange={(e) => setBody(e.target.value)}/>
        </label><br/>
        <button type="submit">Create Post</button>
      </form>
      {response && <pre>{JSON.stringify(response,null,2)}</pre>}
    </div>
  )
}

export default Create
