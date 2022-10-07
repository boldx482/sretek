import _ from 'lodash';

import {
    FETCH_BLOG,
    FETCH_BLOGS,
    CREATE_BLOG,
    EDIT_BLOG,
    DELETE_BLOG
} from '../actions/types';

const blogReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_BLOG:
            return { ...state, blog: action.payload };
        case FETCH_BLOGS:
            return { ...state, blogs: action.payload };
        case CREATE_BLOG:
            return { ...state, blogcreate: action.payload };
        case EDIT_BLOG:
            return { ...state, blogedit: action.payload };
        case DELETE_BLOG:
            return _.omit(state,  action.payload);
    };
    return state;
}


export default blogReducer;
