import MaxWithWrapper from "@/components/common/MaxWithWrapper";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Sparkle } from "lucide-react";
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
          </Link>
        </div>
      </div>
    </section>
    </MaxWithWrapper>
  );
}
