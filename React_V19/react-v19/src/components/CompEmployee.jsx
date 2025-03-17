import React, { useRef } from 'react';

const CompEmployee = ({ employe }) => {


    // console.log("aaa", employe)

    let inputRef= useRef(null)


    let focus=()=>{
        inputRef.current.focus()
    }
    return (
        <div>

<input type="text" placeholder='enter here' ref={inputRef} />
<button onClick={()=>focus()}>change input</button>
            <ol >


                <li>{employe.name}</li>
                <li>{employe.emailId}</li>
                <li>{employe.phoneNo}</li>
                <li>{employe.position}</li>




            </ol>

        </div>
    );
}

export default CompEmployee;
