import React,{useState,useEffect} from "react";
import TableRow from "./components/tableRow";
import Nav from "./components/nav"

import API from "./utils/API.js"
import { object } from "prop-types";

const App = () => {

  const[state, setState]= useState({
    users: [],
    filteredState: [],
    searchTerm: "",
  })

const {users, filteredState, searchTerm}= state

const userSearch = () => {
  API.userCall()
  .then(res => {
    console.log(res.data.results)
    setState({
      users: res.data.results, 
      filteredState: res.data.results
    })
  })
  .catch(err => console.log(err))
}

const SearchResults = (searchTerm) => {
    console.log(searchTerm)
    let filtered = users.filter(user => {
     let userArray = Object.values(user).join("").toLowerCase()
    //  userArray.push(user)
     console.log(userArray)
     console.log(userArray.indexOf(searchTerm))
     return (userArray.indexOf(searchTerm.toLowerCase()) !== -1)
      })
    setState({
      filteredState: filtered, 
    })
}

useEffect(()=> {
  userSearch()
}, [])

const handleFormSubmit = e => {
  e.preventDefault();
  SearchResults(searchTerm);
}

  return (
    <wrapper>
      <Nav
        searchTerm = {searchTerm}
        handleInputChange = {(e) => setState({...state, searchTerm: e.target.value})}
        handleFormSubmit = {handleFormSubmit}
      ></Nav>
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
                              {filteredState.map(users =>(
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
