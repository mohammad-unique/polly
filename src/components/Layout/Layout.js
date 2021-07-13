import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import classnames from "classnames";

//icons

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
// import Dashboard from "../../pages/dashboard";
// import Typography from "../../pages/typography";
// import Notifications from "../../pages/notifications";
// import Maps from "../../pages/maps";
// import Tables from "../../pages/tables";
// import Icons from "../../pages/icons";
// import Charts from "../../pages/charts";
import Survey from "../../pages/survey/Survey";
import NewSurvey from "../../pages/newSurvey/NewSurvey";
import NewTemplate from "../../pages/templates/NewTemplate";
import CreateSurvey from "../../pages/createSurvey/CreateSurvey";
import ViewSurveys from "../../pages/viewSurveys/ViewSurveys";
import Statistics from "../../pages/statistics/Statistics";

// context
import { useLayoutState } from "../../context/LayoutContext";
import SurveyPreview from "../../pages/templates/surveyPreview";


function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            {/* <Route path="/app/dashboard" component={Dashboard} /> */}
            <Route path="/app/survey/add" component={NewSurvey} />
            <Route path="/app/survey" component={Survey} />
            <Route path="/app/preview" component={SurveyPreview} />
            <Route path="/app/newTemplate" component={NewTemplate} />
            <Route path="/app/createSurvey" component={CreateSurvey} />
            <Route path="/app/viewSurveys" component={ViewSurveys} />
            <Route path="/app/statistics" component={Statistics} />
            {/* <Route path="/app/typography" component={Typography} />
              <Route path="/app/tables" component={Tables} />
              <Route path="/app/notifications" component={Notifications} />  */}
            {/* <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} /> */}
          </Switch>

        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);