
import React from 'react';

const Todos = ({todos}) => {
    console.log(todos)
  return (
    <div className={'todos-container'}>
       {
           todos.map((item, i) => {
                 return (
                    <div key={i}>
                        <p > { item }</p>
                    </div>
                ) 
         })} 
    </div>
  );
};

export default Todos; 