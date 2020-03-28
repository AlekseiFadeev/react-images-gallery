import React, {useReducer} from "react";
import axiosImages from "../../axios/axiosImages";
import {UnsplashContext} from "./unsplashContext";
import {GET_IMAGES, SET_LOADING, SET_PAGE} from "../types";
import {unsplashReducer} from "./unsplashReducer";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

export const UnsplashState = ({children}) => {
    const initialState = {
        images: [],
        page: 1,
        loading: false
    }

    const [state, dispatch] = useReducer(unsplashReducer, initialState)

    const getImages = async (page) => {
        setLoading()

        const response = await axiosImages.get(`/photos/?page=${page}&per_page=9&client_id=${CLIENT_ID}`)

        dispatch({
            type: GET_IMAGES,
            payload: response.data
        })
    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }


    const setPage = (page) => {
        console.log(page)
        getImages(page)

        dispatch({
            type: SET_PAGE,
            page
        })
    }


    const {images, loading, page} = state

    return (
        <UnsplashContext.Provider value={{
            getImages, setLoading, setPage, images, loading, page
        }}>
            {children}
        </UnsplashContext.Provider>
    )
}
