const DEFAULT_API_LOCALHOST = 'http://localhost:3000/api/v1'

export const postsIndex = `${DEFAULT_API_LOCALHOST}/posts`
export const postsShow = (PostId) =>
  `${DEFAULT_API_LOCALHOST}/posts/${PostId}`


