
import React from 'react';

const FormErrors = ({ errors, clear}) => {
  return (
    <div>
        {Object.keys(errors).map((fieldName, i) => {
            if (errors[fieldName]!==''){
                 return (
                    <div key={i}> 
                        <p > { errors[fieldName] }</p>
                        <p onClick={()=>clear()}>close error</p>
                    </div>
                ) 
            }
         })}
    </div>
  );
};

export default FormErrors; 