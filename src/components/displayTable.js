import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class DisplayTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        //this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }
    callAPI() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    list: data,
                })
            })
        //console.log(this.state.list)
    }
    render() {
        let tb_data = this.state.list.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address.street},{item.address.city},{item.address.zipcode}</td>
                    <td>{item.phone}</td>
                </tr>
            )
        })
        return (
            <>
            <br></br>
            <h3 align="center">Users Details</h3>
            <br></br>
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">PhoneNum</th>
                    </tr>
                </thead>
                <tbody>
                    {tb_data}
                </tbody>
            </table>
        </>
        )
    }
}
export default DisplayTable