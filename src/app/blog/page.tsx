import PostCard from '@/components/PostCard';

import cls from './blog.module.css';

const Blog = () => {
    return (
        <div className={cls.container}>
            <div className={cls.post}>
                <PostCard />
            </div>
            <div className={cls.post}>
                <PostCard />
            </div>
            <div className={cls.post}>
                <PostCard />
            </div>
            <div className={cls.post}>
                <PostCard />
            </div>
        </div>
    );
};

export default Blog;
