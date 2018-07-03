import React, { Component } from 'react';
import { connect } from 'react-redux';

import { googleLogin, twitterLogin } from '../actions/userAction';

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-sm-12 jumbotron" style={{ marginTop: '-20px' }}>
            <h1>Login with ...</h1>
          </div>

          <div className="col-sm-6">
            <button className="btn btn-danger btn-lg" onClick={this.props.googleLogin}>Google</button>
          </div>
          <br />
          <div className="col-sm-6">
            <button className="btn btn-success btn-lg" onClick={this.props.twitterLogin}>Twitter</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { googleLogin, twitterLogin })(Login);
