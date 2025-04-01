import { getKindeServerSession, LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server"
import MaxWithWrapper from "./common/MaxWithWrapper";
import Link from "next/link";
import { Headphones } from "lucide-react";
import { buttonVariants } from "./ui/button";


const Navbar = async () => {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  return (
    <MaxWithWrapper className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-">
      <Link  
      href="/"
      className="flex items-center gap-2 text-lg font-semibold">

      <Headphones className="h-6 w-6" />
      <span>Listen-AI PRO</span>

      </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="">

          {
            user ? (
              <>
              <Link href="/dashbord/quizzes">Quizzes</Link>
              <Link href="/dashbord">Dashboard</Link>
              <LogoutLink  className={buttonVariants({
                    variant: "secondary",
                    size: "sm",
                  })}>
                    Logout
              </LogoutLink>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <RegisterLink 
                className={buttonVariants({
                  variant: "secondary",
                  size:"sm",
                })}>
                  Register
                </ RegisterLink>
              <LoginLink  className={buttonVariants({ variant: "default", size: "sm" })}>
                Login
              </LoginLink>
              </div>
            )
          }
        </div>
      </div>
      </nav>
    </MaxWithWrapper>
  )
}

export default Navbar



