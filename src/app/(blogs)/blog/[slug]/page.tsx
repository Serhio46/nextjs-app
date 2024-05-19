import { Post } from '@/components/Post';
import { getPost } from '@/api/getData';
import { Metadata } from 'next/types';

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
    return <Post post={JSON.parse(JSON.stringify(post))} />;
};

export default SinglePostPage;
