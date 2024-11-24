import React from 'react'

function CreateToDo({toDo, settoDo, createItem}) {
    
    function handleChange(e){
        e.preventDefault();
        settoDo(e.target.value);        
    }

  return (
    <div className='container mt-4'>
        <label class="form-label h4 text-primary mb-3">TASK</label>
        <input type="text"
        className='form-control'
        value={toDo}
        onChange={handleChange}
        name='toDoContent' 
        />
        <button onClick={createItem} className='btn btn-primary fs-5 px-4 mt-4'>Send</button>
    </div>
  )
}

export default CreateToDo