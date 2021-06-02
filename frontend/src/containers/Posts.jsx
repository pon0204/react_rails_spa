import React, { Fragment, useReducer, useEffect } from 'react';
import styled from "styled-components";

// --- ここから追加 ---
import { Link } from "react-router-dom";
// --- ここまで追加 ---

// apis
import { fetchPosts } from '../apis/posts';

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

export const Posts = () => {
  const [state, dispatch] = useReducer(postsReducer, initialState);

  useEffect(() => {
    dispatch({ type: postsActionTyps.FETCHING });
    fetchPosts()
    .then((data) =>
    dispatch({
      type: postsActionTyps.FETCH_SUCCESS,
        payload: {
          posts: data.posts
        }
      })
      )
    }, [])
    
    console.log(state);

  return (
    <Fragment>
      <HeaderWrapper>

      </HeaderWrapper>
      <MainCoverImageWrapper>

      </MainCoverImageWrapper>
      <postsContentsList>
        {
          state.fetchState === REQUEST_STATE.LOADING ?
            <Fragment>
            </Fragment>
          :
            state.postsList.map((item, index) =>
              // <Link to={`/posts/${item.id}/foods`} key={index} style={{ textDecoration: 'none' }}>
                <postsContentWrapper>
                  <MainText>{item.title}</MainText>
                </postsContentWrapper>
              // </Link>
            )
        }
      </postsContentsList>
    </Fragment>
  )
  
}