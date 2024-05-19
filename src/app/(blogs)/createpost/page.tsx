import cls from './createpost.module.css';
import { addPost } from '@/shared/lib/postActions';

const CreatePost = async () => {
    return (
        <div className={cls.container}>
            <h1>Create a new post</h1>
            <form className={cls.form} action={addPost}>
                <input type='text' placeholder='Author' name='author' className={cls.input} />
                <input type='text' placeholder='Title' name='title' className={cls.input} />
                <input type='text' placeholder='Slug' name='slug' className={cls.input} />
                <textarea placeholder='Content' name='content' className={cls.input} />
                <button className={cls.button}>Submit</button>
            </form>
        </div>
    );
};

export default CreatePost;
