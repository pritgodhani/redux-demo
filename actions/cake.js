const action = require("../constan");
// Action Creator
const buycake = () => {
  return {
    type: action.GET_CAKE,
    info: "first redux action",
  };
};
module.exports = buycake;
