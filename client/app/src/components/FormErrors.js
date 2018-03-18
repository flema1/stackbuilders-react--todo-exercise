
import React from 'react';

const FormErrors = ({ errors, clear}) => {
  return (
    <div>
        {Object.keys(errors).map((fieldName, i) => {
            if (errors[fieldName]!==''){
                 return (
                    <div>
                        <p key={i}> { errors[fieldName] }</p>
                        <p onClick={()=>clear()}>close error</p>
                    </div>
                ) 
            } else return null;       
         })}
    </div>
  );
};

export default FormErrors; 