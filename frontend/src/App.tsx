import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApiFetch from './ApiGet';
import { Posts } from './containers/PostsIndex';
import {PostForm} from './containers/PostCreate'

const App: React.FC = () => {
  return (
<>
      <Posts/>
    <PostForm />
</>
  );
}

export default App;
