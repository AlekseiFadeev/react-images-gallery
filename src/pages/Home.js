import React, {useContext, useEffect} from "react";
import {UnsplashContext} from "../context/unsplash/unsplashContext";
import {Card} from "../components/Card";

export const Home = ({match}) => {
    const {images, loading, getImages} = useContext(UnsplashContext)

    useEffect(() => {
        getImages(match.params.id)
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="row mt-5">
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