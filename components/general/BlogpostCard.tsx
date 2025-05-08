import Image from 'next/image';
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
                <div className='relative h-48 w-full'>
                    <Image
                        src={data.imageUrl}
                        alt={data.title}
                        fill
                        className='object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                </div>

                <div className='p-4'>
                    <h3 className='mb-2 text-lg font-semibold text-gray-800'>{data.title}</h3>
                    <p className='mb-4 text-gray-600 line-clamp-3'>{data.content}</p>

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-2'>
                            <div className='relative size-8 overflow-hidden rounded-full'>
                                <Image
                                    src={data.authorImage}
                                    alt={data.authorName}
                                    width={32}
                                    height={32}
                                    className='h-8 w-8 rounded-full'
                                />
                            </div>
                            <span className='text-sm font-medium text-gray-700'>{data.authorName}</span>
                        </div>
                        
                        <time className='text-xs text-gray-600'>
                            {new Date(data.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>
                    </div>
                </div>
            </Link>

        </div>
    )
}
