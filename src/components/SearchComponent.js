import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { searchTerm } from "../redux/actions/searchActions";
import { getData } from "../redux/actions/getActions";
import RenderData from "./RenderData";
import { useEffect } from "react";
import { getSucc,getError } from "../redux/actions/getActions";
const SearchComponent=()=>{
    let dispatch= useDispatch()
    let {api,search} = useSelector(data=>data)
    console.log(api,search)
    function searchdata(){
        dispatch(getData(search.searchTerm))
    }
    useEffect(()=>{
        dispatch(getSucc(''))
    },[])
return (
    <div className="searhcont">
        <div className="searchinput">
         <input type='text' value={search.searchTerm} onChange={(event)=>dispatch(searchTerm(event.target.value))}></input>
         <button onClick={searchdata}>Search</button>   
        </div>
        <div className="loader">
            {
                api.loading=='true' && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            }
        </div>
        <div className="searchoutput">
            <div className="searchoutput-error">
                {
                    api.error && <p>{api.error}</p>
                }
            </div>
            <div className="searchoutput-succ">
                {
                    api.succ && <RenderData array={api.succ}></RenderData>
                }
            </div>
        </div>
    </div>
)
}
export default SearchComponent