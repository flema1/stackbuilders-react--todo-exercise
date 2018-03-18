
import React from 'react';

const TodoForm = ({onInputUpdate, value, onKeyPress, disabled}) => {
  return (
    <div>
      <div className="todo-form-group">
        <input 
          className='todo-form-input' 
          type="text" 
          name="todo" 
          placeholder='Write something to do...' 
          onChange={(e)=>onInputUpdate(e)}
          value={value}
          onKeyPress={(e)=>onKeyPress(e)}
          disabled = {disabled}
        />
      </div>
    </div>
  );
};

export default TodoForm; 