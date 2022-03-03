import React from 'react';


export const Post = ({post, summary = false}) => (
  <article>
    {summary ? <h2>{post.title}</h2> : <h1>{post.title}</h1>}
    <hr/>
    <p>{summary ? post.body.substring(0, 100) : post.body}</p>
    <hr/>
  </article>
);