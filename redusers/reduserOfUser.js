const Action = require('../constan')
const initialState={
    loading=false,
    users=[],
    error:''
}
const reduserOfUser = (state,action)=>{
switch(action.type){
    case Action.FETCH_USER_REQUEST:return{
        loading=true

    }
    case Action.FETCH_USER_SUCCESS:return{
        loading:false,
        users:action.users
    }
    case Action.FETCH_USER_FAILURE:return{
        loading:false,
        users:action.users
    }
}
}