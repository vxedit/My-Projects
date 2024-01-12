import { useState,useEffect } from "react"
import axios from 'axios'
import style from './fetaxi.module.css'
const Axi =()=>{
    let [content,setContent] = useState([])

    useEffect(()=>{
        axios.get('https://api.github.com/users')
        .then((responce)=>{
            setContent(responce.data)
            // console.log(responce.data)
        }).catch(()=>{
            console.log('Error')
        })
    })
    return(
        <div id={style.homePage}>
            {content.map((x)=>{
                let request=()=>{
                    alert(`request sent to ${x.login}`)
                }
                let message=()=>{
                    let msg = prompt(`type the messege to send to ${x.login}`)
                    console.log(`${x.login}:- ${msg} `)
                }
                    return(
                        <div key={x.id}>
                        <img src={x.avatar_url} alt=""/>
                        <h1>{x.login}</h1>
                        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                        <button onClick={request}>Requet</button>
                        <button onClick={message}>Messege</button>
                        
                        </div>
                        
                    )
                })
            }
        </div>
    )
}
export default Axi