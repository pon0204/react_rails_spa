// useRef

import React, {useState,useRef} from 'react';
import { createPosts,fetchPosts } from '../apis/posts';



// reducers
import {
  initialState,
  postsActionTyps,
  postsReducer,
} from '../reducers/posts';


export const PostsCreate = ({postFunc}) => {
  
  const inputTitle = useRef(null)
  const inputCaption = useRef(null)
  const inputDate = useRef(null)
  
  const handleClick = () => {
    const data = {
      title: inputTitle.current.value,
      caption: inputCaption.current.value,
      date: inputDate.current.value,
    }
    postFunc(createPosts(data));
  }

  return (
    <>
      {/* <p>{PostData.title}</p>
      <p>{PostData.caption}</p>
      <p>{PostData.date}</p> */}

      <input ref={inputTitle} type="text" />
      <input ref={inputCaption} type="text" />
      <input ref={inputDate} type="text" />

      <button onClick={handleClick}>set text</button>
    </>
  )
}
// useReducer

// import React, { useReducer } from 'react';

// function reducer(state, action) {
//   switch (action.type) {
//     case 'TITLE':
//       return { title: state.title = 'タイトル' };
//     case 'CAPTION':
//       return { caption: state.caption = '説明' };
//     case 'DATE':
//       return { date: state.date = '2020/06/01' };
//     default:
//       return state;
//   }
// }

// const Counter = ({ dispatch }) => {
//   return (
//     <>
//     <p>title</p>
//       <input onChange={() => dispatch({ type: 'TITLE' })}/>
//     <p>caption</p>
//       <input onChange={() => dispatch({ type: 'CAPTION' })}/>
//     <p>date</p>
//       <input onChange={() => dispatch({ type: 'DATE' })}/>
//     </>
//   );
// };

// export const PostForm = () =>{

//   const [state, dispatch] = useReducer(reducer, { title: null, caption: null,date: null });

//   return (
//     <>
//       <p>Count: {state.count}</p>
//       <p>Count: {state.caption}</p>
//       <p>Count: {state.date}</p>
//       <Counter dispatch={dispatch} />
//     </>
//   );
//   }
