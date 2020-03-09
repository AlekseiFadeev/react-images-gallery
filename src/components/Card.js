import React from "react";

export const Card = ({image}) => {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <img className="card-img-top fit-image" src={image.urls.regular} alt={image.alt_description}/>
            <div className="card-body">
                <p className="card-text">{image.alt_description}</p>
            </div>
        </div>
    )
}