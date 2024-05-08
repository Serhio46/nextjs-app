import Image from 'next/image';
import { Suspense } from 'react';

import PostAuthor from '@/components/PostAuthor';
import { getPost } from '@/api/getData';

import cls from './SinglePost.module.css';

type Props = {
    params: {
        slug: string;
    };
};

const SinglePostPage = async ({ params }: Props) => {
    const { slug } = params;

    const post = await getPost(slug);

    return (
        <div className={cls.container}>
            <div className={cls.imgContainer}>
                <Image
                    src={
                        'https://plus.unsplash.com/premium_photo-1714675739730-65a1203d6bda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8'
                    }
                    alt=''
                    fill
                    className={cls.img}
                />
            </div>

            <div className={cls.textContainer}>
                <h1 className={cls.title}>{post.title}</h1>
                <div className={cls.detail}>
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostAuthor userId={post.id} />
                        </Suspense>
                    )}
                    <div className={cls.detailText}>
                        <span className={cls.detailTitle}>Published</span>
                        <span className={cls.detailValue}>{post.createdAt?.toString().slice(4, 16)}</span>
                    </div>
                </div>
                <div className={cls.content}>{post.body}</div>
            </div>
        </div>
    );
};

export default SinglePostPage;
