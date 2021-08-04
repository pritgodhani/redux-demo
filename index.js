const redux = require("redux");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMedelwer = redux.applyMiddleware;

const actionCreater = require("./actions/indexOfActionCreater");
// console.log(buyIceCreams());
// console.log(buycake());
const createStore = redux.createStore;
const rootReduser = require("./redusers/rootReduser");
// console.log("rootreduser", rootReduser);
const reducere = redux.combineReducers(rootReduser);

const store = createStore(reducere, applyMedelwer(logger));

console.log("getstate value", store.getState());
const unsubscrib = store.subscribe(() => {});
store.dispatch(actionCreater.cakeCreater());
store.dispatch(actionCreater.cakeCreater());
store.dispatch(actionCreater.userCreater.fatchUserSuccess("prit"));
unsubscrib();
console.log(store.dispatch);
