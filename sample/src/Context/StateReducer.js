export const initializevalue={
    isLoggedIn:JSON.parse(localStorage.getItem("isLoggedIn")) ||false,
    
}

export const stateReducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return{
                ...state,
                isLoggedIn:action.payload,
            }
            default:
                return state;
    }
}