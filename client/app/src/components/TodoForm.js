
import React from 'react';

const TodoForm = ({onInputUpdate, value, onKeyPress}) => {
  return (
    <div>
       
            <div className="todo-form-group">
                <label htmlFor={'email'}>What to do</label>
                <input 
                    className='todo-form-input' 
                    type="text" 
                    name="todo" 
                    placeholder='Write something to do...' 
                    onChange={(e)=>onInputUpdate(e)}
                    value={value}
                    onKeyPress={(e)=>onKeyPress(e)}
                />
            </div>
    </div>
  );
};

export default TodoForm; 