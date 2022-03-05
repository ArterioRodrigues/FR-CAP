//Start on port 3001 

import { render } from "@testing-library/react";
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Quiz from "./component/Quiz"
import Home from "./component/Home"
import "./App.css";
import axios from "axios";

class App extends Component {

  constructor() {
    super();

    this.state = {
      questions: [],
      counter: 1,
    }
  }

  async componentDidMount() {
    let questions = await axios.get("http://localhost:3000/question1");
    this.state.counter = this.state.counter + 1;
    questions = questions.data;
    this.setState({questions});
  }

  handleClick = (e) => {
    console.log(e);
    fetch('http://localhost:3002/data', {
      method: 'POST',
      mode: 'cors',
      headers: { "Content-Type": "application/json" , },
      body: JSON.stringify(e)
    }).then((response) => response.json()
    ).then(data => {
      console.log(data);
    })
    if(this.state.counter < 4)
    {
      this.questionUpdate();
      console.log(this.state.counter)
    }
    else 
      window.location.replace("http://localhost:3001/home");
  }

  async questionUpdate() {
    let questions = await axios.get(`http://localhost:3000/question${this.state.counter}`);
    this.state.counter = this.state.counter + 1;
    questions = questions.data;
    this.setState({questions})
  }
  render() {
    const {questions} = this.state;
    const {counter} = this.state;
    const QuizComponent = () => (<Quiz handleClick={this.handleClick} questions = {questions} counter = {counter}/>);
    const HomeComponent = () => (<Home/>);
    return (
      <Router>
        <div>
          <Route exact path = '/' component = {QuizComponent}/>
          <Route exact path = '/home' component = {HomeComponent}/>
        </div>
      </Router>
        
    );
  }
}


export default App;
