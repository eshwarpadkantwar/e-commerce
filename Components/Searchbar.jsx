import React from "react";
import "./Searchbar.css"


function Searchbar(){

    return(
        <div>
            <div className="searchbar mb-2">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" id="searchbar" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-primary" type="submit">Search</button>
                </form>
            </div>
            
        </div>
    )
}

export default Searchbar