'use client';

import Link from 'next/link';

const Error = () => {
    return (
        <div>
            <h1>Something went wrong</h1>
            <button>
                <Link href='/'>Go back to home</Link>
            </button>
        </div>
    );
};

export default Error;
