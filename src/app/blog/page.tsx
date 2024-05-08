import PostCard from '@/components/PostCard';
import { getPosts } from '@/api/getData';

import cls from './blog.module.css';

const Blog = async () => {
    const posts = await getPosts();

    return (
        <div className={cls.container}>
            {posts.map(post => {
                return (
                    <div className={cls.post} key={post.id}>
                        <PostCard title={post.title} body={post.body} id={post.id} />
                    </div>
                );
            })}
        </div>
    );
};

export default Blog;
