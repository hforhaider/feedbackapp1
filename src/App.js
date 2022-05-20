import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
//import React, { useState } from "react";
import Header from "./components/Header";
import "./components/index.css";
import FeedbackList from "./components/FeedbackList";
//import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
//import Button from "./components/Button";
import AboutIconLink from "./components/AboutIconLink";
import Aboutpage from "./pages/Aboutpage";
import { FeedbackProvider } from "./context/FeedbackContext";
import Post from "./components/Post";
import Card from "./components/shared/Card";

function App() {
  //console.log("Feedback State: ", newFeedback);

  return (
    <FeedbackProvider>
      <>
        <Router>
          <div className="container">
            <Header bgColor="CadetBlue" textColor="white" />

            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <h1>ANUM CHANGRI APP</h1>
                    <FeedbackForm />

                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }
              />

              <Route path="/about" exact element={<Aboutpage />} />
              <Route path="/about/post/*" exact element={<Post />} />
            </Routes>

            <Card>
              <NavLink to="/" activeclassname="active">
                Home
              </NavLink>
              <NavLink to="/about" activeclassname="active">
                About
              </NavLink>
            </Card>
            <AboutIconLink />
          </div>
        </Router>
      </>
    </FeedbackProvider>
  );
}
export default App;
