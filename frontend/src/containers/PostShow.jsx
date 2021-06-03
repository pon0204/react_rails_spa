import React, { Fragment, useReducer, useEffect,useState } from 'react';
import styled from "styled-components";


// --- ここから追加 ---
import { Link } from "react-router-dom";
// --- ここまで追加 ---

// apis
import { fecthPostsShow } from '../apis/posts';

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

export const PostsShow = ({match}) => {

  const [PostData,setPostShow] = useState([])

  useEffect(() => {
    fecthPostsShow(match.params.postId)
    .then((data) => {
      setPostShow(data)
    })
    }, [])
  
  return (
    <Fragment>
      <HeaderWrapper>
      </HeaderWrapper>
      <MainCoverImageWrapper>

      </MainCoverImageWrapper>
      <postsContentsList>
        {
        <>
          <p>{PostData.title}</p>
          <p>{PostData.caption}</p>
          <p>{PostData.date}</p>
        </>
        }
        

      </postsContentsList>
    </Fragment>
  )
  
}