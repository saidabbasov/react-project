const ADD_POST = "ADD_POST";

let initState = {
    posts: [
        {id:1, message:"Заранее прошу прошу прошения за отстутвия верстки, сделал акцент на функциональность. ", likesCount:50},
        {id:2, message:"Сделал валидацию🙂 при помощи реакта и редакса добавлений комментарий, есть роутинг", likesCount:60},
        {id:3, message:"Так же прошу обратить внимание на то как расписан код все по полочкам + типизирован TypeScript'ом ", likesCount:80},
    ]
}

type InitStateType = typeof initState

const profileReducer = (state=initState, action:actoins):InitStateType => {

    switch(action.type) {

        case ADD_POST: {
            let newPost = {
                id:4,
                message: action.newPostText,
                likesCount:0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
            
        }

        default:
            return state;
    }
}

type actoins = AddPostActionType

type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPost = (newPostText:string):AddPostActionType => ({type:ADD_POST,newPostText})


export default profileReducer;