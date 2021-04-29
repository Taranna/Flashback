import { FETCH_ALL, CREATE, DELETE, LIKE } from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload; //actual posts

    case CREATE:
      return [...posts, action.payload];
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

//keep all the posts except the one equal to the action.payload

// spread all the posts and
//  the new post is stored in
//  action.payload

//action.payload is the updated Post

//posts are the states
