import {
  GET_USERS_FETCH,
  GET_USERS_SUCCESS,
  GET_USERS_FAILERE,
} from '../types';

const initialState = {
  loading: false,
  error: false,
  users: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_USERS_FETCH:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_FAILERE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...payload],
      };
    default:
      return state;
  }
}
