import React from 'react';
import PostForm from './containers/PostForm';
import AllPost from './containers/AllPost';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h2 className="center ">Post Informations</h2>
      </div>
      <PostForm />
      <AllPost />
    </div>
  );
}

export default App;
