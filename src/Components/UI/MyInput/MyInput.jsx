import React from 'react';
import classes from './MyInput.modules.css'


const MyInput = (
    { ...props }
) => {
    return (
        <div>
            <input className={classes.myInpt} {...props} />
        </div>
    )
};

export default MyInput;