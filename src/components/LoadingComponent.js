import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/userAction';
import { getVotes } from '../actions/votesAction';

class LoadingComponent extends Component {
  componentWillMount() {
    const {userLoading, votesLoading} = this.props;
    
    if (userLoading === undefined) {
      this.props.getUser();
    }

    if (votesLoading === undefined) {
      this.props.getVotes();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.votesLoading === -1 && nextProps.user !== null) {
      this.props.getVotes();
    }
  }

  render() {
    const { userLoading, votesLoading, children } = this.props;
    if ((!userLoading && !votesLoading) || this.props.user === null) {
      return <div>{ children }</div>
    } else {
      return <div>
        <h2>Loading...</h2>
      </div>
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userLoading: state.loading.user,
    votesLoading: state.loading.votes,
  };
}

export default withRouter(connect(mapStateToProps, { getUser, getVotes })(LoadingComponent));