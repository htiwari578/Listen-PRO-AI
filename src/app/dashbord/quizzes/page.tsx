import MaxWithWrapper from '@/components/common/MaxWithWrapper'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardAction, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const page = () => {
    const quizzes = []
  return (
    <MaxWithWrapper>
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Quizzes</h1>
            <Link href ="/dashboard" className={buttonVariants({variant: "outline"})}>
            Create Quiz
            </Link>
        </div>
        {
            quizzes.length === 0 ? (
                <Card className='bg-muted'>
                    <CardContent className='flex flex-col items-center justify-center py-10 text-center'>
                        <div className="tex-4xl  mb-4">🔍</div>
                        <h3 className="text-2xl font-semibold mb-2 ">No quizzes yet</h3>
                        <p className="text-muted-foreground mb-4 ">
                            Create your first quiz to get started
                        </p>
                        <Link href = "/dashboard" className={buttonVariants({variant: "outline"})}>
                            Create Quiz
                        </Link>

                    </CardContent>
                </Card>
            ) : (

            )
        }
    </MaxWithWrapper>
  )
}

export default page