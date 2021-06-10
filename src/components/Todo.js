import React from 'react'
import './Todo.css'
import { useState } from 'react'
function Todo() {
  const [items, setitems] = useState([]);
  const [txtValue, settxtValue] = useState("");
  
  

  let txtChange=(e)=>{
    const newItem = e.target.value;
    settxtValue(newItem);
    

  }


  let addItem=(event)=>{
    event.preventDefault();
    const newItem = items;
    newItem.unshift({content: txtValue,isCompleted: false});
    txtValue===""?alert("content can not be blank"):setitems([...newItem]);
    settxtValue("");

  }



  let removeItem=(i)=>{
    let currentItems = items;
    currentItems.splice(i,1);
    setitems([...currentItems])
  }
  let taskCompleted=(k)=>{
    const newItem=items;
    newItem[k].isCompleted = !newItem[k].isCompleted;
    setitems([...newItem]);
    
  }
    


    return (
      <div className="todoapp">
        
        <div className="HeaderLayout">
          <h3 className="titlehead">ToDo App</h3>
          <div className="addingTask">
            <input onChange={txtChange}  className="input-task"  value={txtValue} type="text" placeholder="Enter items..."/>
            <button onClick={addItem} className="button-add btn " type="button">
              Add
            </button>
          </div>
        </div>

        <div className="displayTask">
        {items.map(({content, isCompleted},k)=>{
        return(
               <div className="carddisplay">
                <div className="one">
                <input onChange={()=>taskCompleted(k)} checked={isCompleted} type="checkbox"/>
                  <p className="task-content" key={k} style={{textDecoration:isCompleted ? 'line-through':'none'}} >{content}</p>
                </div>
                <div className="two">
                  
                  <i  onClick={ ()=>removeItem(k)  } className="fas fa-trash trashicon"></i>
                </div>
              </div>
              
            )})}
        </div>
        
      </div>
    );
    
}

export default Todo
