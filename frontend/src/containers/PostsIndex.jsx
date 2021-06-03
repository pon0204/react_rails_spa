

import React, { Fragment, useReducer, useEffect,useState } from 'react';
import styled from "styled-components";
import {PostsCreate} from './PostCreate'

// --- ここから追加 ---
import { Link } from "react-router-dom";
// --- ここまで追加 ---

// apis
import { fetchPosts,deletePosts } from '../apis/posts';

// reducers
import {
  initialState,
  postsActionTyps,
  postsReducer,
} from '../reducers/posts';

// --- ここから追加 ---
// constants
import { REQUEST_STATE } from '../constants';


const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
`;

const MainLogoImage = styled.img`
  height: 90px;
`

const MainCoverImageWrapper = styled.div`
  text-align: center;
`;

const MainCover = styled.img`
  height: 600px;
`;

// --- ここから追加 ---
const postsContentsList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 150px;
`;

const postsContentWrapper = styled.div`
  width: 350px;
  height: 300px;
  padding: 48px;
`;

const postsImageNode = styled.img`
  width: 100%;
`;

const MainText = styled.p`
  color: black;
  font-size: 18px;
`;

const SubText = styled.p`
  color: black;
  font-size: 12px;
`;
// --- ここまで追加 ---

export const PostsIndex = (props) => {

  const [state, dispatch] = useReducer(postsReducer, initialState);

  useEffect(() => {
    postDispatch()
    }, [])

    const deleteClick = (postId) => {
      postFunc(deletePosts(postId))
    }

  const postFunc = (postFunc) => {
  postFunc.then( () =>{
    postDispatch()
    })
  }

  const postDispatch = () => {
    dispatch({ type: postsActionTyps.FETCHING })
    fetchPosts()
    .then((data) =>
    dispatch({
      type: postsActionTyps.FETCH_SUCCESS,
        payload: {
          posts: data.posts
        }
      }))
  }
  
  return (
    <Fragment>
      <HeaderWrapper>
      </HeaderWrapper>
      <MainCoverImageWrapper>

      </MainCoverImageWrapper>
      <PostsCreate 
      postFunc={postFunc}
      />
      <postsContentsList>
        {
          state.fetchState === REQUEST_STATE.LOADING ?
              state.postsList.map((item, index) =>
              // <Link to={`/posts/${item.id}/foods`} key={index} style={{ textDecoration: 'none' }}>
                <postsContentWrapper>
                  <Link to={`/posts/${item.id}`} key={index}>
                  <MainText>{item.title}</MainText>
                  <MainText>{item.caption}</MainText>
                  <MainText>{item.date}</MainText>
                  </Link>
                  <button onClick={ () =>deleteClick(item.id)}>Delete</button>

                </postsContentWrapper>
              // </Link>
            )
          :
              state.postsList.map((item, index) =>
              // <Link to={`/posts/${item.id}/foods`} key={index} style={{ textDecoration: 'none' }}>
                <postsContentWrapper>
                  <Link to={`/posts/${item.id}`} key={index}>
                  <MainText>{item.title}</MainText>
                  <MainText>{item.caption}</MainText>
                  <MainText>{item.date}</MainText>
                  </Link>
                  <button onClick={ () =>deleteClick(item.id)}>Delete</button>

                </postsContentWrapper>
              // </Link>
            )
        }
        

      </postsContentsList>
    </Fragment>
  )
  
}