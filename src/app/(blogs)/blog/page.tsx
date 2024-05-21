import PostCard from '@/components/PostCard';
import { getPosts } from '@/shared/lib/getData';
import Link from 'next/link';

import cls from './blog.module.css';

const Blog = async () => {
    const posts = await getPosts();

    return (
        <div>
            <Link className={cls.button} href={'/createpost'}>
                Add new post
            </Link>
            <div className={cls.container}>
                {posts.map(post => {
                    return (
                        <div className={cls.post} key={post.id}>
                            <PostCard post={post} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Blog;
