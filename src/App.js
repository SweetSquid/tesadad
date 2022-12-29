import React from "react";
import "./styles.css";
import List from "./list.component";
import Post from "./post.component";
import ScrollToTop from "./scroll-to-top.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <AnimateSharedLayout>
          <Route path="/product/:id" component={Post} />
          <Route exact path="/" component={List} />
        </AnimateSharedLayout>
      </Router>
    </div>
  );
}
