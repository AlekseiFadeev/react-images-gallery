import React, {useContext, useEffect} from "react";
import {UnsplashContext} from "../context/unsplash/unsplashContext";
import {Card} from "../components/Card";
import {Redirect, Switch} from "react-router-dom";
import {Pagination} from "../components/Pagination";
import {Search} from "../components/Search";

export const Home = ({match}) => {
    const {images, loading, getImages, setPage} = useContext(UnsplashContext)

    useEffect(() => {
        getImages(match.params.id)
        // eslint-disable-next-line
    }, [])

    if (match.params.id < 1) {
        setPage(1)
        return (
            <Switch>
                <Redirect to="/page/1"/>
            </Switch>
        )
    }

    return (
        <>
            <Search page={match.params.id}/>
            <Pagination page={match.params.id}/>
            <div className="row mt-5">
                {loading
                    ?
                    <div className="container text-center main-wrapper">
                        <div className="spinner-border text-secondary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
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