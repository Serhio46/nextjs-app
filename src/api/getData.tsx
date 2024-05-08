export type Post = {
    title: string;
    body: string;
    img: string;
    id: string;
    createdAt: string;
};

type Posts = Post[];

export const getPosts = async (): Promise<Posts> => {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts');

    if (!res.ok) {
        throw new Error('Something went wrong');
    }

    return res.json();
};

export const getPost = async (slug: string): Promise<Post> => {
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${slug}`, { cache: 'no-cache' });
    if (!res.ok) {
        throw new Error('Something went wrong');
    }

    return res.json();
};

export const getPostAuthor = async (userId: string) => {
    const res = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);

    if (!res.ok) {
        throw new Error('Something went wrong');
    }

    return res.json();
};
