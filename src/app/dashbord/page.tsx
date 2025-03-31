import React from 'react'
import MaxWithWrapper from "@/components/common/MaxWithWrapper";
import { Badge } from "@/components/ui/badge";
import { Brain, MessageSquare, Sparkle, Sparkles } from 'lucide-react';
import VideoUrlForm from "@/components/VideoUrlForm";

import { Card } from '@/components/ui/card';
const page = () => {
  return (
    <MaxWithWrapper className="mt-20">
        <div className="text-center space-y-4 mb-12">
        <Badge variant ="secondary" className="mb-4">
            <Sparkle className="w-3 h-3 mr-1" />
            Listen-PRO AI
        </Badge>
        <h1 className="text-4xl foont-bold tracking-tight sm:text-5xl">
            Generate smart quizzes from <span className="text-red-500">Youtube</span>
            videos
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto ">
            Transform your YouTube video into an interactive quiz with AI.
        </p>
        </div>
        <VideoUrlForm />
        <div className="grid md:grid-cols-3 gap-8">
            {
              [
                {
                  icon: <Brain className="w-5 h-5" />,
                  title: "Smart Questions",
                  description: "AI generates relevant questions based on video content"
                },
                {
                  icon: <MessageSquare className="w-5 h-5" />,
                  title: "Multiple Formats",
                  description: "Mix of multiple choice, true/false, and open-ended questions"
                },
                {
                  icon: <Sparkles className="w-5 h-5" />,
                  title: "Instant Generation",
                  description: "Get your quiz ready in seconds, not minutes"
                }
              ].map((feature,i)=> (
                <Card key ={i} className="p-6 hover:shadow-lg transition-shadow ">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))
            }
            </div>
      
    </MaxWithWrapper>
  )
}

export default page