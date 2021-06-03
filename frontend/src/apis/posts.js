import axios from 'axios';
import { postsIndexUrl,postsCreateUrl ,postsShowUrl,postsDeleteUrl} from '../urls/index'

export const fetchPosts = () => {
  return axios.get(postsIndexUrl)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
export const fecthPostsShow = (postId) => {
  return axios.get(postsShowUrl(postId))
  .then(res => {
    return res.data.posts
  })
  .catch((e) => console.error(e))
}

export const createPosts = (data) => {
  return axios.post(postsCreateUrl,data)
}
export const deletePosts = (postId) => {
  return axios.delete(postsDeleteUrl(postId))
}