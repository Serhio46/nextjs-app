'use server';

import { Post } from '@/shared/models';
import { connectToDb } from '@/utils';
import { revalidatePath } from 'next/cache';

export const addPost = async (formData: FormData) => {
    const { title, author, slug, content } = Object.fromEntries(formData);
    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc: content,
            slug,
            userId: author,
        });
        await newPost.save();
        revalidatePath('/blogs');
    } catch (error) {
        console.error(error);
    }
};

export const deletePost = async (formData: FormData) => {
    const { id } = Object.fromEntries(formData);
    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        revalidatePath('/blogs');
    } catch (error) {
        console.error(error);
    }
};
