import { Field, reduxForm } from "redux-form";
import Post from "./Post/Post";
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from "../../common/FormsControls/FormsControls";



const MyPosts = (props) => {
    let postElements = props.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)


    const onAddPost = (value) => {
        props.addPost(value.newPostText)
    }
    return(
        <div>
            <AddMyPostsReduxForm onSubmit={onAddPost} />
            {postElements}
        </div>
    )
}

const maxLength30 = maxLengthCreator(30)

const AddMyPostsForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newPostText" validate={[required, maxLength30]} />
            <div><button>Send</button></div>
        </form>
    )
}

const AddMyPostsReduxForm = reduxForm({form:"profileAddMyPostsForm"})(AddMyPostsForm)

export default MyPosts;