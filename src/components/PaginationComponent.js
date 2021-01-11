import React from "react";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }
    return(
        <div>
            <p className="center-align" >
            {
                pageNumbers.map(number => (
                    <span key={number}>
                        <button className="btn btn" onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </span>
                ))
            }
            </p>
        </div>
    )
}


export default Pagination;