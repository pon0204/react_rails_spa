import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApiFetch from './ApiGet';
import { Posts } from './containers/Posts';
 
const App: React.FC = () => {
  return (

      <Posts/>

  );
}

export default App;
