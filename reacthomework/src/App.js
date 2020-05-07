import React,{useState,useEffect} from "react";
import TableRow from "./components/tableRow";
import Nav from "./components/nav"

import API from "./utils/API.js"

const App = () => {

  const[state, setState]= useState({
    users: [],
  })

const {users}= state

const userSearch = () => {
  API.userCall()
  .then(res => {
    console.log(res.data.results)
    setState({
      users: res.data.results, 
    })
  })
  .catch(err => console.log(err))
}


useEffect(()=> {
  userSearch()
}, [])

  return (
    <wrapper>
      <Nav></Nav>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
                <div class="card">
                        <div class="card-body">
                          <table>
                            <thead>
                                <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Cell</th>
                                <th scope="col">State</th>
                                </tr>
                            </thead>
                              {users.map(users =>(
                                <TableRow 
                                  key = {users.email}
                                  first = {users.name.first} 
                                  last = {users.name.last} 
                                  email = {users.email}
                                  dob = {users.dob.date}
                                  cell = {users.cell}  
                                  state = {users.location.state}                          
                                ></TableRow>
                                ))}
                            </table>
                        </div>
                     </div>
            </div>
    </div>
</wrapper>
   

  );
}

export default App;
