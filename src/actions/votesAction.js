import { GET_VOTES, VOTES_STATUS } from '../actionTypes';
import { votesRef } from '../firebase';

export function getVotes() {
  return dispatch => {
    dispatch({
      type: VOTES_STATUS,
      payload: true,
    });

    votesRef.on('value', snapshot => {
      dispatch({
        type: GET_VOTES,
        payload: snapshot.val(),
      });

      dispatch({
        type: VOTES_STATUS,
        payload: false,
      });

    }, () => {
      dispatch({
        type: VOTES_STATUS,
        payload: -1,
      })
    });
  };
};

export function saveVote(vote) {
  return dispatch => votesRef.push(vote);
};

export function removeVote(id) {
  return dispatch => votesRef.child(id).remove();
};