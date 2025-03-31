"use client";

import {Brain , LinkIcon, Youtube , } from "lucide-react";
import {Card } from "@/components/ui/card";
import {Button} from "./ui/button";
import {Input} from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Label } from "./ui/label";

const VideoUrlForm = () => {

    const router = useRouter();
    const [isSubmitting , setIsSubmitting] = useState(false)


  return (
    <Card className="p-6 md:p-8 mb-8 ">
        <form className="space-y-6">
             <div className="flex flex-col space-y-2">
                <Label htmlFor = "video-url"
                className="text-sm font-medium"
                >YouTube Video URL
                </Label>
                <div className="flex gap-3">
                    <div className="relative flex-1">
                        <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="video url" name="video-url" 
                        placeholder="https://youtu.be/DkGoiF1yqTc?si=DDdsDKbmpj10ZSwU"
                        className="p1-9"
                        required
                        disabled={isSubmitting} 
                        />
                    </div>
                    <Button type="submit" className={`gap-2 ${isSubmitting ? "opacity-50 cursor-not-allowed" : "" }`}>
                        {
                            isSubmitting ? "Generating..." : "Generate Quiz"
                        }
                        <Brain  className="w-4 h-4" />
                    </Button>
                </div>
             </div>
             <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                <Youtube className="w-16 h-16 text-muted-foreground" />
                </div>
             </div>
        </form>
    </Card>
  )
}

export default VideoUrlForm