import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { prisma } from '../utils/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import BlogpostCard from '@/components/general/BlogpostCard'

async function getData(userId: string) {
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  return data;
}

export default async function DashboardRoute() {
  const { getUser } = getKindeServerSession()
  const user = await getUser();

  const data = await getData(user?.id ?? "")


  return (
   <div>
    <div className="flex items-center justify-between mb-4">
      <h2 className='text-2xl font-medium'>Your Blog Articles</h2>

      <Link href="/dashboard/create" className={buttonVariants()}>
        Create New Article
      </Link>

    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {data.map((item) => (
        <div key={item.id} >
          <BlogpostCard data={item} key={item.id} />
        </div>
      ))}
    </div>

   </div>
  )
}