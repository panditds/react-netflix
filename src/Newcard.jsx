import React from 'react';
import Example from './Form'; 


const Newcard=(props)=>{
    
  
   const onSavedata=(enteredData)=>{
    
    props.onAddnew(enteredData);

};
    
    return(
            <div className='newcard'>
            
                
                <Example onNewSavedata={onSavedata}/>
            </div>
    )
};

export default Newcard;
