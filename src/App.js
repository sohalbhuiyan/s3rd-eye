
import Home from "./pages/home/Home";
import TopBar from "./component/topbar/TopBar";
import Footer from "./component/footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/Write/Write";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext } from 'react';
import { Context } from './context/Context';
// npm installed :npm install react-router-dom@5.2.0

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
    <TopBar />
    <Routes>
     
      <Route exact path="/" element={<Home/>} />
      
      
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
     
      <Route path="/write" element={user ? <Write /> : <Register />} />
      <Route path="/settings" element={user ? <Settings /> : <Register />} />
      <Route path="/post/:postId" element={<Single/>} />
       
    
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
