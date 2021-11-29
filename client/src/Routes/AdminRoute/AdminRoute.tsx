import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

interface AdminRouteProps {
    path: string;
    Component: any;
    auth: {
        isAuthenticated: Boolean,
        user: {
            userType: string,
        }
    };
}

const AdminRoute: React.FC<AdminRouteProps> = ({path, Component, auth}) => {
 
  return (
    <Route
    path={path}
    exact
    render={props =>
      (auth.isAuthenticated === true && auth.user.userType === 'admin') ? (
        <Component />
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
export default connect(mapStateToProps)(AdminRoute);
