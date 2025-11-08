import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post, index) => (
        <Article key={post.id} date={post.date} title={post.title} preview={post.preview}/>
      ))}
    </main>
  );
}

export default ArticleList;
