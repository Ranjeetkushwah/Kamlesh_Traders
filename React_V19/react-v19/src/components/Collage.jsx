import React, { use, useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
// import Paper from '@mui/material/Paper';

function Collage(props) {


    let [student, setStudent] = useState("")

    let [users, setUsers] = useState([])

    let userData = () => {
        let url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url).then((res) => {
            // console.log(res)
            setUsers(res.data)

        }).catch((error) => console.log(error))
    }
    useEffect(() => {
        userData()
    }, [])
    return (
        <React.Fragment>

            <h3 align="left" >Student name:   {student && student}</h3>
            <button onClick={() => setStudent("basker")}>Get student name</button>
            <hr />

            <h1 align="center">Collage Detalils</h1>
            <TableContainer >
                <Table sx={{ minWidth: 550, backgroundColor: "lightBlue", borderRadius: "10px" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>S.no</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">email</TableCell>
                            <TableCell align="right">phone.no</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                   
                        {props.collage.map((row) => (
                            <TableRow
                                key={row.Sno}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.Sno}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <hr />
            <h1>User details</h1>
            <TableContainer >
                <Table sx={{ minWidth: 550, backgroundColor: "lightgrey", borderRadius: "10px",margin:"1px" }} aria-label="simple table">
                    <TableHead >
                        <TableRow>
                            <TableCell>S.no</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">email</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Username</TableCell>
                            <TableCell align="center">Phone number</TableCell>
                            <TableCell align="center">Wedsite &</TableCell>
                            <TableCell align="center">Company Name</TableCell>
                   
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {users.map((user)=>{
                            return(<>
                            <TableRow key={user.id}>
                                <TableCell  align="center">{user.id}</TableCell>
                                <TableCell  align="center">{user.name}</TableCell>
                                <TableCell  align="center">{user.email}</TableCell>
                                <TableCell  align="center">{user.address.city}</TableCell>
                                <TableCell  align="center">{user.username}</TableCell>
                                <TableCell  align="center">{user.phone}</TableCell>
                                <TableCell  align="center">{user.website}</TableCell>
                                <TableCell  align="center">{user.company.name}</TableCell>
                            </TableRow>

                            
                            
                            </>)

                        }) }
                        
                    </TableBody>
                    
                </Table>
            </TableContainer>


            <hr />
        </React.Fragment>


    )
}

export default Collage;







