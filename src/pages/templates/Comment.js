import React from 'react';
import { TextField } from '@material-ui/core';

const Comment = () => {
    return (
        <div>
            <TextField id="outlined-basic" label="Please Enter Question" variant="outlined" className='template-Container__Items template-Container__Question' />
        </div>
    );
};

export default Comment;