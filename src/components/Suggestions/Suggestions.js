import react, {useState, useEffect} from "react"

export default function Suggestions(props){
    
    const [data, setData] = useState(props.data)
    console.log("data: ",data)
    
    return(
        <div>
            {data}            
        </div>
    );
}