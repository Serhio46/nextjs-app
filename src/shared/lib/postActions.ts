'use server';

import { Post } from '@/shared/models';
import { connectToDb } from '@/utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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

export const deletePost = async (id: string) => {
    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        revalidatePath('/blogs');
        redirect('/blogs');
    } catch (error) {
        console.error(error);
    }
};
