import axios from 'axios';
import { postsIndex } from '../urls/index'

export const fetchPosts = () => {
  return axios.get('http://localhost:3000/api/v1/posts/3')
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}