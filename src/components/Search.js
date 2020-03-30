import React, {useContext, useState} from "react";
import {UnsplashContext} from "../context/unsplash/unsplashContext";

export const Search = ({page}) => {
    const [value, setValue] = useState('')
    const {searchQuery, getImages, setPage} = useContext(UnsplashContext)

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return
        }

        if (value.trim()) {
            setPage(1)
            searchQuery(value)
        } else {
            setPage(1)
            getImages(+page)
        }
    }

    return (
        <nav className="navbar flex-column mt-4">
            <div className="justify-content-center w-25">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={event => setValue(event.target.value)}
                    value={value}
                    onKeyPress={onSubmit}/>
            </div>
        </nav>
    )
}