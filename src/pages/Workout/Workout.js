import Analytics from '../../components/Analytics/Analytics'
import react, {useState, useEffect} from "react"
import Nav from '../../components/NavBar/NavBar'
import '../Home/Home.css'

export default function  Workout(props){

    const [exercise, setExercise] = useState('Error')

    
    const handleExercise = () => {

        const e = document.getElementById("Exercise")

        const div = document.createElement("div");
        const textNode = document.createTextNode(exercise);
        div.appendChild(textNode);
        div.insertAdjacentHTML('beforeend', exercise_display)
        div.classList.add(exercise)
        let child = div.getElementsByClassName('Table'); 
        
        e.appendChild(div)

        let stuff = buildTable()
        console.log(stuff.props)
    }
    
    const addRow = () =>{
        console.log('dsfsd')
    }


    return(
        <div>
            <input className='Title' placeholder='Workout Name'/>
            <div id = "Exercise"/>
            
            <input placeholder='exercise' onChange={e =>{setExercise(e.target.value)}}/>
            <button onClick={handleExercise}>Add Exercise</button>
            <button>Cancel Exercise</button>     
        </div>
    );

}

export function buildTable(){
    let exercise_row = [
        <div>
            <table>
                <tr>
                    <th>set</th>
                    <th>rep</th>
                    <th>lbs</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td><input/></td>
                    <td><input/></td>
                </tr>
            </table>
        </div>

    ]

    return exercise_row
    
}

export const exercise_display = '<div> <table className = "Table"> <tr> <th>Set</th> <th>Rep</th> <th>lbs</th> </tr> <tr><td>1</td> <td><input></input></td><td><input></input></td></tr></table><button onClick={addRow}>Row</button></div>'
export const exercise_row = '<tr><td>1</td> <td><input></input></td><td><input></input></td></tr>'