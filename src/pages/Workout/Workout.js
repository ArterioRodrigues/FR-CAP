import Analytics from '../../components/Analytics/Analytics'
import react, {useState, useEffect} from "react"
import Nav from '../../components/NavBar/NavBar'
import '../Home/Home.css'
export default function  Workout(props){

    return(
        <div>
            <Nav/>

            <div className='Workout'>
                <h1>Workout</h1>
                <Analytics/>
            </div>
        </div>
    );

}