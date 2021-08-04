const action = require("../constan");
console.log(action.BUY_ICECREAMS);
// action Creaters
const buyIceCreams = () => {
  return { type: action.BUY_ICECREAMS, info: "buy ice creams" };
};
module.exports = buyIceCreams;