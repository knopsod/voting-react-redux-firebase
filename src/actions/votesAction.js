import { GET_VOTES } from '../actionTypes';
import { votesRef } from '../firebase';

export function getVotes() {
  return dispatch => {
    votesRef.on('value', snapshot => {
      dispatch({
        type: GET_VOTES,
        payload: snapshot.val()
      });
    });
  };
};

export function saveVote(vote) {
  return dispatch => votesRef.push(vote);
}