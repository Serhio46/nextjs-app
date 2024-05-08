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
                <Image src={post.img} alt='' fill className={cls.img} />
            </div>

            <div className={cls.textContainer}>
                <h1 className={cls.title}>{post.title}</h1>
                <div className={cls.detail}>
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostAuthor userId={post.userId} />
                        </Suspense>
                    )}
                    <div className={cls.detailText}>
                        <span className={cls.detailTitle}>Published</span>
                        <span className={cls.detailValue}>{post.createdAt?.toString().slice(4, 16)}</span>
                    </div>
                </div>
                <div className={cls.content}>{post.desc}</div>
            </div>
        </div>
    );
};

export default SinglePostPage;
