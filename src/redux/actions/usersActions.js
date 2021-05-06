import { GET_USERS_FETCH, GET_USERS_SUCCESS, GET_USERS_FAILERE } from '../types';

export const getUsers = () => {
  return async (dispatch) => {
    dispatch({type: GET_USERS_FETCH});
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if(response.status !== 200){
      dispatch({type: GET_USERS_FAILERE});
    };

    const payload = await response.json();

    dispatch({
      type: GET_USERS_SUCCESS,
      payload,
    });
  };
};
