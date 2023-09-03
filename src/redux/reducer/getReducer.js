import { GET_LOADING,GET_ERROR,GET_SUCC } from "../actions/actionTypes"

let initial={
    loading:'false',
    succ:'',
    error:''
}
export const  getReducer = (state=initial,action)=>{
    switch(action.type){
        case GET_LOADING :  return {...state,loading:'true',succ:"",error:''}
        case GET_SUCC  : return {...state, loading:'false',succ:action.payload,error:''}
        case GET_ERROR  : return {...state, loading:'false',error:action.payload,succ:''}
        default : return state
    }
}