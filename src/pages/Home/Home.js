import Suggestions from '../../components/Suggestions/Suggestions'
import react, {useState, useEffect} from "react"
import Nav from '../../components/NavBar/NavBar'
import Analytics from '../../components/Analytics/Analytics'
import './Home.css'

export default function  Home(props){
    
    let server_data = props.serverData;
    const [data, setData] = useState(server_data);
    useEffect(() => {
        setData(server_data);
        console.log("working :)")
    }, [server_data])

    return(
        <div>
            <Nav/>
            <img src = "https://coolbackgrounds.io/images/backgrounds/index/gulf-dec0ccde.svg"/>

            <div className='Analytics'>
                <h1>Analytics</h1>
                <Analytics/>
            </div>
            
           <div className='Suggestions'> 
               <h1>Suggestions</h1>
               <Suggestions data = {data}/>
           </div>
 
        </div>
    );

}