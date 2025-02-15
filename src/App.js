import React, { useState, useEffect } from 'react';

function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Data fetching failed');
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default BlogPosts;
