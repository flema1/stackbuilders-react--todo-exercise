
import React from 'react';

const FormErrors = ({ errors }) => {
  return (
    <div>
        {Object.keys(errors).map((fieldName, i) => {
            if (errors[fieldName]!==''){
                 return (
                    <p key={i}>{fieldName} { errors[fieldName] }</p>
                ) 
            } else return null;       
         })}
    </div>
  );
};

export default FormErrors; 