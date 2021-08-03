const Action = require("../constan");
const initialState = {
  numOfCake: 20,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.GET_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};

module.exports = cakeReducer;
