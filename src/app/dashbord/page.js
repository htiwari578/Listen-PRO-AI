import React from 'react'
import MaxWithWrapper from "@/components/common/MaxWithWrapper";
import { Badge } from "@/components/ui/badge";
import { Sparkle } from 'lucide-react';
const page = () => {
  return (
    <MaxWithWrapper>
        <div className="text-center space-y-4 mb-12">
        <Badge variant ="secondary" className="mb-4">
            <Sparkle className="w-3 h-3 mr-1" />
            Listen-PRO AI
        </Badge>
        </div>

    </MaxWithWrapper>
  )
}

export default page