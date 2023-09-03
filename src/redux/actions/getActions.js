import { GET_LOADING,GET_ERROR,GET_SUCC } from "./actionTypes";
import axios from "axios";
import { searchTerm } from "./searchActions";
import { searchHistory } from "./searchActions";

export const getLoading= ()=>{
    return {
        type:GET_LOADING
    }
}
export const getSucc = (data)=>{
    return {
        type:GET_SUCC,
        payload:data
    }
}

export const getError = (data)=>{
    return {
        type:GET_ERROR,
        payload:data
    }
}

export const getData= (endpoint)=>{
    return (dispatch)=>{
        dispatch(getLoading())
         axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${endpoint}`).then(data=>{
            dispatch(searchHistory(data.data))
            dispatch(searchTerm(''))
            return dispatch(getSucc(data.data))}).catch(error=>{
            dispatch(searchTerm(''))
         return dispatch(getError(error.response.data.message))})    
    }
}
