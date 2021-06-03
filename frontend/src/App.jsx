import React from 'react';
import logo from './logo.svg';
import './App.css';

import ApiFetch from './ApiGet';
import { PostsIndex } from './containers/PostsIndex';
import {PostsCreate} from './containers/PostCreate'
import {PostsShow} from './containers/PostShow'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  return (
<>
<Router>
<Link to="/posts">
  投稿一覧
</Link>
    <Switch>
      <Route
      exact path="/posts"
      component={PostsIndex}      
      />


      <Route
      exact path="/posts/:postId"
      render={({ match }) =>
      <PostsShow
        match={match}
        />
      }
      />
      <Route
      exact path="/"
      >
    <PostsCreate />
      </Route>
    </Switch>
</Router>

</>
  );
}

export default App;
