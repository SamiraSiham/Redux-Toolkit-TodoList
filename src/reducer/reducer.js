const reducer =(state , action)=>{
    switch(action.type){
        case "AddTodo":
            return {...state , item : [...state.items , action.payload]};
        case "DeleteTodo":
            return {
                ...state ,
                item : [
                    ...state.items.filter((i) => i.id !== parseInt(action.payload) )
                ]
            }
        default:
            return state;
    }
}