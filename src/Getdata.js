import axios from "axios"
import { useEffect, useState } from "react"

const GetData = ()=>{

    const [user,setUser] = useState([])
    

    useEffect(()=>{
        axios.get("http://localhost:8000/getuser").then(response=>setUser(response.data))
    })
    // useEffect(()=>{
    //     await axios.get("http://localhost:8000/getuser")
    //    .then(response=>setUser(response.data))
    // },[])

//     const info = async() => {
//        await axios.get("http://localhost:8000/getuser")
//         .then(response=>setUser(response.data))
//     } 
// console.log(user)

    return(

        <div>
            <center>
                <h1>hello</h1>
                
            </center>
        </div>
    )
}
export default GetData