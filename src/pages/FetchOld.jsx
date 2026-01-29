import { useEffect, useState } from "react";
import { fetchPost } from "../API/Api";

export const FetchOld = () => {
  const [post, setPosts] = useState([]);

  const getPostData = async () => {
    try {
      const res = await fetchPost();
      res.status === 200 ? setPosts(res.data) : [];
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <section className="posts-container">
      <h1 className="page-title">Traditional Fetch Posts</h1>

      <ul className="posts-grid">
        {post.map((curPost) => {
          return (
            <li className="post-card" key={curPost.id}>
              <h2>{curPost.title}</h2>
              <p>{curPost.body}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};