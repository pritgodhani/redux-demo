const redux = require("redux");
const buycake = require("./actions/cake");
const buyIceCreams = require("./actions/iceCream");
// console.log(buyIceCreams());
// console.log(buycake());
const createStore = redux.createStore;
const rootReduser = require("./redusers/rootReduser");
// console.log("rootreduser", rootReduser);
const reducere = redux.combineReducers(rootReduser);

const store = createStore(reducere);

console.log("getstate value", store.getState());
const unsubscrib = store.subscribe(() => {
  console.log("getstate valu", store.getState());
});
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyIceCreams());
unsubscrib();
console.log(store.dispatch);
