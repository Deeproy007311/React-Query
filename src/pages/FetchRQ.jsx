import { fetchPost } from "../API/Api";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../components/UI/Loader";

export const FetchRQ = () => {
  const {data, isPending} = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
  })

  if (isPending) {
    return <Loader />;
  }

  

  return (
    <section className="posts-container">
      <h1 className="page-title">Traditional Fetch Posts</h1>

      <ul className="posts-grid">
        {data ?.map((curPost) => {
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