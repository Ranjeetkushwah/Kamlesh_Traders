import React, { useState } from 'react';

const DerivedState = () => {

    const [users,setUsers]=useState([]);
    const [user,setUser]=useState("");

    const handleUser=()=>{
        setUsers([...users,user])

    }

    const total=users.length;
    const lastUser=users[users.length-1];
    const uniqueUser=[...new Set(users)].length
    
    return (
        <div>
            <h3>Total users:{total}</h3>
            <h3>last users:{lastUser}</h3>
            <h3>Total users:{uniqueUser}</h3>

            <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder='enter a user name' />

            <button onClick={handleUser}>add users</button>

            {users.map((item,index)=>(
                <h4 key={index}>{item}</h4>
            ))}
        </div>
    );
}

export default DerivedState;
