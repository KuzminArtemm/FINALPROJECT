import { axiosInstance } from "../../config/axios";
import { ADD_NEW_POST, SET_ALL_POSTS } from "../types/postsTypes";

export const setAllPosts = (allPosts) => ({
  type: SET_ALL_POSTS,
  payload: allPosts,
});

export const loadAllPosts = (searchValue) => async (dispatch) => {
  const response = await axiosInstance.get("posts/search/", {
    params: {
      query: searchValue,
    },
  });

  const postsFromApi = response.data;

  dispatch(setAllPosts(postsFromApi));
};

export const addNewPost = (allPosts) => ({
  type: ADD_NEW_POST,
  payload: allPosts,
});

export const queryNewPost = (post) => async (dispatch) => {
  const bodyObject = JSON.parse(post);

  const response = await axiosInstance.post("posts", bodyObject);

  const postFromApi = response.data();

  dispatch(addNewPost(postFromApi));
};
