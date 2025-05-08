import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default async function DashboardRoute() {
  
  return (
   <div>
    <div className="flex items-center justify-between mb-4">
      <h2 className='text-2xl font-medium'>Your Blog Articles</h2>

      <Link href="/dashboard/create" className={buttonVariants()}>
        Create New Article
      </Link>

    </div>
   </div>
  )
}