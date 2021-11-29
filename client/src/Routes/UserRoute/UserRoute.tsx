import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

interface UserRouteProps {
    path: string;
    Component: any;
    auth: {
        isAuthenticated: Boolean,
        user: {
            userType: string,
        }
    };
}

const UserRoute: React.FC<UserRouteProps> = ({path, Component, auth}) => {
 
  return (
    <Route
    path={path}
    exact
    render={props =>
      (auth.isAuthenticated === true && auth.user.userType === 'user') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
  );
};

const mapStateToProps = (state: { auth: any; }) => ({
  auth: state.auth
});
export default connect(mapStateToProps)(UserRoute);
