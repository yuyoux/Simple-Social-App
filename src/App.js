import React from "react";
import "./App.sass";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PostList from "./pages/PostList";
import Home from "./pages/Home";
import PostComment from "./pages/PostComment";

function App() {
  return (
    <div className="App">
      <h1>BTC Social</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={PostList} />
          <Route exact path="/posts/comment/:id" component={PostComment} />
          {/* <Route exact path="/createpost" component={CreatePost} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
