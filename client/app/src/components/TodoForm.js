
import React from 'react';

const TodoForm = ({onInputUpdate, input }) => {
  return (
    <div>
        <form name="todoForm">
            <div className="todo-form-group">
                <input 
                    className='todo-form-input' 
                    type="text" 
                    type="newTodo" 
                    placeholder='Write something to do...' 
                    onChange={(e)=>onInputUpdate(e)}
                    value={input}
                />
                <button className="add-Btn" onClick={()=>console.log('add')}>add</button>
            </div>
        </form>
    </div>
  );
};

export default TodoForm; 