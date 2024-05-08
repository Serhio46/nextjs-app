import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/api/getData';

import cls from './PostCard.module.css';

type PostCardProps = {
    post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
    const { title, desc, slug, img } = post;
    return (
        <div className={cls.container}>
            <div className={cls.top}>
                {img && (
                    <div className={cls.imgContainer}>
                        <Image src={img} alt='' fill className={cls.img} />
                    </div>
                )}
                <span className={cls.date}>05.07.2024</span>
            </div>
            <div className={cls.bottom}>
                <h1 className={cls.title}>{title}</h1>
                <p className={cls.desc}>{desc}</p>
                <Link className={cls.link} href={`/blog/${slug}`}>
                    READ MORE
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
