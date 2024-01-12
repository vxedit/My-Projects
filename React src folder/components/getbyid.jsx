import { useEffect,useState } from "react";
import axios from "axios";

const Fetdata = ()=>{
    let [content,setContent] = useState([])
    let [data,setData] = useState('')
    let [id,setId] = useState('')

    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((resp)=>{console.log(resp.data);setContent(resp.data);})
        .catch(()=>{console.log("Error")})
       
    },[id])
    let idData = (e) =>{
        setData(e.target.value)
    }
    let Fom = () =>{
        setId(data)
    }
    return(
        <div>
            <input type="text" value={data} onChange={idData}/>
            {content.title}
            <br /><br />
            <button onClick={Fom}>Submit</button>
        </div>
    )
}
export default Fetdata