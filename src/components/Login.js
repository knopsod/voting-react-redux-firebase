import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-sm-12 jumbotron">
            <h1>Login with ...</h1>
          </div>

          <div className="col-sm-6">
            <button className="btn btn-danger btn-lg">Google</button>
          </div>

          <div className="col-sm-6">
            <button className="btn btn-success btn-lg">Twitter</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
