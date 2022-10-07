import axios from "axios";

import { 
        SIGN_IN, 
        SIGN_OUT,
        CREATE_BLOG,
        FETCH_BLOGS,
        FETCH_BLOG,
        EDIT_BLOG,
        DELETE_BLOG
    } from "./types";


export const signIn = () => {
    return {
        type: SIGN_IN,
       // payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};

export const CreateBlog = formValues => async dispatch => {
    const response = 'https://tekplozz.herokuapp.com/api/v1/';
    await axios.post(response).then((response) => {
        dispatch({type: CREATE_BLOG, payload:response.data})
    })
};


export const Fetch_blogs = () => async dispatch => {
    const response = 'https://tekplozz.herokuapp.com/api/v1/';
    axios.get(response).then((response) => {
   //     console.log(response)
        dispatch({type:FETCH_BLOGS, payload:response.data})
    })
};

export const Fetch_blog = id => async dispatch => {
    const response = `https://tekplozz.herokuapp.com/api/v1/${id}/`;
    axios.get(response).then((response) => {
        dispatch({type:FETCH_BLOG, payload:response.data})
    })
};


export const Edit_blog = (id) => async dispatch => {
    const response = `https://tekplozz.herokuapp.com/api/v1/${id}/`;
    axios.put(response).then((response) => {
        dispatch({type: EDIT_BLOG, payload:response.data})
    })
};

export const Delete_blog = (id) => async dispatch => {
    const response = `https://tekplozz.herokuapp.com/api/v1/${id}/`;
    axios.delete(response).then((response) => {
        dispatch({type: DELETE_BLOG, payload:response.data})
    })
};