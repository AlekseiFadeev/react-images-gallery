import React, {useContext} from "react";
import {UnsplashContext} from "../context/unsplash/unsplashContext";

export const Card = ({image}) => {
    const {search} = useContext(UnsplashContext)

    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <img className="card-img-top fit-image"
                 src={search ? image.cover_photo.urls.regular : image.urls.regular}
                 alt={search ? image.cover_photo.alt_description : image.alt_description}/>
            <div className="card-body">
                <p className="card-text">{search ? image.cover_photo.alt_description : image.alt_description}</p>
            </div>
        </div>
    )
}