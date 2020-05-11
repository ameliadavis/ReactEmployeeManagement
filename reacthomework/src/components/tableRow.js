import React from "react";

const TableRow = props => {
      
            return (
                <tbody>
                      <tr key={props.email}>
                        <td>{props.first}</td>
                        <td>{props.last}</td>
                        <td>{props.email}</td>
                        <td>{props.dob}</td>
                        <td>{props.cell}</td>
                        <td>{props.state}</td>
                    </tr> 
                </tbody>
            );
        }
  
  export default TableRow;   