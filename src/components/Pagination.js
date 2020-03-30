import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {UnsplashContext} from "../context/unsplash/unsplashContext";

export const Pagination = ({page}) => {
    const {setPage} = useContext(UnsplashContext)

    const toPage = (page) => {
        setPage(page)
    }

    const PageItem = () => {
        let pages = []
        let thisPage = +page - 2

        if (+page === 1 || +page === 2 || +page === 3) {
            for (let i = 1; i <= 5; i++) {
                pages.push(i)
            }
        } else {
            for (let i = 0; i <= 4; i++) {
                pages.push(thisPage + i)
            }
        }

        return (
            <ul className="pagination justify-content-center">
                <li className={page === '1' ? 'page-item disabled' : 'page-item'}>
                    <Link to={"/page/" + (+page - 1)} className="page-link" onClick={() => {
                        toPage(+page - 1)
                    }}>Previous</Link>
                </li>
                {pages.map((item, i) => {
                    return (
                        <li className={+page === item ? 'page-item active' : 'page-item'} key={i}>
                            <Link to={"/page/" + item} className="page-link" onClick={() => {
                                toPage(item)
                            }}>{item}</Link>
                        </li>
                    )
                })}
                <li className="page-item">
                    <Link to={"/page/" + (+page + 1)} className="page-link" onClick={() => {
                        toPage(+page + 1)
                    }}>Next</Link>
                </li>
            </ul>
        )
    }

    return (
        <nav className="mt-4">
            <PageItem/>
        </nav>
    )
}