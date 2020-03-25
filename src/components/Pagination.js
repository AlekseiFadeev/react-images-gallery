import React from "react";

export const Pagination = ({page}) => {

    console.log(page)

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">{+page}</a></li>
                <li className="page-item"><a className="page-link" href="#">{+page + 1}</a></li>
                <li className="page-item"><a className="page-link" href="#">{+page + 2}</a></li>
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}