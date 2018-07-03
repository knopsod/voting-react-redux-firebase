import { GET_VOTES } from '../actionTypes';
import { votesRef } from '../firebase';
import { deleteVote } from './votesAction';

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
};

export function removeVote(id) {
  return dispatch => votesRef.child(id).remove();
};