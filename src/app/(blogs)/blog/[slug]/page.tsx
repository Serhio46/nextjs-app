import Image from 'next/image';
import { Suspense } from 'react';

import PostAuthor from '@/components/PostAuthor';
import { getPost } from '@/api/getData';

import cls from './SinglePost.module.css';
import { Metadata, ResolvingMetadata } from 'next/types';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // read route params
    const { slug } = params;

    // fetch data
    const post = await getPost(slug);

    return {
        title: post.title,
        description: post.desc,
        /* openGraph: {
            images: ['/some-specific-page-image.jpg', ...previousImages],
        }, */
    };
}

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
