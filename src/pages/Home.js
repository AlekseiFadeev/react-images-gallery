import React, {useContext, useEffect} from "react";
import {UnsplashContext} from "../context/unsplash/unsplashContext";
import {Card} from "../components/Card";
import {Redirect, Switch} from "react-router-dom";
import {Pagination} from "../components/Pagination";

export const Home = ({match}) => {
    const {images, loading, getImages} = useContext(UnsplashContext)

    useEffect(() => {
        getImages(match.params.id)
        // eslint-disable-next-line
    }, [])

    if (match.params.id < 1) {
        return (
            <Switch>
                <Redirect to="/page/1"/>
            </Switch>
        )
    }

    return (
        <>
            <div className="row mt-5">
                {loading
                    ? <p className="container text-center main-wrapper">Загрузка...</p>
                    : images.map(image => (
                        <div className="col-sm-4 mb-4" key={image.id}>
                            <Card image={image}/>
                        </div>
                    ))
                }
            </div>
            <Pagination page={match.params.id}/>
        </>
    )
}