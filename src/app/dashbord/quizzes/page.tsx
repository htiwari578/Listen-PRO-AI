import MaxWithWrapper from '@/components/common/MaxWithWrapper'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardFooter } from '@/components/ui/card'
import { CalendarDays, ListChecks } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    const quizzes = [];
  return (
    <MaxWithWrapper className="mt-20">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Quizzes</h1>
            <Link href ="/dashbord" className={buttonVariants({variant: "outline"})}>
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
                        <Link href = "/dashbord" className={buttonVariants({variant: "outline"})}>
                            Create Quiz
                        </Link>

                    </CardContent>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        quizzes?.map(quiz => {
                            return (
                                <Card key ={quiz.id} className='hover:shadow-lg transition-shadow' >
                                    <CardContent className="pt-4">
                                        <div className="space-y-4">
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <CalendarDays className="mr-2 h-4 w-4 " />
                                                {
                                                    new Date(quiz.createdAt).toLocaleDateString()
                                                }
                                            </div>
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <ListChecks className="mr-2 h-4 w-4" />
                                                {quiz.questions.length} questions
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Link href= {`/dashbord/quizzes/${quiz.id}`} className={buttonVariants({variant:"default"})}>
                                                Take Quiz
                                        </Link>
                                    </CardFooter>
                                </Card>
                            )
                        })
                    }
                </div>
            )
        }
    </MaxWithWrapper>
  )
}

export default page