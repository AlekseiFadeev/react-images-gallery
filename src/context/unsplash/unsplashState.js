import React, {useReducer} from "react";
import axiosImages from "../../axios/axiosImages";
import {UnsplashContext} from "./unsplashContext";
import {GET_IMAGES, SEARCH_QUERY, SET_LOADING, SET_PAGE} from "../types";
import {unsplashReducer} from "./unsplashReducer";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

export const UnsplashState = ({children}) => {
    const initialState = {
        images: [],
        page: 1,
        loading: false,
        search: false
    }

    const [state, dispatch] = useReducer(unsplashReducer, initialState)

    const getImages = async (page) => {
        setLoading()

        const response = await axiosImages.get(`/photos/?page=${page}&per_page=9&client_id=${CLIENT_ID}`)

        console.log(response.data)

        dispatch({
            type: GET_IMAGES,
            payload: response.data
        })
    }

    const searchQuery = async (query) => {

        setLoading()

        const response = await axiosImages.get(`/search/collections?page=${page}&per_page=9&query=${query}&client_id=${CLIENT_ID}`)

        console.log(response.data.results)

        dispatch({
            type: SEARCH_QUERY,
            payload: response.data.results
        })
    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }


    const setPage = (page) => {
        getImages(page)

        dispatch({
            type: SET_PAGE,
            page
        })
    }


    const {images, loading, page, search} = state

    return (
        <UnsplashContext.Provider value={{
            getImages, setLoading, setPage, searchQuery, images, loading, page, search
        }}>
            {children}
        </UnsplashContext.Provider>
    )
}
