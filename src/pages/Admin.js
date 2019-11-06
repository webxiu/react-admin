import React ,{useContext}from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeIndex from "./HomeIndex";
import HomeList from "./HomeList";

export default function Home() {
    return (
    <div>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul>
        <Route path="/" exact component={HomeIndex} />
        <Route path="/list/" component={HomeList} />
      </Router>
    </div>
  )
}
