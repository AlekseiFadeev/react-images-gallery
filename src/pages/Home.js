import React, {useContext} from "react";
import {UnsplashContext} from "../context/unsplash/unsplashContext";
import {Card} from "../components/Card";

export const Home = () => {
    const {images, loading, getImages} = useContext(UnsplashContext)

    return (
        <>
            <h1 onClick={getImages}>Test</h1>
            <div className="row">
                {loading
                    ? <p className="container text-center">Загрузка...</p>
                    : images.map(image => (
                        <div className="col-sm-4 mb-4" key={image.id}>
                            <Card image={image}/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}