import { SEARCH_TERM, SEARCH_HISTORY,CURRENT_ACTIVE_WORD } from "./actionTypes";


export const searchTerm = (data)=>{
    return {
        type:SEARCH_TERM,
        payload:data
    }
}

export const searchHistory = (data)=>{
    return {
        type:SEARCH_HISTORY,
        payload:data
    }
}

export const currentactiveWord= (data)=>{
    return {
        type:CURRENT_ACTIVE_WORD,
        payload:data
    }
}