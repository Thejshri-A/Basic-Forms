import { useState } from "react"
import './styles.css'
import data from './data'

export default function Accordian(){

    const[selected, setSelected]=useState(null);
    const[enableMultiSelection, setEnableMultiSelection]= useState(false);
    const[multiple, setMultiple]= useState([])

    function handleSingleSelection(getCurrentId){
        console.log(getCurrentId)
        setSelected(getCurrentId===selected?null: getCurrentId);
    }

    function handleMultipleSelection(getCurrentId){
        let copyMultiple=[...multiple]
        const findIndexOfCurrentId=copyMultiple.indexOf(getCurrentId)
        console.log(findIndexOfCurrentId, "find indexof current id")
        if(findIndexOfCurrentId===-1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(copyMultiple)
    }
    
    console.log(selected, multiple)
    return(
        <div className="wrapper">
            <button onClick={()=>{setEnableMultiSelection(!enableMultiSelection)}}>
                Enable Multi-Selection
            </button>
            <div className="accordian">
                {data && data.length>0 ? 
                data.map(dataitem=> <div className="item">
                    <div className="title" onClick={enableMultiSelection? 
                    ()=> handleMultipleSelection(dataitem.id):
                        ()=>handleSingleSelection(dataitem.id)}>
                        <h3>{dataitem.question}</h3>
                        <span>
                            +
                        </span>
                    </div>
                    {enableMultiSelection?
                    multiple.indexOf(dataitem.id) !==-1   && (
                        <div className="content">
                        {dataitem.answer}
                    </div>
                    ) :
                    selected=== dataitem.id && (
                        <div className="content">
                        {dataitem.answer}
                    </div>
                    )

                }
                    {/* {selected=== dataitem.id || multiple.indexOf(dataitem.id)!==-1?
                    <div className="content">
                        {dataitem.answer}
                    </div>:null} */}
                    </div>)
                : <div>No Data Found</div>}
            </div>
        </div>

    )
} 