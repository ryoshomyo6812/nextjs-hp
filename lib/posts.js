import fetch from "node-fetch";
const url = "https://jsonplaceholder.typicode.com/posts/";

export async function getAllPostsData() {
  const res = await fetch(new URL(url));
  const posts = await res.json();
  return posts;
}

export async function getAllPostIds() {
  const res = await fetch(new URL(url));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getPostData(id) {
  const res = await fetch(new URL(`${url}/${id}/`));
  const post = await res.json();

  return {
    post,
  };
}
