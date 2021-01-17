import {
    SET_QUERY,
    GET_ITEMS,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_ERROR,
    GET_ITEM_BY_ID,
    GET_ITEM_BY_ID_SUCCESS,
    GET_ITEM_BY_ID_ERROR
} from '../types';

const initialState = {
    items: [],
    item: {},
    query: '',
    categories: [],
    error:null,
    loading: false
}


export default function(state = initialState, action) {
    switch(action.type) {
        case SET_QUERY: 
            return {
                ...state,
                query: action.payload
            }
        case GET_ITEMS:
            return {
                ...state,
                loading: true,
                items: []
            }
        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.items,
                categories: action.payload.categories,
                error: null
            }
        case GET_ITEMS_ERROR:
        case GET_ITEM_BY_ID_ERROR:
            return {
                ...state,
                loading:false,
                items: [],
                categories: [],
                error: true
            }
        case GET_ITEM_BY_ID:
            return {
                ...state,
                loading: true,
                item: null
            }
        case GET_ITEM_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                item: action.payload.item,
                error: null
            }
        default:
            return state;
    }
}
