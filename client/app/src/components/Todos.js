
import React from 'react';

const Todos = ({todos}) => {
  return (
    <div>
       {todos.map((item, i) => {
                 return (
                    <div>
                        <p key={i}> { item }</p>
                    </div>
                ) 
         })} 
    </div>
  );
};

export default Todos; 