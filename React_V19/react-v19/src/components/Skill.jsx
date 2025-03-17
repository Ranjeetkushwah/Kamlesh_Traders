import React, { use, useState } from 'react';
import UserCard from './UserCard';

const Skill = () => {

  let [skill, setSkill] = useState([])

  let handelSkills = (event) => {
    if (event.target.checked) {
      setSkill([...skill,
      event.target.value]
      )
    } else {
      setSkill([...skill.filter((item) => item != event.target.value)])
    }


  }


  let [gender,setGender]=useState("female")
  let [city,setCity]=useState("pune")

  return (
    <>
      <UserCard  />

    <hr />
      <h1>Tick your skills </h1>
      <input type="checkbox" onChange={(event) => handelSkills(event)} id="js" value='js' />
      <label htmlFor="js">Java-script</label>
      <br />
      <input type="checkbox" onChange={(event) => handelSkills(event)} id="java" value='java' />
      <label htmlFor="java">Java</label>
      <br />
      <input type="checkbox" onChange={(event) => handelSkills(event)} id="node" value='node' />
      <label htmlFor="node">Node</label>
      <br />
      <input type="checkbox" onChange={(event) => handelSkills(event)} id="python" value='python' />
      <label htmlFor="python">Python</label>
      <br />
      <input type="checkbox" onChange={(event) => handelSkills(event)} id="php" value='php' />
      <label htmlFor="php">PHP</label>

      <hr />
      <h1>{skill}</h1>

      <hr />
      <hr />


      <h1>handel radio button and drop down </h1>

      <h3>radio button select gender</h3>

    <input style={{margin:"10px"}} checked={gender=="male"} type="radio" onChange={(event)=>setGender(event.target.value)} value={"male"} name='gender'  id="male" />
    <label htmlFor="male">Male</label>

    <input style={{margin:"10px"}} type="radio" checked={gender=="female"} onChange={(event)=>setGender(event.target.value)} value={"female"} name='gender'  id="female" />
    <label htmlFor="female">Female</label>

    <h6>select gender: {gender}</h6>

    <hr />

    <h4>Select the your location {city}</h4>

    <select onChange={(event)=>setCity(event.target.value)} defaultValue={"pune"}>
      <option value="pune">Pune</option>
      <option value="mainpuri">Mainpuri</option>
      <option value="amdhabad">Amdhabad</option>
      <option value="lucknow">Lucknow</option>
      <option value="indore">Indore</option>
      <option value="Navi mumbai">Navi mumbai</option>
    </select>

    

    </>
  );
}

export default Skill;
