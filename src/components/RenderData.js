import React from "react";

const RenderData= (props)=>{
   let data= props.array
return (
    <div>
      {
        data.map(element=>(
            <div className="word">
                <h2>{element.word}</h2>
                <p>{element.phonetic}</p>
                <div className="phonetics">
                    {
                        element.phonetics && <div className="phoneticscont">
                            {
                                element.phonetics.map(ph=>(
                                    <div>
                                    {ph.audio ? <audio controls><source src={ph.audio}></source></audio> : <p>No audio source</p>}
                                    <p>{ph.text}</p>  
                                    </div>
                                ))
                            }

                        </div>
                    }
                </div>
                    <div className="meanings">
                        {
                            element.meanings.map(w=>(
                                <div> 
                                <h3>{w.partOfSpeech}</h3>
                                    {w.antonyms.length!=0 && <div className="antsyn"><p>Antonyms : <ul style={{listStyleType:'circle'}}>{w.antonyms.map((e,index)=>{
                                      return <li>{e}</li> 
                                    })}
                                    </ul>
                                    </p> </div>}
                                    {w.synonyms.length!=0 && <div className="antsyn"><p>Synonyms :<ul style={{listStyleType:'circle'}}>{w.synonyms.map((e,index)=>{
                                      return <li>{e}</li> 
                                    })}
                                    </ul>
                                    </p></div>}
                                    {w.definitions.length!=0 && <div>
                                        <h4>Definitions</h4>
                                        <ul>{w.definitions.map(def=>(
                                        <li>
                                          <p>{def.definition}</p>
                                          {def.antonyms.length!=0 && <div><p>Antonyms : {def.antonyms.join(',')}</p> </div>}
                                          {def.synonyms.length!=0 && <div><p>Synonyms : {def.synonyms.join(',')}</p></div>} 
                                        </li>
                                       ))
                                       }</ul>
                    
                                        </div>}
                                </div>
                               
                                
                            ))
                        }
                    </div>
            </div>
        ))
    }   
    </div>
)
}
export default RenderData