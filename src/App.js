
import React from 'react';
import {  Link, Route } from 'react-router-dom';
const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Post = () => <h1>Post</h1>;
const Project = () => <h1>Project</h1>;

function App() {
  return (
    <div className="App container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/project">Project</Link>
      </nav>
      <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/posts" component={Post} />
    <Route path="/project" component={Project} />
  </div>
  );
}

export default App;
