
import React from 'react';

const Todos = ({todos}) => {
    console.log(todos)
  return (
    <ul className={'todos-container'}>
       {
           todos.map((item, i) => {
                 return (
                    <li key={i}>
                        <p> <input type="checkbox" name="todi-item" value={item} />  { item }</p>
                    </li>
                ) 
         })} 
    </ul>
  );
};

export default Todos; 