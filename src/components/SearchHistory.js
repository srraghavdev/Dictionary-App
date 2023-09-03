import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { currentactiveWord } from "../redux/actions/searchActions";
const SearchHistory=()=>{
    let dispatch=useDispatch()
    let {api,search}=useSelector(data=>data)
    console.log(search)
    function changeactiveword(event){
        let d = event.target.innerText
       search.history.forEach(element=>{
        if(element[0].word==d){
            dispatch(currentactiveWord(element))
        }
       })
    }
    return (
        <div className="histcont">
            <h3>Search History</h3>
            {
            search.history.length!=0 && <ul>
                {
                    search.history.map(element=>{
                        return <li>< Link to={`/word/:${element[0].word}`} className="historylinks" onClick={changeactiveword}>{element[0].word}</Link></li>
                    })
                }
            </ul>
            }
        </div>
    )
}

export default SearchHistory