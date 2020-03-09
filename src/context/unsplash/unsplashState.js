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

    const getImages = async images => {
        setLoading()
        const response = await axiosImages.get(`/photos/?page=0&per_page=9&client_id=${CLIENT_ID}`)

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

    const {images, loading} = state

    return (
        <UnsplashContext.Provider value={{
            getImages, setLoading, images, loading
        }}>
            {children}
        </UnsplashContext.Provider>
    )
}
