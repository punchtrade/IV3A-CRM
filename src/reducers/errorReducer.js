import { GET_ERRORS } from "/Users/carmenbuendia/DevProjects/IV3A/src/client/actions/types.js";
const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ERRORS:
        return action.payload;
      default:
        return state;
    }
  }