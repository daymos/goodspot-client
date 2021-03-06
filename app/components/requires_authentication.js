// @flow
import React, { Component, PropTypes } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getIsLoggedIn } from '../reducers';

const mapStateToProps =
  (state) =>
    ({
      isLoggedIn: getIsLoggedIn(state),
    });


const connector =
  compose(withRouter, connect(mapStateToProps));


const requiresAuthentication =
  (MyComponent: ReactClass<{}>,
   redirectPath: string,
   requiredAuthStatus: boolean = true): ReactClass<{}> =>
    connector(class AuthenticatedComponent extends Component {

      static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        router: PropTypes.object.isRequired,
      }

      componentWillMount(): void {
        this.checkAuth();
      }

      componentWillReceiveProps(): void {
        this.checkAuth();
      }

      componentDidUpdate(): void {
        this.checkAuth();
      }

      checkAuth(): void {
        if (this.props.isLoggedIn !== requiredAuthStatus) {
          this.props.router.push(redirectPath);
        }
      }

      render() {
        return this.props.isLoggedIn === requiredAuthStatus
          ? (<MyComponent {...this.props} />)
          : null;
      }
    });


export default requiresAuthentication;
