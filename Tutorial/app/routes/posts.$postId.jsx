import { useLoaderData, useParams } from '@remix-run/react';
import { db } from '../services/db';

export const loader = async ({ params }) => {
    const post = await db.post.findUnique({
        where: {
            id: parseInt(params.postId)
        }
    })

    return { post }
}

export default function SinglePost() {
    const { post } = useLoaderData()

    return (
        <>
            <h2>{post.title}</h2>
            <p>
                {post.body}
            </p>
        </>
    );
}