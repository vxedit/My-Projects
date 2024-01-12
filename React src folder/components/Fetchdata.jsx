import data from './data.json'
import { useState } from 'react'

const Fetch=()=>{
    let [abc] = useState(data)
    return(
        <div>
            {abc.map((x)=>{
                return(
                    <div>
                    ID:{x.id}
                    Log in:{x.login}
                </div>
                )
            })}
        </div>
    )
}
export default Fetch