import React, { useState } from "react"
import Collage from "./Collage";
import { colors } from "@mui/material";
import ReactLC from "./ReactLC";

function User() {

    let [user, setUser] = useState(0)

    let [data, setData] = useState(0)

    let [display,setDisplay]=useState(true)

    let collage = [

        {
            Sno: 1,
            name: "Hritik",
            email: "hritik@gmial.com",
            phone: 12345
        },
        {
            Sno: 2,
            name: "rohan",
            email: "rohan@gmial.com",
            phone: 123345
        },
        {
            Sno: 3,
            name: "sohan",
            email: "sohan@gmial.com",
            phone: 23345
        },
        {
            Sno: 4,
            name: "kiran",
            email: "kiran@gmial.com",
            phone: 123445
        },
        {
            Sno: 5,
            name: "nidhi",
            email: "nidhi@gmial.com",
            phone: 23432
        },


    ]


    let [val, setVal] = useState({

        name: '',
        email: "",
        password: '',
    })

    let valueChange = (event) => {
        setVal({
            ...val,
            [event.target.name]: event.target.value
        })

    }
    let cleaValue = () => {
        setVal({
            name: '',
            email: "",
            password: '',
        })
    }

    
    return (

        <React.Fragment>    
            <hr /> 
            {display ?<ReactLC counter={user} num={data} /> :null }
            
            <hr />

            <h1>User components</h1>

            <h1>Count :{user}</h1>

            <button onClick={()=>setDisplay(!display)}>Display umounting</button>
                                            
            <button style={{margin:"10px"}} onClick={() => setUser(user + 1)}>click +</button>
            <button onClick={() => setData(data + 1)}>Data ++</button>
            <hr />
            <input type="text" name="name" value={val.name} onChange={(event) => valueChange(event)} placeholder='type name' />
            <br />
            <input type="text" name="email" value={val.email} onChange={(event) => valueChange(event)} placeholder='type email' />
            <br />
            <input type="password" name='password' value={val.password} onChange={(event) => valueChange(event)} placeholder='type password' />
            <br />
            <h1 >{val.name}</h1>
            <br />
            <h1 >{val.email}</h1>
            <br />
            <h1 >{val.password}</h1>
            <br />
            <button onClick={() => cleaValue()}> Clear value</button>


            <hr />

            <Collage collage={collage} />
        </React.Fragment>
    )
}
export default User;