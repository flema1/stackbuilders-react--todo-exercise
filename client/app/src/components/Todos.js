
import React from 'react';

const Todos = ({todos}) => {
    console.log(todos)
  return (
    <div>
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