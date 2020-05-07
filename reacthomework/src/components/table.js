import React, { Component } from "react";
import TableRow from "./tableRow"
import axios from "axios";

 const Table = props => {
   
        return (<table class="table table-bordered">
             <thead>
                    <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Cell Number</th>
                    </tr>
                </thead>
                    <TableRow users = {props}></TableRow>
                </table>
            )}
      
export default Table;

