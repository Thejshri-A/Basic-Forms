import { useState } from "react"
import './styles.css'
import data from './data'

export default function Accordian(){

    const[selected, setSelected]=useState(null)

    function handleSingleSelection(getCurrentId){
        console.log(getCurrentId)
        setSelected(getCurrentId===selected?null: getCurrentId);
    }

    return(
        <div className="wrapper">
            <div className="accordian">
                {data && data.length>0 ? 
                data.map(dataitem=> <div className="item">
                    <div className="title" onClick={()=>handleSingleSelection(dataitem.id)}>
                        <h3>{dataitem.question}</h3>
                        <span>
                            +
                        </span>
                    </div>
                    {selected=== dataitem.id?
                    <div className="content">
                        {dataitem.answer}
                    </div>:null}
                    </div>)
                : <div>No Data Found</div>}
            </div>
        </div>

    )
} 