import data from "./data.json"
import { useState } from "react"

const Ftab=()=>{
    let [abd] = useState(data)
    return(
        <div>
            <table border={1} cellSpacing={0} cellPadding={20}>
                <tr>
                    <th>ID</th>
                    <th>LOG IN</th>
                </tr>
                {abd.map((x)=>{
                    return(
                        <tr>
                            <td>{x.id}</td>
                            <td>{x.login}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
export default Ftab