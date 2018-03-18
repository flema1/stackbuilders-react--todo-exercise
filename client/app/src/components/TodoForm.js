
import React from 'react';

const TodoForm = ({onInputUpdate, value }) => {
  return (
    <div>
        <form name="todoForm">
            <div className="todo-form-group">
                <label htmlFor={'email'}>What to do</label>
                <input 
                    className='todo-form-input' 
                    type="text" 
                    name="todo" 
                    placeholder='Write something to do...' 
                    onChange={(e)=>onInputUpdate(e)}
                    value={value}
                />
                <button className="add-Btn" onClick={()=>console.log('add')}>add</button>
            </div>
        </form>
    </div>
  );
};

export default TodoForm; 