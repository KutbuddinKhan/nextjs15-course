import { handleSubmission } from '@/app/action'
import SubmitButton from '@/components/general/SubmitButton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function CreateBlogRoute() {


    return (
        <div>
            <Card className='max-w-lg mx-auto'>
                <CardHeader>
                    <CardTitle>
                        Create New Blog Article
                    </CardTitle>
                    <CardDescription>
                        This is where you can create a new blog article, and share it with the world.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className='flex flex-col gap-4' action={handleSubmission}>
                        <div className='flex flex-col gap-2'>
                            <Label >
                                Title
                            </Label>
                            <Input name='title' placeholder='Enter your article title...' className='h-12' type='text' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label >
                                Content
                            </Label>
                            <Textarea name='content' placeholder='Write your article here...' className='h-36' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label >
                                Image URL
                            </Label>
                            <Input name="url" placeholder='Enter your article image URL...' className='h-12' type='url' required />
                        </div>

                        <SubmitButton />
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
