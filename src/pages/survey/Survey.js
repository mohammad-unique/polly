import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import MUIDataTable from "mui-datatables";
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";

const Survey = () => {
    const datatableData = [
        ["Joe James", "Example Inc.", "Yonkers", "NY"],
        ["John Walsh", "Example Inc.", "Hartford", "CT"],
      ];

    return (
        <div>
            <PageTitle title="Survey"  button={<Button
                                                variant="contained"
                                                size="medium"
                                                color="secondary" >
                                                <Link to={"/app/survey/add"}>New Survey</Link>
                                                </Button>}
    
            />
            <MUIDataTable
            title="Employee List"
            data={datatableData}
            columns={["Name", "Company", "City", "State"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </div>
    );
};

export default Survey;