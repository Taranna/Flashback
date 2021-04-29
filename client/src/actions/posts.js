import { FETCH_ALL, CREATE, DELETE } from "../constants/actionTypes";

import * as api from "../api/index.js"; //
//ACTION CREATOR :functions which return actions
//Action is object with type and payload
//redux-thunk in the below functions getPosts() and createPOsts()
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(); //data represents the posts

    dispatch({ type: FETCH_ALL, payload: data }); //ACTION same as :dispatch(action)
  } catch (error) {
    console.log(error.message);
  }
};
//const action={type:'FETCH_ALL',payload:[]}
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//after creating an action GOTO Reducers

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
