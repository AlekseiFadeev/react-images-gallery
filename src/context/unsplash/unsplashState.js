import React, {useReducer} from "react";
import axiosImages from "../../axios/axiosImages";
import {UnsplashContext} from "./unsplashContext";
import {GET_IMAGES, SET_LOADING} from "../types";
import {unsplashReducer} from "./unsplashReducer";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

export const UnsplashState = ({children}) => {
    const initialState = {
        images: [],
        loading: false
    }

    const [state, dispatch] = useReducer(unsplashReducer, initialState)

    const getImages = async (page = 0) => {
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

    const {images, loading, page} = state

    return (
        <UnsplashContext.Provider value={{
            getImages, setLoading, images, loading, page
        }}>
            {children}
        </UnsplashContext.Provider>
    )
}
