import Home from './pages/Home/Home';
import Quiz from './components/Quiz/Quiz';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import react, {useState, useEffect} from "react"
import axios from "axios";
import "./App.css";
import Searchbar from './components/Search/Searchbar'
import Search from './components/Search/Search'
import Workout from './pages/Workout/Workout';
import Nav from './components/NavBar/NavBar'

export default function App() {
  
  let [questions, setQuestions] = useState([]);
  let [counter, setCounter] = useState(2);
  let [answers, setAnswers] = useState([]);
  let [serverData, setServer] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let data = await axios.get("http://localhost:3001/questions/question1");
      setQuestions(data.data);
    }

    fetchData()
      .catch(console.error);;
  }, [])

  function handleClick(e) {
    let ans = [];
    ans = answers;
    ans.push(e);
    setAnswers(ans);

    if(counter < 4)
    {
      let questionsUpdate = async () => {
        let data = await axios.get(`http://localhost:3001/questions/question${counter}`);
        setCounter(counter + 1)
        setQuestions(data.data);
      }
      questionsUpdate();
    }
    else
    {
      
      let filter = async () => {
        let data = await axios.post('http://localhost:3001/data', answers);
        setServer(data.data.dataToSend);  
      }

      filter();
      navigate("/Home")
    }

  }

  return (
    <div>
        <Routes>
          <Route path="/Workout" element ={<Workout/>}/>
          <Route path="/Search" element={<Search/>}/>
          <Route path="/Nav" element={<Nav/>}/>
          <Route path="/Searchbar" element={<Searchbar/>}/>
          <Route path="/Home" element={<Home serverData = {serverData}/>}/>
          <Route path="/" element={<Quiz questions = {questions} handleClick={handleClick}/>}/>
        </Routes>
    </div>
    
  );
}
