import React, { useTransition } from 'react';

const UseTransition = () => {

    const [pending,startTransition]=useTransition();

    const handelButtons=()=>{
        startTransition(async()=>{
            await new Promise(res=>setTimeout(res,2000))

        })
    }
    return (
        <div>
            <br />
        <br />
            <h1>use Transition  hoook used for buttons </h1>

            <button disabled={pending} onClick={handelButtons}>{pending?"under process":"Click"}</button>
            <br />
            <br />
        </div>
    );
}

export default UseTransition;
