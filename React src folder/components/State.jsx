import { useState } from "react";
const State=()=>{
    let [data,setdata] = useState('Hello')
    let x=()=>{setdata("Bye")}
    return(
        <div>
            {data}
            <button onClick={x}>Click</button>
        </div>
    )
}
export default State