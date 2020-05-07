import React from "react";

function Nav(props){
    return <nav class="navbar navbar-light bg-light justify-content-between">
            <h1 class="navbar-brand">Employee Information</h1>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
    </nav>
}

export default Nav