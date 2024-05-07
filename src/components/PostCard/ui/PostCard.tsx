import Image from 'next/image';
import Link from 'next/link';

import cls from './PostCard.module.css';

const PostCard = () => {
    return (
        <div className={cls.container}>
            <div className={cls.top}>
                <div className={cls.imgContainer}>
                    <Image
                        src='https://images.unsplash.com/photo-1521575107034-e0fa0b594529?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdHxlbnwwfHwwfHx8MA%3D%3D'
                        alt=''
                        fill
                        className={cls.img}
                    />
                </div>
                <span className={cls.date}>05.07.2024</span>
            </div>
            <div className={cls.bottom}>
                <h1 className={cls.title}>Title</h1>
                <p className={cls.desc}>Desc</p>
                <Link className={cls.link} href={`/blog/post`}>
                    READ MORE
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
