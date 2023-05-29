import React, { FC, useState } from 'react';
import classes from './MyLablelInput.module.css'


const MyLablelInput: FC<any> = ({ children, ...props }) => {

    const [myLablelInput, setMyLablelInput] = useState<any>()


    return (
        <div className={classes.myLblInp}>
            <label> {children}
                {/* <input {...props} value={myLablelInput} onChange={(Event: React.ChangeEvent<HTMLInputElement>) => setMyLablelInput(Event.target.value)} /> */}
                <input {...props} />
            </label>
        </div>
    );
};

export default MyLablelInput;