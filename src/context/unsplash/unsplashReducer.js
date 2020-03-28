import {GET_IMAGES, SET_LOADING, SET_PAGE} from "../types";

const handlers = {
    [GET_IMAGES]: (state, {payload}) => ({...state, images: payload, loading: false}),
    [SET_PAGE]: (state, page) => ({...state, page: page.page}),
    [SET_LOADING]: state => ({...state, loading: true}),
    DEFAULT: state => state
}

export const unsplashReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}