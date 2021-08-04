const action = require("../constan");
// FATCH_USER_REQUEST
// action creater
const fatchUserRequest = () => {
  return {
    type: action.FETCH_USER_REQUEST,
  };
};
const fatchUserSuccess = (users) => {
  return {
    type: action.FETCH_USER_SUCCESS,
    payload: users,
  };
};
const fatchUserFailure = (error) => {
  return {
    type: action.FETCH_USER_FAILURE,
    payload: error,
  };
};
module.exports = {
  fatchUserRequest,
  fatchUserSuccess,
  fatchUserFailure,
};
