import React from "react";
import RenderData from "./RenderData";
import { useSelector } from "react-redux";


const Activeword = ()=>{
    let {api,search}=useSelector(data=>data)
return (
<div className="activeword"><RenderData array={search.activeWord}></RenderData></div>
)
}
export default Activeword