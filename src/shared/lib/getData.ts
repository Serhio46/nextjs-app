import { Post, User } from '@/shared/models';
import { connectToDb } from '@/utils';

export type Post = {
    title: string;
    desc: string;
    img: string;
    userId: string;
    id: string;
    createdAt: string;
    slug: string;
};

type Posts = Post[];

export const getPosts = async (): Promise<Posts> => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error('Failed fetch posts');
    }
};

export const getPost = async (slug: string): Promise<Post> => {
    try {
        connectToDb();
        const post = await Post.findOne({ slug });
        return post;
    } catch (error) {
        console.log(error);
        throw new Error('Failed fetch post');
    }
};

export const getPostAuthor = async (userId: string) => {
    try {
        connectToDb();
        const user = await User.findById(userId);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error('Failed fetch user author');
    }
};

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error('Failed fetch users');
    }
};
