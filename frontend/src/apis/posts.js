import axios from 'axios';
import { postsIndexUrl,postsCreateUrl } from '../urls/index'

export const fetchPosts = () => {
  return axios.get(postsIndexUrl)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}

export const createPosts = (data) => {
  return axios.post(postsCreateUrl,data)
}