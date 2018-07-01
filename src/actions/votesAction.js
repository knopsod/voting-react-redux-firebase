import { GET_VOTES } from '../actionTypes';
import { votes } from '../firebase';

export function getVotes() {
  return dispatch => {
    votes.on('value', snapshot => {
      dispatch({
        type: GET_VOTES,
        payload: snapshot.val()
      });
    });
  };
};

export function saveVote(vote) {
  return dispatch => votes.push(vote);
}