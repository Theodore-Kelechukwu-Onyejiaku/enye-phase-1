import React from "react";

function Search({ onSearch }) {
    return (
        <nav >
            <div className="nav-wrapper" style={{backgroundColor: "#ee6e73"}}>
                <form>
                    <div className="input-field">
                        <input id="search" className="search" type="search" required placeholder="Search records" onChange={(e) => onSearch(e)} />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>

            </div>
        </nav>
    )
}

export default Search;