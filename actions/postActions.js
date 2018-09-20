import { ALL_POSTS, NEW_POST, DELETE_POST } from './types';
import apiFetch from './../api';
import {NavigationActions} from 'react-navigation';

//dispatch(NavigationActions.navigate({routeName: 'Posts'}))
export const allPosts = () => dispatch => {
  apiFetch('/posts').then((resp) => resp.json())
    .then(posts => {
      dispatch({
        type: ALL_POSTS,
        payload: posts
      })
    })
    .catch(error => {
      console.log(error);
    })
}

export const newPost = (post) => dispatch => {
  apiFetch('/posts', 'POST', {
    post: post
  })
  .then(resp => {
    console.log(resp)
    if (resp.ok){
      resp.json().then(post => {
        dispatch({
          type: NEW_POST,
          payload: post
        })
        dispatch(
          NavigationActions.navigate({routeName: 'Posts'})
        );
      })
    } else {
      resp.json().then(resp => {
        console.log(resp.errors)
      })
    }
  })
}

export const deletePost = (postId) => dispatch => {
  apiFetch(`/posts/${postId}`, 'DELETE')
    .then(resp => {
      console.log(resp)
      if(resp.ok){
        dispatch({
          type: DELETE_POST,
          payload: postId
        })
      } else {
        console.log(resp)
      }
    })
    .catch(error => {
      console.log(error)
    })
}