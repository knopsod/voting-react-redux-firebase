import React from 'react';

const voteCard = (props) => (
  <div className="jumbotron">
    <div>{ props.children }</div>
  </div>
);

export default voteCard;