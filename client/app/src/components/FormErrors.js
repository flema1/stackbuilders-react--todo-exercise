
import React from 'react';

const FormErrors = ({ errors, clear}) => {
  return (
    <div className={'errors-container'}>
        {Object.keys(errors).map((fieldName, i) => {
            if (errors[fieldName]!==''){
                 return (
                    <div className={'errors-section'} key={i}> 
                        <p> { errors[fieldName] } </p>
                        <span className={'clear-error'} onClick={()=>clear()}> &#10799; </span>
                    </div>
                ) 
            }
         })}
    </div>
  );
};

export default FormErrors; 