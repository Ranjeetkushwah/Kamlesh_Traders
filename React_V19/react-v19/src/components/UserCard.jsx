import { width } from '@mui/system';
import React, { use, useState } from 'react';
import Style from '../css/userProfile.module.css'
import styled from 'styled-components'
import { Button } from 'react-bootstrap';

const UserCard = () => {

    let [styleCard,setStyleCard]=useState({
        width: "201px", height: "265px", margin: "10px", border: "1px solid black"

    })

   let updateTheme=(bgColor,textColor)=>{
    setStyleCard({...styleCard,backgroundColor:bgColor,color:textColor})
   }
   let[grid,setGrid]=useState(true)

//    let Heading=styled.h1`
//    color:pink;
//    background-color:blue;`

let Heading=styled.h1({
    color:"red",
    backgroundColor:"blue"
})

    return (
        <React.Fragment>
            <Heading>Dynamic card of user using external css</Heading>

            <Button> ok </Button>
            <div className={Style.container}>

                <div className={Style.card}>
                <img  className={Style.userImage} src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=" alt="user image" />

                <h3 className={Style.userName}> Jhon Redington</h3>

                <p className={Style.userDes}>Cloud engineer</p>
                </div>
                <div className={Style.card}>
                <img  className={Style.userImage} src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=" alt="user image" />

                <h3 className={Style.userName}> Jhon Redington</h3>

                <p className={Style.userDes}>Cloud engineer</p>
                </div>
                <div className={Style.card}>
                <img  className={Style.userImage} src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=" alt="user image" />

                <h3 className={Style.userName}> Jhon Redington</h3>

                <p className={Style.userDes}>Cloud engineer</p>
                </div>
                <div className={Style.card}>
                <img  className={Style.userImage} src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=" alt="user image" />

                <h3 className={Style.userName}> Jhon Redington</h3>

                <p className={Style.userDes}>Cloud engineer</p>
                </div>
                
            </div>




{/* inline css */}
            <h1>All user cards</h1>

            <h3 >update theme</h3>
            <button onClick={()=>updateTheme("grey","red")} >Grey theme</button>
            <button onClick={()=>updateTheme("white","black")} >Default theme</button>
            <button onClick={()=>setGrid(!grid)}>Change Grid</button>

            <div style={{ display:grid? "flex":"block", flexWrap: "wrap" }}>
                <div style={styleCard}>
                    <img style={{ width: "200px", height: "250x", }} src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=" alt="user image" />

                    <h4 style={{ margin: "6px" }}>Peter harries</h4>
                    <h5 style={{ margin: "7px" }}>Software engineer</h5>

                </div>
                <div style={styleCard}>
                    <img style={{ width: "200px", height: "250x", }} src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=" alt="user image" />

                    <h4 style={{ margin: "6px" }}>Peter harries</h4>
                    <h5 style={{ margin: "7px" }}>Software engineer</h5>

                </div>
                <div style={styleCard}>
                    <img style={{ width: "200px", height: "250x", }} src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=" alt="user image" />

                    <h4 style={{ margin: "6px" }}>Peter harries</h4>
                    <h5 style={{ margin: "7px" }}>Software engineer</h5>

                </div>
                <div style={styleCard}>
                    <img style={{ width: "200px", height: "250x", }} src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=" alt="user image" />

                    <h4 style={{ margin: "6px" }}>Peter harries</h4>
                    <h5 style={{ margin: "7px" }}>Software engineer</h5>

                </div>
                <div style={styleCard}>
                    <img style={{ width: "200px", height: "250x", }} src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=" alt="user image" />

                    <h4 style={{ margin: "6px" }}>Peter harries</h4>
                    <h5 style={{ margin: "7px" }}>Software engineer</h5>

                </div>
                <div style={styleCard}>
                    <img style={{ width: "200px", height: "250x", }} src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=" alt="user image" />

                    <h4 style={{ margin: "6px" }}>Peter harries</h4>
                    <h5 style={{ margin: "7px" }}>Software engineer</h5>

                </div>
                <div style={styleCard}>
                    <img style={{ width: "200px", height: "250x", }} src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=" alt="user image" />

                    <h4 style={{ margin: "6px" }}>Peter harries</h4>
                    <h5 style={{ margin: "7px" }}>Software engineer</h5>

                </div>
                <div style={styleCard}>
                    <img style={{ width: "200px", height: "250x", }} src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=" alt="user image" />

                    <h4 style={{ margin: "6px" }}>Peter harries</h4>
                    <h5 style={{ margin: "7px" }}>Software engineer</h5>

                </div>
                <div style={styleCard}>
                    <img style={{ width: "200px", height: "250x", }} src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=" alt="user image" />

                    <h4 style={{ margin: "6px" }}>Peter harries</h4>
                    <h5 style={{ margin: "7px" }}>Software engineer</h5>

                </div>
                <div style={styleCard}>
                    <img style={{ width: "200px", height: "250x", }} src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=" alt="user image" />

                    <h4 style={{ margin: "6px" }}>Peter harries</h4>
                    <h5 style={{ margin: "7px" }}>Software engineer</h5>

                </div>
                <div style={styleCard}>
                    <img style={{ width: "200px", height: "250x", }} src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=" alt="user image" />

                    <h4 style={{ margin: "6px" }}>Peter harries</h4>
                    <h5 style={{ margin: "7px" }}>Software engineer</h5>

                </div>
                <div style={styleCard}>
                    <img style={{ width: "200px", height: "250x", }} src="https://media.istockphoto.com/id/587805078/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=sUCdx-Likqe7eBEcbn1FT8ybOQQHXDgBKLsJc99MtCA=" alt="user image" />

                    <h4 style={{ margin: "6px" }}>Peter harries</h4>
                    <h5 style={{ margin: "7px" }}>Software engineer</h5>

                </div>
            </div>

        </React.Fragment>
    );
}

export default UserCard;
