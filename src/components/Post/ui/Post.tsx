'use client';
import Image from 'next/image';
import { Suspense } from 'react';
import PostAuthor from '@/components/PostAuthor';

import cls from './Post.module.css';
import { Post as PostType } from '@/api/getData';
import { deletePost } from '@/shared/lib/postActions';

type PostProps = { post: PostType };

export const Post = ({ post }: PostProps) => {
    const handleDelete = async () => {
        await deletePost(post.slug);
    };

    return (
        <div className={cls.container}>
            <div className={cls.imgContainer}>
                <Image src={post.img} alt='' fill className={cls.img} />
            </div>

            <div className={cls.textContainer}>
                <h1 className={cls.title}>{post.title}</h1>
                <div className={cls.detail}>
                    {/* {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostAuthor userId={post.userId} />
                        </Suspense>
                    )} */}
                    <div className={cls.detailText}>
                        <span className={cls.detailTitle}>Published</span>
                        <span className={cls.detailValue}>{post.createdAt?.toString().slice(4, 16)}</span>
                    </div>
                </div>
                <div className={cls.content}>{post.desc}</div>
                <button className={cls.button} onClick={handleDelete}>
                    Delete post
                </button>
            </div>
        </div>
    );
};
