import React from 'react';
import './ListDisp.scss';


export const ListDisplay = ({
    saveValue,
    show,
    state
}) => {
    let id = ''
    let newText = ''
    function inputVal(e)  {
        id = e.target.id
        newText = e.target.value
        console.log(newText)
        e.preventDefault();
    }
    function saveVal(e) {
        console.log("List saveVal",id)
        console.log("List saveVal",newText)
        saveValue(id,newText)
        e.preventDefault();
        
    }
    return (
        <div>
            <form className="display-form" onSubmit={saveVal}>
            {state.Items.map((item,index) => 
            (
                <div key={index}>
                    <input type="text" onChange={inputVal}  id={item.key}  defaultValue={item.text} />
                    <button type="submit"  className="btn btn-sm">update</button>
                </div>
            ))}
            </form>
        </div>
    )
}
