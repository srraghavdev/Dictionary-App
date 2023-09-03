import { SEARCH_HISTORY,SEARCH_TERM,CURRENT_ACTIVE_WORD } from "../actions/actionTypes";

let intial = {
    searchTerm:'',
    activeWord:[],
    history:[],
}
export const searchReducer = (state=intial,action)=>{
    switch(action.type){
        case SEARCH_TERM:  return {...state,searchTerm:action.payload}
        case CURRENT_ACTIVE_WORD:  return {...state,activeWord:action.payload}
        case SEARCH_HISTORY : return {...state,history:[...state.history,action.payload]}
        default :  return state
    }
}