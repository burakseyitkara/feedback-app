import React from "react";

function App() {
  const title = "Blog post";
  const body = "This is a blog post";
  const comments = [
    { id: 1, text: "Commeent 1" },
    { id: 2, text: "Commeent 2" },
    { id: 3, text: "Commeent 3" },
  ];

  const loading = false;
  const showComments = true;

  const commentBlock = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <h1>{title}</h1>
      <p> {body} </p>

      {showComments && commentBlock}
    </div>
  );
}

export default App;
