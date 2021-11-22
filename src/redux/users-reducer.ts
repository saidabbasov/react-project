

let initState = {
    users: [
        {id:1, name:'Said Eldarovich'},
        {id:2, name:'Amir'},
        {id:3, name:'Asiya'},
        {id:4, name:'Aleksey'},
    ]
}

type InitStateType = typeof initState;

const usersReducer = (state=initState, action:any):InitStateType => {

    switch(action.type) {

        default:
            return state;
    }
}

export default usersReducer; 