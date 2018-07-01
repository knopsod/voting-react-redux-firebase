import React, { Component } from 'react';
import { database } from '../firebase';
import _ from 'lodash';
import * as moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      body: '',
      votes: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderVotes = this.renderVotes.bind(this);
  }

  componentDidMount() {
    database.on('value', (snapshot) => {
      this.setState({
        votes: snapshot.val()
      });
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const vote = {
      title: this.state.title,
      body: this.state.body,
      createdAt: moment.now()
    }

    database.push(vote);

    this.setState({
      title: '',
      body: ''
    });
  }

  renderVotes() {
    return _.map(this.state.votes, (vote, key) => {
      return (
        <div key={key}>
          <h2>{vote.title}</h2>
          <p>{vote.body}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control no-border"
                  placeholder="Title..."
                  required
                  value={this.state.title}
                  onChange={this.handleChange}/>
              </div>

              <div className="form-group">
                <textarea
                  type="text"
                  name="body"
                  className="form-control no-border"
                  placeholder="Body..."
                  required
                  value={this.state.body}
                  onChange={this.handleChange}
                  />
              </div>

              <div className="form-group">
                <button className="btn btn-primary col-sm-12">
                  Vote
                </button>
              </div>
            </form>
            { this.renderVotes() }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
