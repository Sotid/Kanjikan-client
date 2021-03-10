import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Private from "./pages/Private/Private";
import Dictionary from "./pages/Dictionary/Dictionary";
import KanjiDetails from "./pages/KanjiDetails/Kanji.details";
import Resources from "./pages/Resources/Resources";
import Quiz from "./pages/QuizPage/QuizPage";

// Components
import Navbar from "./components/Navbar/Navbar";
import AnonRoute from "./components/AnonRoute/AnonRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/lessons" component={Home} />
          <PrivateRoute exact path="/resources" component={Resources} />

          <PrivateRoute exact path="/lessons/:id" component={KanjiDetails} />

          <PrivateRoute exact path="/private/" component={Private} />
          <PrivateRoute exact path="/dictionary" component={Dictionary} />
          <PrivateRoute exact path="/quiz" component={Quiz} />
        </Switch>
      </div>
    );
  }
}
export default App;
