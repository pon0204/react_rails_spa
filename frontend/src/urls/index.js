const DEFAULT_API_LOCALHOST = 'http://localhost:3000/api/v1'

export const postsIndexUrl = `${DEFAULT_API_LOCALHOST}/posts/`
export const postsCreateUrl = `${DEFAULT_API_LOCALHOST}/posts`
export const postsShowUrl = (PostId) =>
  `${DEFAULT_API_LOCALHOST}/posts/${PostId}`
export const postsDeleteUrl = (PostId) =>
  `${DEFAULT_API_LOCALHOST}/posts/${PostId}`


