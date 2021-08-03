const Action = require("../constan");
const initialState = {
  numOfIceCreams: 20,
};
const buyicecream = (state = initialState, action) => {
  switch (action.type) {
    case Action.BUY_ICECREAMS:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 2,
      };
    default:
      return state;
  }
};
module.exports = buyicecream;
