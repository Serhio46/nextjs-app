import Image from 'next/image';

import { getPostAuthor } from '@/api/getData';
import cls from './postAuthor.module.css';

type Props = {
    userId: string;
};

const PostAuthor = async ({ userId }: Props) => {
    const user = await getPostAuthor(userId);

    return (
        <div className={cls.container}>
            <Image className={cls.avatar} src={user.img ? user.img : '/noavatar.png'} alt='' width={50} height={50} />
            <div className={cls.texts}>
                <span className={cls.title}>Author</span>
                <span className={cls.username}>{user.username}</span>
            </div>
        </div>
    );
};

export default PostAuthor;
