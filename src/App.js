import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PostList from "./pages/PostList";

function App() {
  return (
    <div className="App">
      <header>BTC Social</header>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/posts" component={PostList} />
          {/* <Route exact path="/createpost" component={CreatePost} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
