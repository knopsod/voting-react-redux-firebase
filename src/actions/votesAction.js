import { GET_VOTES } from '../actionTypes';
import { database } from '../firebase';

export function getVotes() {
  return dispatch => {
    database.on('value', snapshot => {
      dispatch({
        type: GET_VOTES,
        payload: snapshot.val()
      });
    });
  };
};

export function saveVote(vote) {
  return dispatch => database.push(vote);
}