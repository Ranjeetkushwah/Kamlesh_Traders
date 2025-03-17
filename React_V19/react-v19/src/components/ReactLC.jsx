import React, { use, useEffect } from 'react';

const ReactLC = ({ counter , num}) => {

    useEffect(()=>{
  console.log("mounting pase ");
  
    },[])

    useEffect(()=>{
        console.log("updating phase")
    },[counter])


    useEffect(()=>{
        return()=>{ console.log("unMounting phase")}

    },[])
  

    return (
        <>

            <h1>Counter value :-{counter} </h1>
            <h1> Data id :- {num} </h1>


        </>
    );
}

export default ReactLC;
