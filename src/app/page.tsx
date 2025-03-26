import MaxWithWrapper from "@/components/common/MaxWithWrapper";
import { Badge } from "@/components/ui/badge";
import { Sparkle } from "lucide-react";
import Image from "next/image";

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
      </div>
    </section>
    </MaxWithWrapper>
  );
}
