
import React,{ useState,createContext,useContext} from 'react';
// import { Link, Route } from 'react-router-dom';
const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Post = () => <h1>Post</h1>;
const Project = () => <h1>Project</h1>;

const UserContext = createContext()

function App() {
  const [count , setCount] = useState("Test")
  return (
//     <div className="App container">
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">about</Link>
//         <Link to="/posts">Posts</Link>
//         <Link to="/project">Project</Link>
//       </nav>
//       <p> { count}</p>
//       <Route exact path="/" component={Home} >
//       <button onClick={()=>setCount("Test")}/>
// <App1/>
//       </Route>
//       <Route path="/about" component={About} >
//         <button onClick={()=>setCount("RIP")}/>
//         </Route>
//     <Route path="/posts" component={Post} />
//     <Route path="/project" component={Project} />
//   </div>
    <UserContext.Provider value={count}>
      <App1/>
    </UserContext.Provider>
  );
}

function App1() {
  const user =useContext(UserContext)
  return (
    <>
      
      <h1>RIP</h1>
      <p>Hello:{ user}</p>
      
    </>
  )
}
export default App;
