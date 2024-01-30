import React from "react";

const Pagination = ({
    postsPerPage,
    totalPosts,
    setCurrentPage,
    currentPage,
}) => {
    const pageNumbers = []
    for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)

    }
    return (<nav className="pagination">
        {pageNumbers.map((number, i) => (
            <li key={`${i}-${number}`} className="page-item">
                <a className={`page-link ${currentPage === number ? "active-page" : ""}`}
                    onClick={() => setCurrentPage(number)}
                >{number}</a>
            </li>
        ))}
    </nav>
    )
}

export default Pagination;