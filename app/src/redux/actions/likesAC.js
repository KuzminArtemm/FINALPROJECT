import { API_TOKEN } from "../../constants";
import { LIKE_POST } from "../types/likesType";


export const setLikePost = (_id) => ({
    type: LIKE_POST,
    payload: _id,
  })

  export const setLikePostQuery = (_id) => async (dispatch) => {
    const response = await fetch(`https://api.react-learning.ru/posts/likes/${_id}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      }
    })
    const postsFromApi = await response.json()
    dispatch(setLikePost(postsFromApi))
  }
  
  export const deleteLikePost = (postsFromApi) => ({
    type: LIKE_POST,
    payload: postsFromApi,
  })
  
  export const deleteLikePostQuery = (_id) => async (dispatch) => {
    const response = await fetch(`https://api.react-learning.ru/posts/likes/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
    }})
    const postsFromApi = await response.json()
    console.log({setLikePostQuery})
    dispatch(deleteLikePost(postsFromApi))
  }