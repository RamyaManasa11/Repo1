import { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const DisplayUsers=()=>{
    const[users, setUsers]=useState([]);
    const api="https://jsonplaceholder.typicode.com/users";

    useEffect(()=>{
        const getUsers=async()=>{
            const {data:res}=await axios.get(api);
            setUsers(res);
        };
        getUsers();
    }, []);

    
    const addUser= async()=>{
        const user=
            {name: "Ramya", email: "ramya@hcl.com", phone: 86786768678};
            //{name: "Sowjanya", email: "sowjanya@hcl.com", phone: 98485785}
        await axios.post(api, user);
        setUsers([user, ...users]);
    };

    const handleDelete= async user=>{
        await axios.delete(api + '/'+user.id+user)
        setUsers(users.filter(p=>p.id!==user.id));
    }
    return(
        <>
            <div className="container">
                <br></br>
                <h2> {users.length} user details have fetched from API</h2>
                <button onClick={addUser} className="btn btn-primary">Add Users</button>
                
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>PhoneNum</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user=>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            {/* <td>{user.address.street},{user.address.city}</td> */}
                            <td>
                                <button onClick={()=> handleDelete(user)} className="btn btn-danger btn-sm"> Delete </button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                
            </div>
        </>
    )
}
export default DisplayUsers;
// const cors = require("cors");
// DisplayUsers.use(cors());