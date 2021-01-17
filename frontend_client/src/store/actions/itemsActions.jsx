import {
    SET_QUERY,
    GET_ITEMS,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_ERROR,
    GET_ITEM_BY_ID,
    GET_ITEM_BY_ID_SUCCESS,
    GET_ITEM_BY_ID_ERROR    
} from '../types';
import axiosClient from '../../config/axios';


export function getItemsAction(query) {
    return async (dispatch) => {
        dispatch(getApiItems());
        dispatch(setQuery(query));
        try {
            const response = await axiosClient.get(`items?q=${query}`);
            dispatch(getApiItemsSuccess(response.data));
        } catch (error) {
            dispatch(getApiItemsError());
        }
    }
}

export function getItemByIdAction(id) {
    return async (dispatch) => {
        dispatch(getApiItemById());
        try {
            const response = await axiosClient.get(`items/${id}`);
            dispatch(getApiItemByIdSuccess(response.data));
        } catch (error) {
            dispatch(getApiItemByIdError());
        }
    }
}



const setQuery = (query) => ({
    type: SET_QUERY,
    payload: query
});

const getApiItems = () => ({
    type: GET_ITEMS
});

const getApiItemsSuccess = (data) => ({
    type: GET_ITEMS_SUCCESS,
    payload: data
});

const getApiItemsError = () => ({
    type: GET_ITEMS_ERROR
});


const getApiItemById = () => ({
    type: GET_ITEM_BY_ID,
});

const getApiItemByIdSuccess = (item) => ({
    type: GET_ITEM_BY_ID_SUCCESS,
    payload: item
});

const getApiItemByIdError = () => ({
    type: GET_ITEM_BY_ID_ERROR
});