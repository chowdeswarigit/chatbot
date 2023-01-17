import axios from "axios"
import { useState } from "react"

const LoginForm = () => {
    const [user, setUser] = useState({
        name: "",
        email: ""
    })
    // const { name, email } = user;

    const changeHandle = (e) => {

        // console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const submitForm = e => {
        // const { name, email } = user
        e.preventDefault()
        // console.log(user)
        // console.log(user.email)
       console.log(user)


        axios.post("http://localhost:8000/chowdeswari", user)
        // const res =   fetch('/chowdeswari',{
        //     method:"POST",
                                                                   //     headers:{
        //         "content-type":'appilication/json'
        //     },
        //     body:JSON.stringify({name,email})

        // })
        // const data = res.json()
        // if (data.status === 422 && !data) {
        //     window.alert("invalid")
        // }
        // else {
        //     window.alert("success")
        // }




    }
    return (

        <div>
            <center>
                <form onSubmit={submitForm}>
                    <div className="d-flex flex-column">
                        <label>name</label><br />
                        <input type="text" name="name" value={user.name} onChange={changeHandle}></input>
                    </div>
                    <div className="d-flex flex-column">
                        <label>email</label><br />
                        <input type="text" name="email" value={user.email} onChange={changeHandle}></input>

                    </div>
                    <button type="submit" className="btn btn-primary" name="submit">Login</button>

                </form>
            </center>
        </div>
    )
}
export default LoginForm