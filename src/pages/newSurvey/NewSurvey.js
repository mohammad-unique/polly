import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import { TextField } from '@material-ui/core';

const NewSurvey = () => {
    return (
        <div>
            <PageTitle title="Create New Survey" />
            <PageTitle title={"Create New Survey"} />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
    );
};

export default NewSurvey;