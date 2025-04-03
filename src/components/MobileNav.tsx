"use client";


import * as React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";


interface MobileNavProps {
    user?: {
        email: string;
      
        given_name: string;
        family_name: string;
    } | null;
}


const MobileNav = ({user}: MobileNavProps) => {
    const [open , setOpen] = React.useState(false);
    return (
    <Sheet open={open} onOpenChange={setOpen}>

        <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full xs:w-80">
            <SheetHeader>
                <SheetTitle>Listening-AI</SheetTitle>
                <SheetDescription>
                    A language learning app that uses AI to help your learn languages.
                </SheetDescription>
            </SheetHeader>
            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
           
             <div className="flex flex-col gap-2 pt-4">
              {
              user ? (
                <>
                  <Link
                    href="/dashbord"
                    className={buttonVariants({ variant: "default" })}
                  >
                    Dashboard
                  </Link>
                  <LogoutLink
                    className={buttonVariants({ variant: "secondary", size: "sm" })}
                  >
                    Logout
                  </LogoutLink>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                <RegisterLink className={buttonVariants({ variant: "secondary", size:"sm" })}>
                  Sign In
                </RegisterLink>
                <LoginLink className={buttonVariants({ variant: "default" , size:"sm" })}>
                  Sign In
                </LoginLink>
                </div>
              )}
            </div>
       
            </ScrollArea>

        </SheetContent>
    </Sheet>
  )
}

export default MobileNav