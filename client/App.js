//Start on port 3001 
import { render } from "@testing-library/react";
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Quiz from "./component/Quiz"
import Home from "./component/Home"
import "./App.css";
import axios from "axios";
import { __RouterContext } from "react-router";

class App extends Component {

  constructor() {
    super();

    this.state = {
      questions: [],
      counter: 1,
      answers:[],
      server_data: {},
    }
  }

  async componentDidMount() {
    let questions = await axios.get("http://localhost:3001/questions/question1");
    this.state.counter = this.state.counter + 1;
    questions = questions.data;
    this.setState({questions});
  }

  handleClick = (e) => {
    this.state.answers[this.state.counter - 2] = e;
    if(this.state.counter < 4)
      this.questionUpdate();
    console.log(this.state.answers , this.state.counter);
    
    if(!(this.state.counter < 4)) {
      this.filter();
      setTimeout(() => { window.location.replace("http://localhost:3000/home"); }, 10000);
    }
      
  }

  async questionUpdate() {
    let questions = await axios.get(`http://localhost:3001/questions/question${this.state.counter}`);
    this.state.counter = this.state.counter + 1;
    questions = questions.data;
    this.setState({questions})
  }

  async filter(){
    /*
    fetch('http://localhost:3001/data', {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" , },
        body: JSON.stringify(this.state.answers)
      }).then((response) => response.json()
      ).then(data => {
        console.log(data);
        this.state.server_data = data;
      })*/

      let server_data = await axios.post('http://localhost:3001/data', this.state.answers);
      server_data = server_data.data;
      this.setState({server_data})
      console.log(this.state)
  }
  
  render() {
    const {questions} = this.state;
    const {counter} = this.state;
    const {server_data} = this.state.server_data;
    const QuizComponent = () => (<Quiz handleClick={this.handleClick} questions = {questions} counter = {counter}/>);
    const HomeComponent = () => (<Home server_data = {server_data}/>);
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