import Link from 'next/link'
import React from 'react'

interface BlogpostCardProps {
    data: {
        id: string;
        title: string;
        content: string;
        imageUrl: string;
        authorId: string;
        authorImage: string;
        authorName: string;
        createdAt: Date;
        updatedAt: Date;
    }
}

export default function BlogpostCard({ data }: BlogpostCardProps) {

    return (
        <div className='group relative overflow-hidden rounded-lg border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg'>
            <Link href={`/post/${data.id}`} className='block h-full w-full'>
            </Link>

        </div>
    )
}
