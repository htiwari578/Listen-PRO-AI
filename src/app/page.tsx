import MaxWithWrapper from "@/components/common/MaxWithWrapper";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, ChevronDown, ChevronRight, Headphones, Play, Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWithWrapper className="bg-background text-foreground"> 
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-6 gap-10">
      <div className="max-w-xl text-center lg:text-left space-y-6 ">
        <Badge variant={"secondary"} className="mb-4">
          <Sparkle className="w-3 h-3 mr-1" />
          Listen-PRO AI
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl leading-tight">
          Master any language through <span className="text-primary relative">Active listening 
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
          </span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Transform your language learning journey with AI-powered exercises.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/about" className={buttonVariants({variant:"default"})}>
          Get Started
          <ChevronRight className="w-4 h-4 ml-2" />
           
          
          </Link>
          <Link href="/about" className={buttonVariants({variant:"outline"})}>
          Learn More
          <Play className="w-4 h-4 ml-2"/>
          </Link>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-background/10 mix-blend-overlay "></div>
        <iframe className="w-full h-full "
        src="https://www.youtube.com/embed/Z9jICgFMy2M?si=3YF1WovwjxOJsb66"
        title="Youtube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share"
        allowFullScreen
        >
      </iframe>
      </div>
      <div className="absolute -bottom-6 -right-6 -z-10 w-72 bg-primary/10 rounded-full blur-3xl "></div>
      </div>

    </section>
    <section className="container mx-auto py-20 px-6 ">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold  mb-4 ">How it works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our AI-powered platform makes language learning easy and fun.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
      {
        [
          {
            icon: <Headphones className="w-6 h-6 "/>,
            title: "Active Listening",
            description: "Practice listening to native speakers and improve your coprehension skills",
          },
          {
            icon: <Brain className="w-6 h-6 " />,
            title: "AI analysis",
            description:"Get instant quizes to test your understanding",
          },
          {
            icon: <Play className="w-6 h-6" />,
            title: "Interactive exercises",
            description:"Engage with AI-generated exercises to rainforce your learning.",
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

    </section>
    <section className="py-10">
      <div className="relative rounded-2xl bg-primary p-8 md:p-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70 "></div>
        <div className="relative-z-10 max-w-2xl mx-auto text-center text-primary-foreground ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your language learning?
          </h2>
          <p className="text-primary-foreground/9 mb-8 ">
          Join thousands of learners who have already transformed their language learning with our platform.
          </p>
          <Button className={buttonVariants({variant: "secondary"})}>
            Get Started Now!
          </Button>
        </div>
      </div>
    </section>
    </MaxWithWrapper>
  );
}
