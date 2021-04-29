import axios from "axios";

const url = "https://flashbacks-tara.herokuapp.com/posts";

export const fetchPosts = () =>
  axios.get("https://flashbacks-tara.herokuapp.com/posts");
export const createPost = (newPost) =>
  axios.post("https://flashbacks-tara.herokuapp.com/posts", newPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
