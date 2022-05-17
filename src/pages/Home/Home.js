import Suggestions from '../../components/Suggestions/Suggestions'
import react, {useState, useEffect} from "react"
import Searchbar from '../../components/Search/Searchbar'
import Analytics from '../../components/Analytics/Analytics'
import './Home.css'
import Nav from '../../components/NavBar/NavBar'

export default function  Home(props){
    
    let server_data = props.serverData;
    const [data, setData] = useState(server_data);
    useEffect(() => {
        setData(server_data);
        console.log("working :)")
    }, [server_data])

    return(
        <div className='background'>
            
            <Nav/>

            <div className='Analytics'>
                <h1>Analytics</h1>
                <Analytics/>

                <div className='Suggestions'> 
                    <h1>Suggestions</h1>
                    <Suggestions data = {data}/>
                </div>
            </div>
            
            
 
        </div>
    );

}