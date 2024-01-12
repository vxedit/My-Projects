import { useState } from "react";
const StateObj = ()=>{
    // let [obj,setObj] = useState({name:'parajaja',compeny:'TSOP'})
    let [obj] = useState([10,20,30])
    return(
        <div>
            <h1>State as obj</h1>
            {/* <p>{obj.name} , {obj.compeny} </p> */}
            {
                obj.map( (x) =>{
                    return(<div>{x}</div>)
                })
            }
        </div>

    )
}
export default StateObj